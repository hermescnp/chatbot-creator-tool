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

/***/ "(app-pages-browser)/./src/components/RelationshipMap.tsx":
/*!********************************************!*\
  !*** ./src/components/RelationshipMap.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst RelationshipMap = (param)=>{\n    let { utterances, dialogs, services } = param;\n    _s();\n    const mermaidRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const defaultDiagram = \"graph LR\\n\";\n    const [diagram, setDiagram] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultDiagram);\n    const [mermaid, setMermaid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_mermaid_dist_mermaid_core_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! mermaid */ \"(app-pages-browser)/./node_modules/mermaid/dist/mermaid.core.mjs\")).then((m)=>{\n                setMermaid(m.default);\n                m.default.initialize({\n                    startOnLoad: true,\n                    theme: \"default\"\n                });\n            });\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let newDiagram = \"graph LR\\n\";\n        // Construct diagram string for utterances and dialogs\n        utterances.forEach((utterance, index)=>{\n            if (utterance.dialogKey) {\n                const utteranceId = \"Utterance_\".concat(index);\n                const dialogId = \"Dialog_\".concat(index);\n                newDiagram += \"\".concat(utteranceId, '[\"').concat(utterance.utterance, '\"] --> ').concat(dialogId, \"\\n\");\n            }\n        });\n        // Construct diagram string for dialogs and services\n        dialogs.forEach((dialog, index)=>{\n            const dialogId = \"Dialog_\".concat(index);\n            const service = services.find((s)=>s.name === dialog.serviceKey);\n            if (service) {\n                const serviceId = \"Service_\".concat(service.name.replace(/\\s/g, \"_\"));\n                newDiagram += \"\".concat(dialogId, \" --> \").concat(serviceId, '[\"').concat(service.name, '\"]\\n');\n            }\n        });\n        setDiagram(newDiagram);\n    }, [\n        utterances,\n        dialogs,\n        services\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mermaid && mermaidRef.current) {\n            mermaidRef.current.innerHTML = '<div class=\"mermaid\">'.concat(diagram, \"</div>\");\n            try {\n                mermaid.init(undefined, mermaidRef.current.querySelectorAll(\".mermaid\"));\n            } catch (error) {\n                console.error(\"Mermaid rendering error:\", error);\n            }\n        }\n    }, [\n        mermaid,\n        diagram\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: mermaidRef\n    }, void 0, false, {\n        fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/RelationshipMap.tsx\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RelationshipMap, \"t8OulnfG1g2nJy2ditjl9sGhcJ0=\");\n_c = RelationshipMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RelationshipMap);\nvar _c;\n$RefreshReg$(_c, \"RelationshipMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlbGF0aW9uc2hpcE1hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzBEO0FBVTFELE1BQU1JLGtCQUE0QztRQUFDLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7O0lBQ2hGLE1BQU1DLGFBQWFOLDZDQUFNQSxDQUFpQjtJQUMxQyxNQUFNTyxpQkFBaUI7SUFDdkIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDTTtJQUN2QyxNQUFNLENBQUNHLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQTRCO0lBRWxFRixnREFBU0EsQ0FBQztRQUNOLElBQUksSUFBNkIsRUFBRTtZQUMvQiw2T0FBTyxDQUFXYSxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ3BCRixXQUFXRSxFQUFFQyxPQUFPO2dCQUNwQkQsRUFBRUMsT0FBTyxDQUFDQyxVQUFVLENBQUM7b0JBQUVDLGFBQWE7b0JBQU1DLE9BQU87Z0JBQVU7WUFDL0Q7UUFDSjtJQUNKLEdBQUcsRUFBRTtJQUVMbEIsZ0RBQVNBLENBQUM7UUFDTixJQUFJbUIsYUFBYTtRQUVqQixzREFBc0Q7UUFDdERmLFdBQVdnQixPQUFPLENBQUMsQ0FBQ0MsV0FBV0M7WUFDM0IsSUFBSUQsVUFBVUUsU0FBUyxFQUFFO2dCQUNyQixNQUFNQyxjQUFjLGFBQW1CLE9BQU5GO2dCQUNqQyxNQUFNRyxXQUFXLFVBQWdCLE9BQU5IO2dCQUMzQkgsY0FBYyxHQUFtQkUsT0FBaEJHLGFBQVksTUFBaUNDLE9BQTdCSixVQUFVQSxTQUFTLEVBQUMsV0FBa0IsT0FBVEksVUFBUztZQUMzRTtRQUNKO1FBRUEsb0RBQW9EO1FBQ3BEcEIsUUFBUWUsT0FBTyxDQUFDLENBQUNNLFFBQVFKO1lBQ3JCLE1BQU1HLFdBQVcsVUFBZ0IsT0FBTkg7WUFDM0IsTUFBTUssVUFBVXJCLFNBQVNzQixJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLElBQUksS0FBS0osT0FBT0ssVUFBVTtZQUMvRCxJQUFJSixTQUFTO2dCQUNULE1BQU1LLFlBQVksV0FBNEMsT0FBakNMLFFBQVFHLElBQUksQ0FBQ0csT0FBTyxDQUFDLE9BQU87Z0JBQ3pEZCxjQUFjLEdBQW1CYSxPQUFoQlAsVUFBUyxTQUFxQkUsT0FBZEssV0FBVSxNQUFpQixPQUFiTCxRQUFRRyxJQUFJLEVBQUM7WUFDaEU7UUFDSjtRQUVBcEIsV0FBV1M7SUFDZixHQUFHO1FBQUNmO1FBQVlDO1FBQVNDO0tBQVM7SUFFbENOLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVcsV0FBV0osV0FBVzJCLE9BQU8sRUFBRTtZQUMvQjNCLFdBQVcyQixPQUFPLENBQUNDLFNBQVMsR0FBRyx3QkFBZ0MsT0FBUjFCLFNBQVE7WUFFL0QsSUFBSTtnQkFDQUUsUUFBUXlCLElBQUksQ0FBQ0MsV0FBVzlCLFdBQVcyQixPQUFPLENBQUNJLGdCQUFnQixDQUFDO1lBQ2hFLEVBQUUsT0FBT0MsT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7WUFDOUM7UUFDSjtJQUNKLEdBQUc7UUFBQzVCO1FBQVNGO0tBQVE7SUFFckIscUJBQ0ksOERBQUNnQztRQUFJQyxLQUFLbkM7Ozs7OztBQUVsQjtHQXZETUo7S0FBQUE7QUF5RE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVsYXRpb25zaGlwTWFwLnRzeD9iODQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgTWVybWFpZFR5cGUgfSBmcm9tICdtZXJtYWlkJ1xuXG5pbnRlcmZhY2UgUmVsYXRpb25zaGlwTWFwUHJvcHMge1xuICAgIHV0dGVyYW5jZXM6IGFueVtdO1xuICAgIGRpYWxvZ3M6IGFueVtdO1xuICAgIHNlcnZpY2VzOiBhbnlbXTtcbn1cblxuY29uc3QgUmVsYXRpb25zaGlwTWFwOiBGQzxSZWxhdGlvbnNoaXBNYXBQcm9wcz4gPSAoeyB1dHRlcmFuY2VzLCBkaWFsb2dzLCBzZXJ2aWNlcyB9KSA9PiB7XG4gICAgY29uc3QgbWVybWFpZFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgZGVmYXVsdERpYWdyYW0gPSBcImdyYXBoIExSXFxuXCI7XG4gICAgY29uc3QgW2RpYWdyYW0sIHNldERpYWdyYW1dID0gdXNlU3RhdGUoZGVmYXVsdERpYWdyYW0pO1xuICAgIGNvbnN0IFttZXJtYWlkLCBzZXRNZXJtYWlkXSA9IHVzZVN0YXRlPHR5cGVvZiBNZXJtYWlkVHlwZSB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGltcG9ydCgnbWVybWFpZCcpLnRoZW4oKG0pID0+IHtcbiAgICAgICAgICAgICAgICBzZXRNZXJtYWlkKG0uZGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgbS5kZWZhdWx0LmluaXRpYWxpemUoeyBzdGFydE9uTG9hZDogdHJ1ZSwgdGhlbWU6ICdkZWZhdWx0JyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IG5ld0RpYWdyYW0gPSAnZ3JhcGggTFJcXG4nO1xuXG4gICAgICAgIC8vIENvbnN0cnVjdCBkaWFncmFtIHN0cmluZyBmb3IgdXR0ZXJhbmNlcyBhbmQgZGlhbG9nc1xuICAgICAgICB1dHRlcmFuY2VzLmZvckVhY2goKHV0dGVyYW5jZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICh1dHRlcmFuY2UuZGlhbG9nS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXR0ZXJhbmNlSWQgPSBgVXR0ZXJhbmNlXyR7aW5kZXh9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dJZCA9IGBEaWFsb2dfJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgIG5ld0RpYWdyYW0gKz0gYCR7dXR0ZXJhbmNlSWR9W1wiJHt1dHRlcmFuY2UudXR0ZXJhbmNlfVwiXSAtLT4gJHtkaWFsb2dJZH1cXG5gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb25zdHJ1Y3QgZGlhZ3JhbSBzdHJpbmcgZm9yIGRpYWxvZ3MgYW5kIHNlcnZpY2VzXG4gICAgICAgIGRpYWxvZ3MuZm9yRWFjaCgoZGlhbG9nLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nSWQgPSBgRGlhbG9nXyR7aW5kZXh9YDtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSBzZXJ2aWNlcy5maW5kKHMgPT4gcy5uYW1lID09PSBkaWFsb2cuc2VydmljZUtleSk7XG4gICAgICAgICAgICBpZiAoc2VydmljZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VJZCA9IGBTZXJ2aWNlXyR7c2VydmljZS5uYW1lLnJlcGxhY2UoL1xccy9nLCAnXycpfWA7XG4gICAgICAgICAgICAgICAgbmV3RGlhZ3JhbSArPSBgJHtkaWFsb2dJZH0gLS0+ICR7c2VydmljZUlkfVtcIiR7c2VydmljZS5uYW1lfVwiXVxcbmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldERpYWdyYW0obmV3RGlhZ3JhbSk7XG4gICAgfSwgW3V0dGVyYW5jZXMsIGRpYWxvZ3MsIHNlcnZpY2VzXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobWVybWFpZCAmJiBtZXJtYWlkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIG1lcm1haWRSZWYuY3VycmVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1lcm1haWRcIj4ke2RpYWdyYW19PC9kaXY+YDtcbiAgICBcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbWVybWFpZC5pbml0KHVuZGVmaW5lZCwgbWVybWFpZFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZXJtYWlkJykpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNZXJtYWlkIHJlbmRlcmluZyBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbbWVybWFpZCwgZGlhZ3JhbV0pOyAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXttZXJtYWlkUmVmfSAvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWxhdGlvbnNoaXBNYXA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlJlbGF0aW9uc2hpcE1hcCIsInV0dGVyYW5jZXMiLCJkaWFsb2dzIiwic2VydmljZXMiLCJtZXJtYWlkUmVmIiwiZGVmYXVsdERpYWdyYW0iLCJkaWFncmFtIiwic2V0RGlhZ3JhbSIsIm1lcm1haWQiLCJzZXRNZXJtYWlkIiwidGhlbiIsIm0iLCJkZWZhdWx0IiwiaW5pdGlhbGl6ZSIsInN0YXJ0T25Mb2FkIiwidGhlbWUiLCJuZXdEaWFncmFtIiwiZm9yRWFjaCIsInV0dGVyYW5jZSIsImluZGV4IiwiZGlhbG9nS2V5IiwidXR0ZXJhbmNlSWQiLCJkaWFsb2dJZCIsImRpYWxvZyIsInNlcnZpY2UiLCJmaW5kIiwicyIsIm5hbWUiLCJzZXJ2aWNlS2V5Iiwic2VydmljZUlkIiwicmVwbGFjZSIsImN1cnJlbnQiLCJpbm5lckhUTUwiLCJpbml0IiwidW5kZWZpbmVkIiwicXVlcnlTZWxlY3RvckFsbCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RelationshipMap.tsx\n"));

/***/ })

});