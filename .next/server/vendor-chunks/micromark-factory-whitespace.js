"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-whitespace";
exports.ids = ["vendor-chunks/micromark-factory-whitespace"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-factory-whitespace/dev/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark-factory-whitespace/dev/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryWhitespace: () => (/* binding */ factoryWhitespace)\n/* harmony export */ });\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-factory-space */ \"(ssr)/./node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol/types.js */ \"(ssr)/./node_modules/micromark-util-symbol/types.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n */\n\n\n\n\n\n/**\n * Parse spaces and tabs.\n *\n * There is no `nok` parameter:\n *\n * *   line endings or spaces in markdown are often optional, in which case this\n *     factory can be used and `ok` will be switched to whether spaces were found\n *     or not\n * *   one line ending or space can be detected with\n *     `markdownLineEndingOrSpace(code)` right before using `factoryWhitespace`\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @returns\n *   Start state.\n */\nfunction factoryWhitespace(effects, ok) {\n  /** @type {boolean} */\n  let seen\n\n  return start\n\n  /** @type {State} */\n  function start(code) {\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownLineEnding)(code)) {\n      effects.enter(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding)\n      effects.consume(code)\n      effects.exit(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding)\n      seen = true\n      return start\n    }\n\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)) {\n      return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_2__.factorySpace)(\n        effects,\n        start,\n        seen ? micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.linePrefix : micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.lineSuffix\n      )(code)\n    }\n\n    return ok(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3Rvcnktd2hpdGVzcGFjZS9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0EsYUFBYSx3Q0FBd0M7QUFDckQsYUFBYSxzQ0FBc0M7QUFDbkQ7O0FBRW9EO0FBQ3NCO0FBQ3RCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7O0FBRUEsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsUUFBUSw0RUFBa0I7QUFDMUIsb0JBQW9CLGlFQUFLO0FBQ3pCO0FBQ0EsbUJBQW1CLGlFQUFLO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVFQUFhO0FBQ3JCLGFBQWEscUVBQVk7QUFDekI7QUFDQTtBQUNBLGVBQWUsaUVBQUssY0FBYyxpRUFBSztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb21wdC1kYXRhLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3Rvcnktd2hpdGVzcGFjZS9kZXYvaW5kZXguanM/NTBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRWZmZWN0c30gRWZmZWN0c1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqL1xuXG5pbXBvcnQge2ZhY3RvcnlTcGFjZX0gZnJvbSAnbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UnXG5pbXBvcnQge21hcmtkb3duTGluZUVuZGluZywgbWFya2Rvd25TcGFjZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHt0eXBlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL3R5cGVzLmpzJ1xuXG4vKipcbiAqIFBhcnNlIHNwYWNlcyBhbmQgdGFicy5cbiAqXG4gKiBUaGVyZSBpcyBubyBgbm9rYCBwYXJhbWV0ZXI6XG4gKlxuICogKiAgIGxpbmUgZW5kaW5ncyBvciBzcGFjZXMgaW4gbWFya2Rvd24gYXJlIG9mdGVuIG9wdGlvbmFsLCBpbiB3aGljaCBjYXNlIHRoaXNcbiAqICAgICBmYWN0b3J5IGNhbiBiZSB1c2VkIGFuZCBgb2tgIHdpbGwgYmUgc3dpdGNoZWQgdG8gd2hldGhlciBzcGFjZXMgd2VyZSBmb3VuZFxuICogICAgIG9yIG5vdFxuICogKiAgIG9uZSBsaW5lIGVuZGluZyBvciBzcGFjZSBjYW4gYmUgZGV0ZWN0ZWQgd2l0aFxuICogICAgIGBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpYCByaWdodCBiZWZvcmUgdXNpbmcgYGZhY3RvcnlXaGl0ZXNwYWNlYFxuICpcbiAqIEBwYXJhbSB7RWZmZWN0c30gZWZmZWN0c1xuICogICBDb250ZXh0LlxuICogQHBhcmFtIHtTdGF0ZX0gb2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiBzdWNjZXNzZnVsLlxuICogQHJldHVybnNcbiAqICAgU3RhcnQgc3RhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3J5V2hpdGVzcGFjZShlZmZlY3RzLCBvaykge1xuICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gIGxldCBzZWVuXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIodHlwZXMubGluZUVuZGluZylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmxpbmVFbmRpbmcpXG4gICAgICBzZWVuID0gdHJ1ZVxuICAgICAgcmV0dXJuIHN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5U3BhY2UoXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBzZWVuID8gdHlwZXMubGluZVByZWZpeCA6IHR5cGVzLmxpbmVTdWZmaXhcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-factory-whitespace/dev/index.js\n");

/***/ })

};
;