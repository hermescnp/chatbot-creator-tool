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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ generateMermaidChart; }\n/* harmony export */ });\nfunction generateMermaidChart(utterances, dialogs, services) {\n    let diagram = \"graph LR\\n\";\n    let utteranceCounter = 0;\n    let nodeSet = new Set(); // Set to track created nodes\n    // Function to create a safe ID by replacing spaces\n    const createSafeId = (prefix, key)=>\"\".concat(prefix, \"_\").concat(key.replace(/\\s+/g, \"_\"));\n    // Construct diagram string for utterances and dialogs\n    utterances.forEach((utterance)=>{\n        if (utterance.dialogKey) {\n            const utteranceId = \"Utterance_\".concat(utteranceCounter++);\n            const dialogId = createSafeId(\"Dialog\", utterance.dialogKey);\n            // Add utterance node\n            diagram += \"\".concat(utteranceId, '[\"').concat(utterance.utterance, '\"]\\n');\n            // Add dialog node if not already added\n            if (!nodeSet.has(dialogId)) {\n                diagram += \"\".concat(dialogId, '[\"Dialog: ').concat(utterance.dialogKey, '\"]\\n');\n                nodeSet.add(dialogId);\n            }\n            // Connect utterance to dialog\n            diagram += \"\".concat(utteranceId, \" --> \").concat(dialogId, \"\\n\");\n        }\n    });\n    // Construct diagram string for dialogs and services\n    dialogs.forEach((dialog)=>{\n        const dialogId = createSafeId(\"Dialog\", dialog.dialogKey);\n        const service = services.find((s)=>s.name === dialog.serviceKey);\n        if (service) {\n            const serviceId = createSafeId(\"Service\", service.name);\n            // Add service node if not already added\n            if (!nodeSet.has(serviceId)) {\n                diagram += \"\".concat(serviceId, '[\"').concat(service.name, '\"]\\n');\n                nodeSet.add(serviceId);\n            }\n            // Connect dialog to service\n            if (nodeSet.has(dialogId)) {\n                diagram += \"\".concat(dialogId, \" --> \").concat(serviceId, \"\\n\");\n            }\n        }\n    });\n    // Log the final diagram string\n    console.log(\"Mermaid Diagram:\", diagram);\n    // Create a new mermaid div\n    const mermaidDiv = document.createElement(\"div\");\n    mermaidDiv.className = \"mermaid\";\n    mermaidDiv.innerHTML = diagram;\n    return diagram;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01lcm1haWRDaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLHFCQUFxQkMsVUFBaUIsRUFBRUMsT0FBYyxFQUFFQyxRQUFlO0lBRTNGLElBQUlDLFVBQVU7SUFDZCxJQUFJQyxtQkFBbUI7SUFDdkIsSUFBSUMsVUFBVSxJQUFJQyxPQUFPLDZCQUE2QjtJQUV0RCxtREFBbUQ7SUFDbkQsTUFBTUMsZUFBZSxDQUFDQyxRQUFhQyxNQUFhLEdBQWFBLE9BQVZELFFBQU8sS0FBNEIsT0FBekJDLElBQUlDLE9BQU8sQ0FBQyxRQUFRO0lBRWpGLHNEQUFzRDtJQUN0RFYsV0FBV1csT0FBTyxDQUFDQyxDQUFBQTtRQUNmLElBQUlBLFVBQVVDLFNBQVMsRUFBRTtZQUNyQixNQUFNQyxjQUFjLGFBQWdDLE9BQW5CVjtZQUNqQyxNQUFNVyxXQUFXUixhQUFhLFVBQVVLLFVBQVVDLFNBQVM7WUFFM0QscUJBQXFCO1lBQ3JCVixXQUFXLEdBQW1CUyxPQUFoQkUsYUFBWSxNQUF3QixPQUFwQkYsVUFBVUEsU0FBUyxFQUFDO1lBRWxELHVDQUF1QztZQUN2QyxJQUFJLENBQUNQLFFBQVFXLEdBQUcsQ0FBQ0QsV0FBVztnQkFDeEJaLFdBQVcsR0FBd0JTLE9BQXJCRyxVQUFTLGNBQWdDLE9BQXBCSCxVQUFVQyxTQUFTLEVBQUM7Z0JBQ3ZEUixRQUFRWSxHQUFHLENBQUNGO1lBQ2hCO1lBRUEsOEJBQThCO1lBQzlCWixXQUFXLEdBQXNCWSxPQUFuQkQsYUFBWSxTQUFnQixPQUFUQyxVQUFTO1FBQzlDO0lBQ0o7SUFFQSxvREFBb0Q7SUFDcERkLFFBQVFVLE9BQU8sQ0FBQ08sQ0FBQUE7UUFDWixNQUFNSCxXQUFXUixhQUFhLFVBQVVXLE9BQU9MLFNBQVM7UUFDeEQsTUFBTU0sVUFBVWpCLFNBQVNrQixJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLElBQUksS0FBS0osT0FBT0ssVUFBVTtRQUMvRCxJQUFJSixTQUFTO1lBQ1QsTUFBTUssWUFBWWpCLGFBQWEsV0FBV1ksUUFBUUcsSUFBSTtZQUV0RCx3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDakIsUUFBUVcsR0FBRyxDQUFDUSxZQUFZO2dCQUN6QnJCLFdBQVcsR0FBaUJnQixPQUFkSyxXQUFVLE1BQWlCLE9BQWJMLFFBQVFHLElBQUksRUFBQztnQkFDekNqQixRQUFRWSxHQUFHLENBQUNPO1lBQ2hCO1lBRUEsNEJBQTRCO1lBQzVCLElBQUluQixRQUFRVyxHQUFHLENBQUNELFdBQVc7Z0JBQ3ZCWixXQUFXLEdBQW1CcUIsT0FBaEJULFVBQVMsU0FBaUIsT0FBVlMsV0FBVTtZQUM1QztRQUNKO0lBQ0o7SUFFQSwrQkFBK0I7SUFDL0JDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0J2QjtJQUVoQywyQkFBMkI7SUFDM0IsTUFBTXdCLGFBQWFDLFNBQVNDLGFBQWEsQ0FBQztJQUMxQ0YsV0FBV0csU0FBUyxHQUFHO0lBQ3ZCSCxXQUFXSSxTQUFTLEdBQUc1QjtJQUV2QixPQUFPQTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01lcm1haWRDaGFydC50c3g/OGEzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZU1lcm1haWRDaGFydCh1dHRlcmFuY2VzOiBhbnlbXSwgZGlhbG9nczogYW55W10sIHNlcnZpY2VzOiBhbnlbXSkge1xuXG4gICAgbGV0IGRpYWdyYW0gPSAnZ3JhcGggTFJcXG4nO1xuICAgIGxldCB1dHRlcmFuY2VDb3VudGVyID0gMDtcbiAgICBsZXQgbm9kZVNldCA9IG5ldyBTZXQoKTsgLy8gU2V0IHRvIHRyYWNrIGNyZWF0ZWQgbm9kZXNcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHNhZmUgSUQgYnkgcmVwbGFjaW5nIHNwYWNlc1xuICAgIGNvbnN0IGNyZWF0ZVNhZmVJZCA9IChwcmVmaXg6IGFueSwga2V5OiBhbnkpID0+IGAke3ByZWZpeH1fJHtrZXkucmVwbGFjZSgvXFxzKy9nLCAnXycpfWA7XG5cbiAgICAvLyBDb25zdHJ1Y3QgZGlhZ3JhbSBzdHJpbmcgZm9yIHV0dGVyYW5jZXMgYW5kIGRpYWxvZ3NcbiAgICB1dHRlcmFuY2VzLmZvckVhY2godXR0ZXJhbmNlID0+IHtcbiAgICAgICAgaWYgKHV0dGVyYW5jZS5kaWFsb2dLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHV0dGVyYW5jZUlkID0gYFV0dGVyYW5jZV8ke3V0dGVyYW5jZUNvdW50ZXIrK31gO1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nSWQgPSBjcmVhdGVTYWZlSWQoJ0RpYWxvZycsIHV0dGVyYW5jZS5kaWFsb2dLZXkpO1xuXG4gICAgICAgICAgICAvLyBBZGQgdXR0ZXJhbmNlIG5vZGVcbiAgICAgICAgICAgIGRpYWdyYW0gKz0gYCR7dXR0ZXJhbmNlSWR9W1wiJHt1dHRlcmFuY2UudXR0ZXJhbmNlfVwiXVxcbmA7XG5cbiAgICAgICAgICAgIC8vIEFkZCBkaWFsb2cgbm9kZSBpZiBub3QgYWxyZWFkeSBhZGRlZFxuICAgICAgICAgICAgaWYgKCFub2RlU2V0LmhhcyhkaWFsb2dJZCkpIHtcbiAgICAgICAgICAgICAgICBkaWFncmFtICs9IGAke2RpYWxvZ0lkfVtcIkRpYWxvZzogJHt1dHRlcmFuY2UuZGlhbG9nS2V5fVwiXVxcbmA7XG4gICAgICAgICAgICAgICAgbm9kZVNldC5hZGQoZGlhbG9nSWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb25uZWN0IHV0dGVyYW5jZSB0byBkaWFsb2dcbiAgICAgICAgICAgIGRpYWdyYW0gKz0gYCR7dXR0ZXJhbmNlSWR9IC0tPiAke2RpYWxvZ0lkfVxcbmA7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENvbnN0cnVjdCBkaWFncmFtIHN0cmluZyBmb3IgZGlhbG9ncyBhbmQgc2VydmljZXNcbiAgICBkaWFsb2dzLmZvckVhY2goZGlhbG9nID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nSWQgPSBjcmVhdGVTYWZlSWQoJ0RpYWxvZycsIGRpYWxvZy5kaWFsb2dLZXkpO1xuICAgICAgICBjb25zdCBzZXJ2aWNlID0gc2VydmljZXMuZmluZChzID0+IHMubmFtZSA9PT0gZGlhbG9nLnNlcnZpY2VLZXkpO1xuICAgICAgICBpZiAoc2VydmljZSkge1xuICAgICAgICAgICAgY29uc3Qgc2VydmljZUlkID0gY3JlYXRlU2FmZUlkKCdTZXJ2aWNlJywgc2VydmljZS5uYW1lKTtcblxuICAgICAgICAgICAgLy8gQWRkIHNlcnZpY2Ugbm9kZSBpZiBub3QgYWxyZWFkeSBhZGRlZFxuICAgICAgICAgICAgaWYgKCFub2RlU2V0LmhhcyhzZXJ2aWNlSWQpKSB7XG4gICAgICAgICAgICAgICAgZGlhZ3JhbSArPSBgJHtzZXJ2aWNlSWR9W1wiJHtzZXJ2aWNlLm5hbWV9XCJdXFxuYDtcbiAgICAgICAgICAgICAgICBub2RlU2V0LmFkZChzZXJ2aWNlSWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb25uZWN0IGRpYWxvZyB0byBzZXJ2aWNlXG4gICAgICAgICAgICBpZiAobm9kZVNldC5oYXMoZGlhbG9nSWQpKSB7IC8vIEVuc3VyZSBkaWFsb2cgbm9kZSBleGlzdHNcbiAgICAgICAgICAgICAgICBkaWFncmFtICs9IGAke2RpYWxvZ0lkfSAtLT4gJHtzZXJ2aWNlSWR9XFxuYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTG9nIHRoZSBmaW5hbCBkaWFncmFtIHN0cmluZ1xuICAgIGNvbnNvbGUubG9nKCdNZXJtYWlkIERpYWdyYW06JywgZGlhZ3JhbSk7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgbWVybWFpZCBkaXZcbiAgICBjb25zdCBtZXJtYWlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVybWFpZERpdi5jbGFzc05hbWUgPSAnbWVybWFpZCc7XG4gICAgbWVybWFpZERpdi5pbm5lckhUTUwgPSBkaWFncmFtO1xuXG4gICAgcmV0dXJuIGRpYWdyYW07XG59XG4iXSwibmFtZXMiOlsiZ2VuZXJhdGVNZXJtYWlkQ2hhcnQiLCJ1dHRlcmFuY2VzIiwiZGlhbG9ncyIsInNlcnZpY2VzIiwiZGlhZ3JhbSIsInV0dGVyYW5jZUNvdW50ZXIiLCJub2RlU2V0IiwiU2V0IiwiY3JlYXRlU2FmZUlkIiwicHJlZml4Iiwia2V5IiwicmVwbGFjZSIsImZvckVhY2giLCJ1dHRlcmFuY2UiLCJkaWFsb2dLZXkiLCJ1dHRlcmFuY2VJZCIsImRpYWxvZ0lkIiwiaGFzIiwiYWRkIiwiZGlhbG9nIiwic2VydmljZSIsImZpbmQiLCJzIiwibmFtZSIsInNlcnZpY2VLZXkiLCJzZXJ2aWNlSWQiLCJjb25zb2xlIiwibG9nIiwibWVybWFpZERpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MermaidChart.tsx\n"));

/***/ })

});