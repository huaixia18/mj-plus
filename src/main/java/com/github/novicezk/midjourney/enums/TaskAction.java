package com.github.novicezk.midjourney.enums;


public enum TaskAction {
	/**
	 * 生成图片.
	 */
	IMAGINE,
	/**
	 * 选中放大.
	 */
	UPSCALE,
	/**
	 * 选中其中的一张图，生成四张相似的.
	 */
	VARIATION,
	/**
	 * 图片变焦.
	 */
	ZOOM,
	/**
	 * 焦点移动.
	 */
	PAN,
	/**
	 * 图转prompt.
	 */
	DESCRIBE,
	/**
	 * 多图混合.
	 */
	BLEND,
	/**
	 * prompt分析.
	 */
	SHORTEN,
	/**
	 * 人脸替换.
	 */
	SWAP_FACE

}
