"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/MermaidChart.tsx":
/*!*****************************************!*\
  !*** ./src/components/MermaidChart.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ generateMermaidChart; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction generateMermaidChart(utterances, dialogs, services) {\n    let diagram = \"graph LR\\n\";\n    let utteranceCounter = 0;\n    let dialogCounter = 0;\n    // Construct diagram string for utterances and dialogs\n    utterances.forEach((utterance)=>{\n        if (utterance.dialogKey) {\n            const utteranceId = \"Utterance_\".concat(utteranceCounter++);\n            const dialogId = \"Dialog_\".concat(dialogCounter++);\n            diagram += \"\".concat(utteranceId, '[\"').concat(utterance.utterance, '\"] --> ').concat(dialogId, \"\\n\");\n        }\n    });\n    // Reset dialog counter for dialog to service mapping\n    dialogCounter = 0;\n    // Construct diagram string for dialogs and services\n    dialogs.forEach((dialog)=>{\n        const dialogId = \"Dialog_\".concat(dialogCounter++);\n        const service = services.find((s)=>s.name === dialog.serviceKey);\n        if (service) {\n            const serviceId = \"Service_\".concat(service.name.replace(/\\s/g, \"_\"));\n            diagram += \"\".concat(dialogId, \" --> \").concat(serviceId, '[\"').concat(service.name, '\"]\\n');\n        }\n    });\n    // Log the final diagram string\n    console.log(\"Mermaid Diagram:\", diagram);\n    // Create a new mermaid div\n    const mermaidDiv = document.createElement(\"div\");\n    mermaidDiv.className = \"mermaid\";\n    mermaidDiv.innerHTML = diagram;\n    return diagram;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01lcm1haWRDaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRVYsU0FBU0MscUJBQXFCQyxVQUFpQixFQUFFQyxPQUFjLEVBQUVDLFFBQWU7SUFFM0YsSUFBSUMsVUFBVTtJQUNkLElBQUlDLG1CQUFtQjtJQUN2QixJQUFJQyxnQkFBZ0I7SUFFcEIsc0RBQXNEO0lBQ3RETCxXQUFXTSxPQUFPLENBQUNDLENBQUFBO1FBQ2YsSUFBSUEsVUFBVUMsU0FBUyxFQUFFO1lBQ3JCLE1BQU1DLGNBQWMsYUFBZ0MsT0FBbkJMO1lBQ2pDLE1BQU1NLFdBQVcsVUFBMEIsT0FBaEJMO1lBQzNCRixXQUFXLEdBQW1CSSxPQUFoQkUsYUFBWSxNQUFpQ0MsT0FBN0JILFVBQVVBLFNBQVMsRUFBQyxXQUFrQixPQUFURyxVQUFTO1FBQ3hFO0lBQ0o7SUFFQSxxREFBcUQ7SUFDckRMLGdCQUFnQjtJQUVoQixvREFBb0Q7SUFDcERKLFFBQVFLLE9BQU8sQ0FBQ0ssQ0FBQUE7UUFDWixNQUFNRCxXQUFXLFVBQTBCLE9BQWhCTDtRQUMzQixNQUFNTyxVQUFVVixTQUFTVyxJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLElBQUksS0FBS0osT0FBT0ssVUFBVTtRQUMvRCxJQUFJSixTQUFTO1lBQ1QsTUFBTUssWUFBWSxXQUE0QyxPQUFqQ0wsUUFBUUcsSUFBSSxDQUFDRyxPQUFPLENBQUMsT0FBTztZQUN6RGYsV0FBVyxHQUFtQmMsT0FBaEJQLFVBQVMsU0FBcUJFLE9BQWRLLFdBQVUsTUFBaUIsT0FBYkwsUUFBUUcsSUFBSSxFQUFDO1FBQzdEO0lBQ0o7SUFFQSwrQkFBK0I7SUFDL0JJLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JqQjtJQUVoQywyQkFBMkI7SUFDM0IsTUFBTWtCLGFBQWFDLFNBQVNDLGFBQWEsQ0FBQztJQUMxQ0YsV0FBV0csU0FBUyxHQUFHO0lBQ3ZCSCxXQUFXSSxTQUFTLEdBQUd0QjtJQUV2QixPQUFPQTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01lcm1haWRDaGFydC50c3g/OGEzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlTWVybWFpZENoYXJ0KHV0dGVyYW5jZXM6IGFueVtdLCBkaWFsb2dzOiBhbnlbXSwgc2VydmljZXM6IGFueVtdKSB7XG5cbiAgICBsZXQgZGlhZ3JhbSA9ICdncmFwaCBMUlxcbic7XG4gICAgbGV0IHV0dGVyYW5jZUNvdW50ZXIgPSAwO1xuICAgIGxldCBkaWFsb2dDb3VudGVyID0gMDtcblxuICAgIC8vIENvbnN0cnVjdCBkaWFncmFtIHN0cmluZyBmb3IgdXR0ZXJhbmNlcyBhbmQgZGlhbG9nc1xuICAgIHV0dGVyYW5jZXMuZm9yRWFjaCh1dHRlcmFuY2UgPT4ge1xuICAgICAgICBpZiAodXR0ZXJhbmNlLmRpYWxvZ0tleSkge1xuICAgICAgICAgICAgY29uc3QgdXR0ZXJhbmNlSWQgPSBgVXR0ZXJhbmNlXyR7dXR0ZXJhbmNlQ291bnRlcisrfWA7XG4gICAgICAgICAgICBjb25zdCBkaWFsb2dJZCA9IGBEaWFsb2dfJHtkaWFsb2dDb3VudGVyKyt9YDtcbiAgICAgICAgICAgIGRpYWdyYW0gKz0gYCR7dXR0ZXJhbmNlSWR9W1wiJHt1dHRlcmFuY2UudXR0ZXJhbmNlfVwiXSAtLT4gJHtkaWFsb2dJZH1cXG5gO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBSZXNldCBkaWFsb2cgY291bnRlciBmb3IgZGlhbG9nIHRvIHNlcnZpY2UgbWFwcGluZ1xuICAgIGRpYWxvZ0NvdW50ZXIgPSAwO1xuXG4gICAgLy8gQ29uc3RydWN0IGRpYWdyYW0gc3RyaW5nIGZvciBkaWFsb2dzIGFuZCBzZXJ2aWNlc1xuICAgIGRpYWxvZ3MuZm9yRWFjaChkaWFsb2cgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2dJZCA9IGBEaWFsb2dfJHtkaWFsb2dDb3VudGVyKyt9YDtcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHNlcnZpY2VzLmZpbmQocyA9PiBzLm5hbWUgPT09IGRpYWxvZy5zZXJ2aWNlS2V5KTtcbiAgICAgICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VJZCA9IGBTZXJ2aWNlXyR7c2VydmljZS5uYW1lLnJlcGxhY2UoL1xccy9nLCAnXycpfWA7XG4gICAgICAgICAgICBkaWFncmFtICs9IGAke2RpYWxvZ0lkfSAtLT4gJHtzZXJ2aWNlSWR9W1wiJHtzZXJ2aWNlLm5hbWV9XCJdXFxuYDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTG9nIHRoZSBmaW5hbCBkaWFncmFtIHN0cmluZ1xuICAgIGNvbnNvbGUubG9nKCdNZXJtYWlkIERpYWdyYW06JywgZGlhZ3JhbSk7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgbWVybWFpZCBkaXZcbiAgICBjb25zdCBtZXJtYWlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVybWFpZERpdi5jbGFzc05hbWUgPSAnbWVybWFpZCc7XG4gICAgbWVybWFpZERpdi5pbm5lckhUTUwgPSBkaWFncmFtO1xuXG4gICAgcmV0dXJuIGRpYWdyYW07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJnZW5lcmF0ZU1lcm1haWRDaGFydCIsInV0dGVyYW5jZXMiLCJkaWFsb2dzIiwic2VydmljZXMiLCJkaWFncmFtIiwidXR0ZXJhbmNlQ291bnRlciIsImRpYWxvZ0NvdW50ZXIiLCJmb3JFYWNoIiwidXR0ZXJhbmNlIiwiZGlhbG9nS2V5IiwidXR0ZXJhbmNlSWQiLCJkaWFsb2dJZCIsImRpYWxvZyIsInNlcnZpY2UiLCJmaW5kIiwicyIsIm5hbWUiLCJzZXJ2aWNlS2V5Iiwic2VydmljZUlkIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJtZXJtYWlkRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MermaidChart.tsx\n"));

/***/ })

});