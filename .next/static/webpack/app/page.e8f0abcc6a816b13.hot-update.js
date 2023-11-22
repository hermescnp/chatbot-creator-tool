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

/***/ "(app-pages-browser)/./src/components/DialogAnalyzer.tsx":
/*!*******************************************!*\
  !*** ./src/components/DialogAnalyzer.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DialogAnalyzer: function() { return /* binding */ DialogAnalyzer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst DialogAnalyzer = (param)=>{\n    let { utterances, dialogs, services } = param;\n    _s();\n    const [exclusiveWordsMap, setExclusiveWordsMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [frequentWordsMap, setFrequentWordsMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const newExclusiveWordsMap = {};\n        const newFrequentWordsMap = {};\n        dialogs.forEach((dialog)=>{\n            const dialogKey = dialog.dialogKey;\n            const currentUtterances = utterances.filter((item)=>item.dialogKey === dialogKey);\n            const currentWords = currentUtterances.flatMap((item)=>item.utterance ? processWords(item.utterance) : []);\n            // Calculate exclusive words\n            const otherUtterances = utterances.filter((item)=>item.dialogKey !== dialogKey);\n            const otherWords = otherUtterances.flatMap((item)=>item.utterance ? processWords(item.utterance) : []);\n            const uniqueWords = new Set(currentWords.filter((word)=>!otherWords.includes(word)));\n            newExclusiveWordsMap[dialogKey] = Array.from(uniqueWords);\n            // Calculate frequent words\n            const wordFrequency = currentWords.reduce((acc, word)=>{\n                acc[word] = (acc[word] || 0) + 1;\n                return acc;\n            }, {});\n            const sortedWords = Object.entries(wordFrequency).sort((a, b)=>b[1] - a[1]).map((item)=>item[0]).slice(0, 5);\n            newFrequentWordsMap[dialogKey] = sortedWords;\n        });\n        setExclusiveWordsMap(newExclusiveWordsMap);\n        setFrequentWordsMap(newFrequentWordsMap);\n    }, [\n        utterances,\n        dialogs\n    ]);\n    const processWords = (sentence)=>{\n        return sentence.toLowerCase().replace(/[¿?.,]/g, \"\").split(/\\s+/).filter((word)=>isNaN(word) && word.trim() !== \"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            border: 1,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Dialog Name\"\n                            }, \"dialog\", false, {\n                                fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Exclusive words\"\n                            }, void 0, false, {\n                                fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Frequent Words\"\n                            }, void 0, false, {\n                                fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: dialogs.map((dialog, index)=>{\n                        const dialogExclusiveWords = exclusiveWordsMap[dialog.dialogKey] || [];\n                        const dialogFrequentWords = frequentWordsMap[dialog.dialogKey] || [];\n                        const exclusiveWordsDisplay = dialogExclusiveWords.length > 0 ? dialogExclusiveWords.join(\", \") : \"0 exclusive words\";\n                        const frequentWordsDisplay = dialogFrequentWords.join(\", \");\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: dialog.dialogKey\n                                }, void 0, false, {\n                                    fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: exclusiveWordsDisplay\n                                }, void 0, false, {\n                                    fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: frequentWordsDisplay\n                                }, void 0, false, {\n                                    fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 29\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/u45432/Documents/GitHub/ChatbotCreator/src/components/DialogAnalyzer.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DialogAnalyzer, \"OJ9G9UV+1WLEC0IPqExEVZcTYUY=\");\n_c = DialogAnalyzer;\nvar _c;\n$RefreshReg$(_c, \"DialogAnalyzer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RpYWxvZ0FuYWx5emVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFTNUMsTUFBTUcsaUJBQTBDO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTs7SUFDckYsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBOEIsQ0FBQztJQUN6RixNQUFNLENBQUNRLGtCQUFrQkMsb0JBQW9CLEdBQUdULCtDQUFRQSxDQUE4QixDQUFDO0lBRXZGQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1TLHVCQUE0QixDQUFDO1FBQ25DLE1BQU1DLHNCQUEyQixDQUFDO1FBRWxDUCxRQUFRUSxPQUFPLENBQUNDLENBQUFBO1lBQ1osTUFBTUMsWUFBWUQsT0FBT0MsU0FBUztZQUNsQyxNQUFNQyxvQkFBb0JaLFdBQVdhLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0gsU0FBUyxLQUFLQTtZQUN2RSxNQUFNSSxlQUFlSCxrQkFBa0JJLE9BQU8sQ0FBQ0YsQ0FBQUEsT0FBUUEsS0FBS0csU0FBUyxHQUFHQyxhQUFhSixLQUFLRyxTQUFTLElBQUksRUFBRTtZQUV6Ryw0QkFBNEI7WUFDNUIsTUFBTUUsa0JBQWtCbkIsV0FBV2EsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLSCxTQUFTLEtBQUtBO1lBQ3JFLE1BQU1TLGFBQWFELGdCQUFnQkgsT0FBTyxDQUFDRixDQUFBQSxPQUFRQSxLQUFLRyxTQUFTLEdBQUdDLGFBQWFKLEtBQUtHLFNBQVMsSUFBSSxFQUFFO1lBQ3JHLE1BQU1JLGNBQWMsSUFBSUMsSUFBSVAsYUFBYUYsTUFBTSxDQUFDVSxDQUFBQSxPQUFRLENBQUNILFdBQVdJLFFBQVEsQ0FBQ0Q7WUFDN0VoQixvQkFBb0IsQ0FBQ0ksVUFBVSxHQUFHYyxNQUFNQyxJQUFJLENBQUNMO1lBRTdDLDJCQUEyQjtZQUMzQixNQUFNTSxnQkFBZ0JaLGFBQWFhLE1BQU0sQ0FBQyxDQUFDQyxLQUFVTjtnQkFDakRNLEdBQUcsQ0FBQ04sS0FBSyxHQUFHLENBQUNNLEdBQUcsQ0FBQ04sS0FBSyxJQUFJLEtBQUs7Z0JBQy9CLE9BQU9NO1lBQ1gsR0FBRyxDQUFDO1lBQ0osTUFBTUMsY0FBY0MsT0FBT0MsT0FBTyxDQUFDTCxlQUNSTSxJQUFJLENBQUMsQ0FBQ0MsR0FBUUMsSUFBV0EsQ0FBQyxDQUFDLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLEVBQUUsRUFDcENFLEdBQUcsQ0FBQ3RCLENBQUFBLE9BQVFBLElBQUksQ0FBQyxFQUFFLEVBQ25CdUIsS0FBSyxDQUFDLEdBQUc7WUFDcEM3QixtQkFBbUIsQ0FBQ0csVUFBVSxHQUFHbUI7UUFDckM7UUFFQTFCLHFCQUFxQkc7UUFDckJELG9CQUFvQkU7SUFDeEIsR0FBRztRQUFDUjtRQUFZQztLQUFRO0lBRXhCLE1BQU1pQixlQUFlLENBQUNvQjtRQUNsQixPQUFPQSxTQUFTQyxXQUFXLEdBQ1hDLE9BQU8sQ0FBQyxXQUFXLElBQ25CQyxLQUFLLENBQUMsT0FDTjVCLE1BQU0sQ0FBQ1UsQ0FBQUEsT0FBUW1CLE1BQU1uQixTQUFnQkEsS0FBS29CLElBQUksT0FBTztJQUN6RTtJQUVBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0M7WUFBTUMsUUFBUTs7OEJBQ1gsOERBQUNDOzhCQUNHLDRFQUFDQzs7MENBQ0csOERBQUNDOzBDQUFnQjsrQkFBVDs7Ozs7MENBQ1IsOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHWiw4REFBQ0M7OEJBQ0lqRCxRQUFRbUMsR0FBRyxDQUFDLENBQUMxQixRQUFReUM7d0JBQ2xCLE1BQU1DLHVCQUF1QmpELGlCQUFpQixDQUFDTyxPQUFPQyxTQUFTLENBQUMsSUFBSSxFQUFFO3dCQUN0RSxNQUFNMEMsc0JBQXNCaEQsZ0JBQWdCLENBQUNLLE9BQU9DLFNBQVMsQ0FBQyxJQUFJLEVBQUU7d0JBQ3BFLE1BQU0yQyx3QkFBd0JGLHFCQUFxQkcsTUFBTSxHQUFHLElBQ3RESCxxQkFBcUJJLElBQUksQ0FBQyxRQUMxQjt3QkFDTixNQUFNQyx1QkFBdUJKLG9CQUFvQkcsSUFBSSxDQUFDO3dCQUV0RCxxQkFDSSw4REFBQ1I7OzhDQUNHLDhEQUFDVTs4Q0FBSWhELE9BQU9DLFNBQVM7Ozs7Ozs4Q0FDckIsOERBQUMrQzs4Q0FBSUo7Ozs7Ozs4Q0FDTCw4REFBQ0k7OENBQUlEOzs7Ozs7OzJCQUhBTjs7Ozs7b0JBTWpCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQixFQUFFO0dBekVXcEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGlhbG9nQW5hbHl6ZXIudHN4PzBmNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgRGlhbG9nQW5hbHl6ZXJQcm9wcyB7XG4gICAgdXR0ZXJhbmNlczogYW55W107XG4gICAgZGlhbG9nczogYW55W107XG4gICAgc2VydmljZXM6IGFueVtdO1xufVxuXG5leHBvcnQgY29uc3QgRGlhbG9nQW5hbHl6ZXI6IEZDPERpYWxvZ0FuYWx5emVyUHJvcHM+ID0gKHsgdXR0ZXJhbmNlcywgZGlhbG9ncywgc2VydmljZXMgfSkgPT4ge1xuICAgIGNvbnN0IFtleGNsdXNpdmVXb3Jkc01hcCwgc2V0RXhjbHVzaXZlV29yZHNNYXBdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9Pih7fSk7XG4gICAgY29uc3QgW2ZyZXF1ZW50V29yZHNNYXAsIHNldEZyZXF1ZW50V29yZHNNYXBdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9Pih7fSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdFeGNsdXNpdmVXb3Jkc01hcDogYW55ID0ge307XG4gICAgICAgIGNvbnN0IG5ld0ZyZXF1ZW50V29yZHNNYXA6IGFueSA9IHt9O1xuXG4gICAgICAgIGRpYWxvZ3MuZm9yRWFjaChkaWFsb2cgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nS2V5ID0gZGlhbG9nLmRpYWxvZ0tleTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVdHRlcmFuY2VzID0gdXR0ZXJhbmNlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmRpYWxvZ0tleSA9PT0gZGlhbG9nS2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRXb3JkcyA9IGN1cnJlbnRVdHRlcmFuY2VzLmZsYXRNYXAoaXRlbSA9PiBpdGVtLnV0dGVyYW5jZSA/IHByb2Nlc3NXb3JkcyhpdGVtLnV0dGVyYW5jZSkgOiBbXSk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBleGNsdXNpdmUgd29yZHNcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVXR0ZXJhbmNlcyA9IHV0dGVyYW5jZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5kaWFsb2dLZXkgIT09IGRpYWxvZ0tleSk7XG4gICAgICAgICAgICBjb25zdCBvdGhlcldvcmRzID0gb3RoZXJVdHRlcmFuY2VzLmZsYXRNYXAoaXRlbSA9PiBpdGVtLnV0dGVyYW5jZSA/IHByb2Nlc3NXb3JkcyhpdGVtLnV0dGVyYW5jZSkgOiBbXSk7XG4gICAgICAgICAgICBjb25zdCB1bmlxdWVXb3JkcyA9IG5ldyBTZXQoY3VycmVudFdvcmRzLmZpbHRlcih3b3JkID0+ICFvdGhlcldvcmRzLmluY2x1ZGVzKHdvcmQpKSk7XG4gICAgICAgICAgICBuZXdFeGNsdXNpdmVXb3Jkc01hcFtkaWFsb2dLZXldID0gQXJyYXkuZnJvbSh1bmlxdWVXb3Jkcyk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBmcmVxdWVudCB3b3Jkc1xuICAgICAgICAgICAgY29uc3Qgd29yZEZyZXF1ZW5jeSA9IGN1cnJlbnRXb3Jkcy5yZWR1Y2UoKGFjYzogYW55LCB3b3JkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBhY2Nbd29yZF0gPSAoYWNjW3dvcmRdIHx8IDApICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgY29uc3Qgc29ydGVkV29yZHMgPSBPYmplY3QuZW50cmllcyh3b3JkRnJlcXVlbmN5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGJbMV0gLSBhWzFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbVswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIDUpO1xuICAgICAgICAgICAgbmV3RnJlcXVlbnRXb3Jkc01hcFtkaWFsb2dLZXldID0gc29ydGVkV29yZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldEV4Y2x1c2l2ZVdvcmRzTWFwKG5ld0V4Y2x1c2l2ZVdvcmRzTWFwKTtcbiAgICAgICAgc2V0RnJlcXVlbnRXb3Jkc01hcChuZXdGcmVxdWVudFdvcmRzTWFwKTtcbiAgICB9LCBbdXR0ZXJhbmNlcywgZGlhbG9nc10pO1xuXG4gICAgY29uc3QgcHJvY2Vzc1dvcmRzID0gKHNlbnRlbmNlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHNlbnRlbmNlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1vCvz8uLF0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIod29yZCA9PiBpc05hTih3b3JkIGFzIGFueSkgJiYgd29yZC50cmltKCkgIT09ICcnKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx0YWJsZSBib3JkZXI9ezF9PlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT0nZGlhbG9nJz5EaWFsb2cgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhjbHVzaXZlIHdvcmRzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GcmVxdWVudCBXb3JkczwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtkaWFsb2dzLm1hcCgoZGlhbG9nLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nRXhjbHVzaXZlV29yZHMgPSBleGNsdXNpdmVXb3Jkc01hcFtkaWFsb2cuZGlhbG9nS2V5XSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ0ZyZXF1ZW50V29yZHMgPSBmcmVxdWVudFdvcmRzTWFwW2RpYWxvZy5kaWFsb2dLZXldIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhjbHVzaXZlV29yZHNEaXNwbGF5ID0gZGlhbG9nRXhjbHVzaXZlV29yZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGlhbG9nRXhjbHVzaXZlV29yZHMuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzAgZXhjbHVzaXZlIHdvcmRzJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyZXF1ZW50V29yZHNEaXNwbGF5ID0gZGlhbG9nRnJlcXVlbnRXb3Jkcy5qb2luKCcsICcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkaWFsb2cuZGlhbG9nS2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZXhjbHVzaXZlV29yZHNEaXNwbGF5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZnJlcXVlbnRXb3Jkc0Rpc3BsYXl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEaWFsb2dBbmFseXplciIsInV0dGVyYW5jZXMiLCJkaWFsb2dzIiwic2VydmljZXMiLCJleGNsdXNpdmVXb3Jkc01hcCIsInNldEV4Y2x1c2l2ZVdvcmRzTWFwIiwiZnJlcXVlbnRXb3Jkc01hcCIsInNldEZyZXF1ZW50V29yZHNNYXAiLCJuZXdFeGNsdXNpdmVXb3Jkc01hcCIsIm5ld0ZyZXF1ZW50V29yZHNNYXAiLCJmb3JFYWNoIiwiZGlhbG9nIiwiZGlhbG9nS2V5IiwiY3VycmVudFV0dGVyYW5jZXMiLCJmaWx0ZXIiLCJpdGVtIiwiY3VycmVudFdvcmRzIiwiZmxhdE1hcCIsInV0dGVyYW5jZSIsInByb2Nlc3NXb3JkcyIsIm90aGVyVXR0ZXJhbmNlcyIsIm90aGVyV29yZHMiLCJ1bmlxdWVXb3JkcyIsIlNldCIsIndvcmQiLCJpbmNsdWRlcyIsIkFycmF5IiwiZnJvbSIsIndvcmRGcmVxdWVuY3kiLCJyZWR1Y2UiLCJhY2MiLCJzb3J0ZWRXb3JkcyIsIk9iamVjdCIsImVudHJpZXMiLCJzb3J0IiwiYSIsImIiLCJtYXAiLCJzbGljZSIsInNlbnRlbmNlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwic3BsaXQiLCJpc05hTiIsInRyaW0iLCJkaXYiLCJ0YWJsZSIsImJvcmRlciIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwiaW5kZXgiLCJkaWFsb2dFeGNsdXNpdmVXb3JkcyIsImRpYWxvZ0ZyZXF1ZW50V29yZHMiLCJleGNsdXNpdmVXb3Jkc0Rpc3BsYXkiLCJsZW5ndGgiLCJqb2luIiwiZnJlcXVlbnRXb3Jkc0Rpc3BsYXkiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DialogAnalyzer.tsx\n"));

/***/ })

});