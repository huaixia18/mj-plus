package com.github.novicezk.midjourney.enums;


import lombok.Getter;

public enum TaskStatus {
	/**
	 * 未启动.
	 */
	NOT_START(0),
	/**
	 * 已提交 Discord.
	 */
	SUBMITTED(1),
	/**
	 * 窗口等待.
	 */
	MODAL(2),
	/**
	 * 执行中.
	 */
	IN_PROGRESS(3),
	/**
	 * 失败.
	 */
	FAILURE(4),
	/**
	 * 成功.
	 */
	SUCCESS(4),
	/**
	 * 已取消.
	 */
	CANCEL(4);

	@Getter
	private final int order;

	TaskStatus(int order) {
		this.order = order;
	}
}
