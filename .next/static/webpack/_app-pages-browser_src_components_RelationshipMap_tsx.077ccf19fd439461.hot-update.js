"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_RelationshipMap_tsx",{

/***/ "(app-pages-browser)/./src/components/RelationshipMap.tsx":
/*!********************************************!*\
  !*** ./src/components/RelationshipMap.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst RelationshipMap = (param)=>{\n    let { utterances, dialogs, services } = param;\n    _s();\n    const mermaidRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [mermaid, setMermaid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_mermaid_dist_mermaid_core_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! mermaid */ \"(app-pages-browser)/./node_modules/mermaid/dist/mermaid.core.mjs\")).then((m)=>{\n                setMermaid(m.default);\n                m.default.initialize({\n                    startOnLoad: true,\n                    theme: \"default\"\n                });\n            });\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mermaid && mermaidRef.current) {\n            let diagram = \"graph LR\\n\";\n            let utteranceCounter = 0;\n            let dialogCounter = 0;\n            // Construct diagram string for utterances and dialogs\n            utterances.forEach((utterance)=>{\n                if (utterance.dialogKey) {\n                    const utteranceId = \"Utterance_\".concat(utteranceCounter++);\n                    const dialogId = \"Dialog_\".concat(dialogCounter++);\n                    diagram += \"\".concat(utteranceId, '[\"').concat(utterance.utterance, '\"] --> ').concat(dialogId, \"\\n\");\n                }\n            });\n            // Reset dialog counter for dialog to service mapping\n            dialogCounter = 0;\n            // Construct diagram string for dialogs and services\n            dialogs.forEach((dialog)=>{\n                const dialogId = \"Dialog_\".concat(dialogCounter++);\n                const service = services.find((s)=>s.name === dialog.serviceKey);\n                if (service) {\n                    const serviceId = \"Service_\".concat(service.name.replace(/\\s/g, \"_\"));\n                    diagram += \"\".concat(dialogId, \" --> \").concat(serviceId, '[\"').concat(service.name, '\"]\\n');\n                }\n            });\n            // Log the final diagram string\n            console.log(\"Mermaid Diagram:\", diagram);\n            // Create a new mermaid div\n            const mermaidDiv = document.createElement(\"div\");\n            mermaidDiv.className = \"mermaid\";\n            mermaidDiv.innerHTML = diagram;\n            // Clear existing content and append new diagram\n            mermaidRef.current.innerHTML = \"\";\n            mermaidRef.current.appendChild(mermaidDiv);\n            try {\n                mermaid.contentLoaded();\n            } catch (error) {\n                console.error(\"Mermaid rendering error:\", error);\n            }\n        }\n    }, [\n        mermaid,\n        utterances,\n        dialogs,\n        services\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: mermaidRef\n    }, void 0, false, {\n        fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/RelationshipMap.tsx\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RelationshipMap, \"C9qI+Y1K89iTgzRUIcDUkWCjAPc=\");\n_c = RelationshipMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RelationshipMap);\nvar _c;\n$RefreshReg$(_c, \"RelationshipMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlbGF0aW9uc2hpcE1hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzBEO0FBVTFELE1BQU1JLGtCQUE0QztRQUFDLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7O0lBQ2hGLE1BQU1DLGFBQWFOLDZDQUFNQSxDQUFpQjtJQUMxQyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQTRCO0lBRWxFRixnREFBU0EsQ0FBQztRQUNOLElBQUksSUFBNkIsRUFBRTtZQUMvQiw2T0FBTyxDQUFXVSxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ3BCRixXQUFXRSxFQUFFQyxPQUFPO2dCQUNwQkQsRUFBRUMsT0FBTyxDQUFDQyxVQUFVLENBQUM7b0JBQUVDLGFBQWE7b0JBQU1DLE9BQU87Z0JBQVU7WUFDL0Q7UUFDSjtJQUNKLEdBQUcsRUFBRTtJQUVMZixnREFBU0EsQ0FBQztRQUNOLElBQUlRLFdBQVdELFdBQVdTLE9BQU8sRUFBRTtZQUMvQixJQUFJQyxVQUFVO1lBQ2QsSUFBSUMsbUJBQW1CO1lBQ3ZCLElBQUlDLGdCQUFnQjtZQUVwQixzREFBc0Q7WUFDdERmLFdBQVdnQixPQUFPLENBQUNDLENBQUFBO2dCQUNmLElBQUlBLFVBQVVDLFNBQVMsRUFBRTtvQkFDckIsTUFBTUMsY0FBYyxhQUFnQyxPQUFuQkw7b0JBQ2pDLE1BQU1NLFdBQVcsVUFBMEIsT0FBaEJMO29CQUMzQkYsV0FBVyxHQUFtQkksT0FBaEJFLGFBQVksTUFBaUNDLE9BQTdCSCxVQUFVQSxTQUFTLEVBQUMsV0FBa0IsT0FBVEcsVUFBUztnQkFDeEU7WUFDSjtZQUVBLHFEQUFxRDtZQUNyREwsZ0JBQWdCO1lBRWhCLG9EQUFvRDtZQUNwRGQsUUFBUWUsT0FBTyxDQUFDSyxDQUFBQTtnQkFDWixNQUFNRCxXQUFXLFVBQTBCLE9BQWhCTDtnQkFDM0IsTUFBTU8sVUFBVXBCLFNBQVNxQixJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLElBQUksS0FBS0osT0FBT0ssVUFBVTtnQkFDL0QsSUFBSUosU0FBUztvQkFDVCxNQUFNSyxZQUFZLFdBQTRDLE9BQWpDTCxRQUFRRyxJQUFJLENBQUNHLE9BQU8sQ0FBQyxPQUFPO29CQUN6RGYsV0FBVyxHQUFtQmMsT0FBaEJQLFVBQVMsU0FBcUJFLE9BQWRLLFdBQVUsTUFBaUIsT0FBYkwsUUFBUUcsSUFBSSxFQUFDO2dCQUM3RDtZQUNKO1lBRUEsK0JBQStCO1lBQy9CSSxRQUFRQyxHQUFHLENBQUMsb0JBQW9CakI7WUFFaEMsMkJBQTJCO1lBQzNCLE1BQU1rQixhQUFhQyxTQUFTQyxhQUFhLENBQUM7WUFDMUNGLFdBQVdHLFNBQVMsR0FBRztZQUN2QkgsV0FBV0ksU0FBUyxHQUFHdEI7WUFFdkIsZ0RBQWdEO1lBQ2hEVixXQUFXUyxPQUFPLENBQUN1QixTQUFTLEdBQUc7WUFDL0JoQyxXQUFXUyxPQUFPLENBQUN3QixXQUFXLENBQUNMO1lBRS9CLElBQUk7Z0JBQ0EzQixRQUFRaUMsYUFBYTtZQUN6QixFQUFFLE9BQU9DLE9BQU87Z0JBQ1pULFFBQVFTLEtBQUssQ0FBQyw0QkFBNEJBO1lBQzlDO1FBQ0o7SUFDSixHQUFHO1FBQUNsQztRQUFTSjtRQUFZQztRQUFTQztLQUFTO0lBRzNDLHFCQUNJLDhEQUFDcUM7UUFBSUMsS0FBS3JDOzs7Ozs7QUFHbEI7R0FsRU1KO0tBQUFBO0FBb0VOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlbGF0aW9uc2hpcE1hcC50c3g/Yjg0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBkZWZhdWx0IGFzIE1lcm1haWRUeXBlIH0gZnJvbSAnbWVybWFpZCdcblxuaW50ZXJmYWNlIFJlbGF0aW9uc2hpcE1hcFByb3BzIHtcbiAgICB1dHRlcmFuY2VzOiBhbnlbXTtcbiAgICBkaWFsb2dzOiBhbnlbXTtcbiAgICBzZXJ2aWNlczogYW55W107XG59XG5cbmNvbnN0IFJlbGF0aW9uc2hpcE1hcDogRkM8UmVsYXRpb25zaGlwTWFwUHJvcHM+ID0gKHsgdXR0ZXJhbmNlcywgZGlhbG9ncywgc2VydmljZXMgfSkgPT4ge1xuICAgIGNvbnN0IG1lcm1haWRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IFttZXJtYWlkLCBzZXRNZXJtYWlkXSA9IHVzZVN0YXRlPHR5cGVvZiBNZXJtYWlkVHlwZSB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGltcG9ydCgnbWVybWFpZCcpLnRoZW4oKG0pID0+IHtcbiAgICAgICAgICAgICAgICBzZXRNZXJtYWlkKG0uZGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgbS5kZWZhdWx0LmluaXRpYWxpemUoeyBzdGFydE9uTG9hZDogdHJ1ZSwgdGhlbWU6ICdkZWZhdWx0JyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG1lcm1haWQgJiYgbWVybWFpZFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBsZXQgZGlhZ3JhbSA9ICdncmFwaCBMUlxcbic7XG4gICAgICAgICAgICBsZXQgdXR0ZXJhbmNlQ291bnRlciA9IDA7XG4gICAgICAgICAgICBsZXQgZGlhbG9nQ291bnRlciA9IDA7XG5cbiAgICAgICAgICAgIC8vIENvbnN0cnVjdCBkaWFncmFtIHN0cmluZyBmb3IgdXR0ZXJhbmNlcyBhbmQgZGlhbG9nc1xuICAgICAgICAgICAgdXR0ZXJhbmNlcy5mb3JFYWNoKHV0dGVyYW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHV0dGVyYW5jZS5kaWFsb2dLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXR0ZXJhbmNlSWQgPSBgVXR0ZXJhbmNlXyR7dXR0ZXJhbmNlQ291bnRlcisrfWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0lkID0gYERpYWxvZ18ke2RpYWxvZ0NvdW50ZXIrK31gO1xuICAgICAgICAgICAgICAgICAgICBkaWFncmFtICs9IGAke3V0dGVyYW5jZUlkfVtcIiR7dXR0ZXJhbmNlLnV0dGVyYW5jZX1cIl0gLS0+ICR7ZGlhbG9nSWR9XFxuYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVzZXQgZGlhbG9nIGNvdW50ZXIgZm9yIGRpYWxvZyB0byBzZXJ2aWNlIG1hcHBpbmdcbiAgICAgICAgICAgIGRpYWxvZ0NvdW50ZXIgPSAwO1xuXG4gICAgICAgICAgICAvLyBDb25zdHJ1Y3QgZGlhZ3JhbSBzdHJpbmcgZm9yIGRpYWxvZ3MgYW5kIHNlcnZpY2VzXG4gICAgICAgICAgICBkaWFsb2dzLmZvckVhY2goZGlhbG9nID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dJZCA9IGBEaWFsb2dfJHtkaWFsb2dDb3VudGVyKyt9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gc2VydmljZXMuZmluZChzID0+IHMubmFtZSA9PT0gZGlhbG9nLnNlcnZpY2VLZXkpO1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VJZCA9IGBTZXJ2aWNlXyR7c2VydmljZS5uYW1lLnJlcGxhY2UoL1xccy9nLCAnXycpfWA7XG4gICAgICAgICAgICAgICAgICAgIGRpYWdyYW0gKz0gYCR7ZGlhbG9nSWR9IC0tPiAke3NlcnZpY2VJZH1bXCIke3NlcnZpY2UubmFtZX1cIl1cXG5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBMb2cgdGhlIGZpbmFsIGRpYWdyYW0gc3RyaW5nXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTWVybWFpZCBEaWFncmFtOicsIGRpYWdyYW0pO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbWVybWFpZCBkaXZcbiAgICAgICAgICAgIGNvbnN0IG1lcm1haWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lcm1haWREaXYuY2xhc3NOYW1lID0gJ21lcm1haWQnO1xuICAgICAgICAgICAgbWVybWFpZERpdi5pbm5lckhUTUwgPSBkaWFncmFtO1xuXG4gICAgICAgICAgICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50IGFuZCBhcHBlbmQgbmV3IGRpYWdyYW1cbiAgICAgICAgICAgIG1lcm1haWRSZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIG1lcm1haWRSZWYuY3VycmVudC5hcHBlbmRDaGlsZChtZXJtYWlkRGl2KTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBtZXJtYWlkLmNvbnRlbnRMb2FkZWQoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWVybWFpZCByZW5kZXJpbmcgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW21lcm1haWQsIHV0dGVyYW5jZXMsIGRpYWxvZ3MsIHNlcnZpY2VzXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXttZXJtYWlkUmVmfSAvPlxuICAgICk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0aW9uc2hpcE1hcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUmVsYXRpb25zaGlwTWFwIiwidXR0ZXJhbmNlcyIsImRpYWxvZ3MiLCJzZXJ2aWNlcyIsIm1lcm1haWRSZWYiLCJtZXJtYWlkIiwic2V0TWVybWFpZCIsInRoZW4iLCJtIiwiZGVmYXVsdCIsImluaXRpYWxpemUiLCJzdGFydE9uTG9hZCIsInRoZW1lIiwiY3VycmVudCIsImRpYWdyYW0iLCJ1dHRlcmFuY2VDb3VudGVyIiwiZGlhbG9nQ291bnRlciIsImZvckVhY2giLCJ1dHRlcmFuY2UiLCJkaWFsb2dLZXkiLCJ1dHRlcmFuY2VJZCIsImRpYWxvZ0lkIiwiZGlhbG9nIiwic2VydmljZSIsImZpbmQiLCJzIiwibmFtZSIsInNlcnZpY2VLZXkiLCJzZXJ2aWNlSWQiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsIm1lcm1haWREaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnRMb2FkZWQiLCJlcnJvciIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RelationshipMap.tsx\n"));

/***/ })

});