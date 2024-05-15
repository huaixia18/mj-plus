package com.github.novicezk.midjourney.wss.handle;

import cn.hutool.core.text.CharSequenceUtil;
import com.github.novicezk.midjourney.Constants;
import com.github.novicezk.midjourney.domain.Task;
import com.github.novicezk.midjourney.enums.MessageType;
import com.github.novicezk.midjourney.enums.TaskAction;
import com.github.novicezk.midjourney.loadbalancer.DiscordInstance;
import com.github.novicezk.midjourney.service.TranslateService;
import com.github.novicezk.midjourney.condition.TaskCondition;
import net.dv8tion.jda.api.utils.data.DataArray;
import net.dv8tion.jda.api.utils.data.DataObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Set;

/**
 * shorten消息处理.
 */
@Component
public class ShortenSuccessHandler extends MessageHandler {
	@Autowired
	private TranslateService translateService;

	@Override
	public int order() {
		return 10;
	}

	@Override
	public void handle(DiscordInstance instance, MessageType messageType, DataObject message) {
		String messageId = message.getString("id");
		if (MessageType.CREATE.equals(messageType)) {
			String referenceMessageId = getReferenceMessageId(message);
			if (CharSequenceUtil.isNotBlank(referenceMessageId)) {
				// maybe show details
				finishShortenTask(instance, message, referenceMessageId);
				return;
			}
			String interactionName = getInteractionName(message);
			if (!"shorten".equals(interactionName)) {
				return;
			}
			// 任务开始
			message.put(Constants.MJ_MESSAGE_HANDLED, true);
			String nonce = getMessageNonce(message);
			Task task = instance.getRunningTaskByNonce(nonce);
			if (task == null) {
				return;
			}
			task.setProperty(Constants.TASK_PROPERTY_PROGRESS_MESSAGE_ID, messageId);
		} else if (MessageType.UPDATE.equals(messageType)) {
			finishShortenTask(instance, message, messageId);
		}
	}

	private void finishShortenTask(DiscordInstance instance, DataObject message, String progressMessageId) {
		DataArray embeds = message.getArray("embeds");
		if (CharSequenceUtil.isBlank(progressMessageId) || embeds.isEmpty()) {
			return;
		}
		TaskCondition condition = new TaskCondition().setActionSet(Set.of(TaskAction.SHORTEN)).setProgressMessageId(progressMessageId);
		Task task = instance.findRunningTask(condition).findFirst().orElse(null);
		if (task == null) {
			return;
		}
		message.put(Constants.MJ_MESSAGE_HANDLED, true);
		String description = embeds.getObject(0).getString("description");
		String zhDesc = this.translateService.translateToChinese(description);
		task.setProperty(Constants.TASK_PROPERTY_FINAL_PROMPT, description);
		task.setProperty(Constants.TASK_PROPERTY_FINAL_ZH_PROMPT, zhDesc);
		finishTask(task, message);
		task.awake();
	}

}
