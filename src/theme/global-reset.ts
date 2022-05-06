/* Document
   ========================================================================== */

const htmlReset = {
  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  lineHeight: 1.15 /* 1 */,
  WebkitTextSizeAdjust: "100%" /* 2 */,
}

/* Sections
   ========================================================================== */

const bodyReset = {
  /**
   * Remove the margin in all browsers.
   */
  margin: 0,
}

const hiddenReset = {
  /**
   * Add the correct display in IE 10.
   */
  display: "none",
}

export const globalReset = {
  html: htmlReset,
  body: bodyReset,
  "[hidden]": hiddenReset,
}
