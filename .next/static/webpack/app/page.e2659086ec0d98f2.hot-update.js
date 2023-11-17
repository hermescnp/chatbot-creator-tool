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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ generateMermaidChart; }\n/* harmony export */ });\nfunction generateMermaidChart(utterances, dialogs, services) {\n    let diagram = \"graph LR\\nclassDef utterance fill:#FFF\\n\";\n    let utteranceCounter = 0;\n    let nodeSet = new Set(); // Set to track created nodes\n    // Function to create a safe ID by replacing spaces\n    const createSafeId = (prefix, key)=>\"\".concat(prefix, \"_\").concat(key.replace(/\\s+/g, \"_\"));\n    // Construct diagram string for utterances and dialogs\n    utterances.forEach((utterance)=>{\n        if (utterance.dialogKey) {\n            const utteranceId = \"Utterance_:::utterance\".concat(utteranceCounter++);\n            const dialogId = createSafeId(\"Dialog\", utterance.dialogKey);\n            // Add utterance node\n            diagram += \"\".concat(utteranceId, '[\"').concat(utterance.utterance, '\"]\\n');\n            // Add dialog node if not already added\n            if (!nodeSet.has(dialogId)) {\n                diagram += \"\".concat(dialogId, '{{\"').concat(utterance.dialogKey, '\"}}\\n');\n                nodeSet.add(dialogId);\n            }\n            // Connect utterance to dialog\n            diagram += \"\".concat(utteranceId, \" -.-> \").concat(dialogId, \"\\n\");\n        }\n    });\n    // Construct diagram string for dialogs and services\n    dialogs.forEach((dialog)=>{\n        const dialogId = createSafeId(\"Dialog\", dialog.dialogKey);\n        const service = services.find((s)=>s.name === dialog.serviceKey);\n        if (service) {\n            const serviceId = createSafeId(\"Service\", service.name);\n            // Add service node if not already added\n            if (!nodeSet.has(serviceId)) {\n                diagram += \"\".concat(serviceId, '((\"').concat(service.name, '\"))\\n');\n                nodeSet.add(serviceId);\n            }\n            // Connect dialog to service\n            if (nodeSet.has(dialogId)) {\n                diagram += \"\".concat(dialogId, \" --> \").concat(serviceId, \"\\n\");\n            }\n        }\n    });\n    // Log the final diagram string\n    console.log(\"Mermaid Diagram:\", diagram);\n    // Create a new mermaid div\n    const mermaidDiv = document.createElement(\"div\");\n    mermaidDiv.className = \"mermaid\";\n    mermaidDiv.innerHTML = diagram;\n    return diagram;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01lcm1haWRDaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLHFCQUFxQkMsVUFBaUIsRUFBRUMsT0FBYyxFQUFFQyxRQUFlO0lBRTNGLElBQUlDLFVBQVU7SUFDZCxJQUFJQyxtQkFBbUI7SUFDdkIsSUFBSUMsVUFBVSxJQUFJQyxPQUFPLDZCQUE2QjtJQUV0RCxtREFBbUQ7SUFDbkQsTUFBTUMsZUFBZSxDQUFDQyxRQUFhQyxNQUFhLEdBQWFBLE9BQVZELFFBQU8sS0FBNEIsT0FBekJDLElBQUlDLE9BQU8sQ0FBQyxRQUFRO0lBRWpGLHNEQUFzRDtJQUN0RFYsV0FBV1csT0FBTyxDQUFDQyxDQUFBQTtRQUNmLElBQUlBLFVBQVVDLFNBQVMsRUFBRTtZQUNyQixNQUFNQyxjQUFjLHlCQUE0QyxPQUFuQlY7WUFDN0MsTUFBTVcsV0FBV1IsYUFBYSxVQUFVSyxVQUFVQyxTQUFTO1lBRTNELHFCQUFxQjtZQUNyQlYsV0FBVyxHQUFtQlMsT0FBaEJFLGFBQVksTUFBd0IsT0FBcEJGLFVBQVVBLFNBQVMsRUFBQztZQUVsRCx1Q0FBdUM7WUFDdkMsSUFBSSxDQUFDUCxRQUFRVyxHQUFHLENBQUNELFdBQVc7Z0JBQ3hCWixXQUFXLEdBQWlCUyxPQUFkRyxVQUFTLE9BQXlCLE9BQXBCSCxVQUFVQyxTQUFTLEVBQUM7Z0JBQ2hEUixRQUFRWSxHQUFHLENBQUNGO1lBQ2hCO1lBRUEsOEJBQThCO1lBQzlCWixXQUFXLEdBQXVCWSxPQUFwQkQsYUFBWSxVQUFpQixPQUFUQyxVQUFTO1FBQy9DO0lBQ0o7SUFFQSxvREFBb0Q7SUFDcERkLFFBQVFVLE9BQU8sQ0FBQ08sQ0FBQUE7UUFDWixNQUFNSCxXQUFXUixhQUFhLFVBQVVXLE9BQU9MLFNBQVM7UUFDeEQsTUFBTU0sVUFBVWpCLFNBQVNrQixJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLElBQUksS0FBS0osT0FBT0ssVUFBVTtRQUMvRCxJQUFJSixTQUFTO1lBQ1QsTUFBTUssWUFBWWpCLGFBQWEsV0FBV1ksUUFBUUcsSUFBSTtZQUV0RCx3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDakIsUUFBUVcsR0FBRyxDQUFDUSxZQUFZO2dCQUN6QnJCLFdBQVcsR0FBa0JnQixPQUFmSyxXQUFVLE9BQWtCLE9BQWJMLFFBQVFHLElBQUksRUFBQztnQkFDMUNqQixRQUFRWSxHQUFHLENBQUNPO1lBQ2hCO1lBRUEsNEJBQTRCO1lBQzVCLElBQUluQixRQUFRVyxHQUFHLENBQUNELFdBQVc7Z0JBQ3ZCWixXQUFXLEdBQW1CcUIsT0FBaEJULFVBQVMsU0FBaUIsT0FBVlMsV0FBVTtZQUM1QztRQUNKO0lBQ0o7SUFFQSwrQkFBK0I7SUFDL0JDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0J2QjtJQUVoQywyQkFBMkI7SUFDM0IsTUFBTXdCLGFBQWFDLFNBQVNDLGFBQWEsQ0FBQztJQUMxQ0YsV0FBV0csU0FBUyxHQUFHO0lBQ3ZCSCxXQUFXSSxTQUFTLEdBQUc1QjtJQUV2QixPQUFPQTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01lcm1haWRDaGFydC50c3g/OGEzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZU1lcm1haWRDaGFydCh1dHRlcmFuY2VzOiBhbnlbXSwgZGlhbG9nczogYW55W10sIHNlcnZpY2VzOiBhbnlbXSkge1xuXG4gICAgbGV0IGRpYWdyYW0gPSAnZ3JhcGggTFJcXG5jbGFzc0RlZiB1dHRlcmFuY2UgZmlsbDojRkZGXFxuJztcbiAgICBsZXQgdXR0ZXJhbmNlQ291bnRlciA9IDA7XG4gICAgbGV0IG5vZGVTZXQgPSBuZXcgU2V0KCk7IC8vIFNldCB0byB0cmFjayBjcmVhdGVkIG5vZGVzXG5cbiAgICAvLyBGdW5jdGlvbiB0byBjcmVhdGUgYSBzYWZlIElEIGJ5IHJlcGxhY2luZyBzcGFjZXNcbiAgICBjb25zdCBjcmVhdGVTYWZlSWQgPSAocHJlZml4OiBhbnksIGtleTogYW55KSA9PiBgJHtwcmVmaXh9XyR7a2V5LnJlcGxhY2UoL1xccysvZywgJ18nKX1gO1xuXG4gICAgLy8gQ29uc3RydWN0IGRpYWdyYW0gc3RyaW5nIGZvciB1dHRlcmFuY2VzIGFuZCBkaWFsb2dzXG4gICAgdXR0ZXJhbmNlcy5mb3JFYWNoKHV0dGVyYW5jZSA9PiB7XG4gICAgICAgIGlmICh1dHRlcmFuY2UuZGlhbG9nS2V5KSB7XG4gICAgICAgICAgICBjb25zdCB1dHRlcmFuY2VJZCA9IGBVdHRlcmFuY2VfOjo6dXR0ZXJhbmNlJHt1dHRlcmFuY2VDb3VudGVyKyt9YDtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0lkID0gY3JlYXRlU2FmZUlkKCdEaWFsb2cnLCB1dHRlcmFuY2UuZGlhbG9nS2V5KTtcblxuICAgICAgICAgICAgLy8gQWRkIHV0dGVyYW5jZSBub2RlXG4gICAgICAgICAgICBkaWFncmFtICs9IGAke3V0dGVyYW5jZUlkfVtcIiR7dXR0ZXJhbmNlLnV0dGVyYW5jZX1cIl1cXG5gO1xuXG4gICAgICAgICAgICAvLyBBZGQgZGlhbG9nIG5vZGUgaWYgbm90IGFscmVhZHkgYWRkZWRcbiAgICAgICAgICAgIGlmICghbm9kZVNldC5oYXMoZGlhbG9nSWQpKSB7XG4gICAgICAgICAgICAgICAgZGlhZ3JhbSArPSBgJHtkaWFsb2dJZH17e1wiJHt1dHRlcmFuY2UuZGlhbG9nS2V5fVwifX1cXG5gO1xuICAgICAgICAgICAgICAgIG5vZGVTZXQuYWRkKGRpYWxvZ0lkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ29ubmVjdCB1dHRlcmFuY2UgdG8gZGlhbG9nXG4gICAgICAgICAgICBkaWFncmFtICs9IGAke3V0dGVyYW5jZUlkfSAtLi0+ICR7ZGlhbG9nSWR9XFxuYDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ29uc3RydWN0IGRpYWdyYW0gc3RyaW5nIGZvciBkaWFsb2dzIGFuZCBzZXJ2aWNlc1xuICAgIGRpYWxvZ3MuZm9yRWFjaChkaWFsb2cgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2dJZCA9IGNyZWF0ZVNhZmVJZCgnRGlhbG9nJywgZGlhbG9nLmRpYWxvZ0tleSk7XG4gICAgICAgIGNvbnN0IHNlcnZpY2UgPSBzZXJ2aWNlcy5maW5kKHMgPT4gcy5uYW1lID09PSBkaWFsb2cuc2VydmljZUtleSk7XG4gICAgICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlSWQgPSBjcmVhdGVTYWZlSWQoJ1NlcnZpY2UnLCBzZXJ2aWNlLm5hbWUpO1xuXG4gICAgICAgICAgICAvLyBBZGQgc2VydmljZSBub2RlIGlmIG5vdCBhbHJlYWR5IGFkZGVkXG4gICAgICAgICAgICBpZiAoIW5vZGVTZXQuaGFzKHNlcnZpY2VJZCkpIHtcbiAgICAgICAgICAgICAgICBkaWFncmFtICs9IGAke3NlcnZpY2VJZH0oKFwiJHtzZXJ2aWNlLm5hbWV9XCIpKVxcbmA7XG4gICAgICAgICAgICAgICAgbm9kZVNldC5hZGQoc2VydmljZUlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ29ubmVjdCBkaWFsb2cgdG8gc2VydmljZVxuICAgICAgICAgICAgaWYgKG5vZGVTZXQuaGFzKGRpYWxvZ0lkKSkgeyAvLyBFbnN1cmUgZGlhbG9nIG5vZGUgZXhpc3RzXG4gICAgICAgICAgICAgICAgZGlhZ3JhbSArPSBgJHtkaWFsb2dJZH0gLS0+ICR7c2VydmljZUlkfVxcbmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExvZyB0aGUgZmluYWwgZGlhZ3JhbSBzdHJpbmdcbiAgICBjb25zb2xlLmxvZygnTWVybWFpZCBEaWFncmFtOicsIGRpYWdyYW0pO1xuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IG1lcm1haWQgZGl2XG4gICAgY29uc3QgbWVybWFpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lcm1haWREaXYuY2xhc3NOYW1lID0gJ21lcm1haWQnO1xuICAgIG1lcm1haWREaXYuaW5uZXJIVE1MID0gZGlhZ3JhbTtcblxuICAgIHJldHVybiBkaWFncmFtO1xufVxuIl0sIm5hbWVzIjpbImdlbmVyYXRlTWVybWFpZENoYXJ0IiwidXR0ZXJhbmNlcyIsImRpYWxvZ3MiLCJzZXJ2aWNlcyIsImRpYWdyYW0iLCJ1dHRlcmFuY2VDb3VudGVyIiwibm9kZVNldCIsIlNldCIsImNyZWF0ZVNhZmVJZCIsInByZWZpeCIsImtleSIsInJlcGxhY2UiLCJmb3JFYWNoIiwidXR0ZXJhbmNlIiwiZGlhbG9nS2V5IiwidXR0ZXJhbmNlSWQiLCJkaWFsb2dJZCIsImhhcyIsImFkZCIsImRpYWxvZyIsInNlcnZpY2UiLCJmaW5kIiwicyIsIm5hbWUiLCJzZXJ2aWNlS2V5Iiwic2VydmljZUlkIiwiY29uc29sZSIsImxvZyIsIm1lcm1haWREaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MermaidChart.tsx\n"));

/***/ })

});