/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var navbarToggler = document.querySelector(\".navbar-toggler\");\n  var body = document.body;\n  navbarToggler.addEventListener(\"click\", function () {\n    var isExpanded = body.classList.contains(\"no-scroll\");\n\n    if (isExpanded) {\n      body.classList.remove(\"no-scroll\");\n    } else {\n      body.classList.add(\"no-scroll\");\n    }\n  });\n  document.getElementById(\"headerNav\").addEventListener(\"hidden.bs.collapse\", function () {\n    body.classList.remove(\"no-scroll\");\n  });\n  document.getElementById(\"headerNav\").addEventListener(\"shown.bs.collapse\", function () {\n    body.classList.add(\"no-scroll\");\n  });\n}); // Hero Card Slider\n\nvar swiper = new Swiper(\".hero--swiper\", {\n  slidesPerView: 1.01,\n  spaceBetween: 20,\n  centeredSlides: true,\n  loop: true,\n  autoplay: {\n    delay: 2000\n  },\n  breakpoints: {\n    576: {\n      slidesPerView: 1.8\n    },\n    992: {\n      slidesPerView: 2.5\n    },\n    1200: {\n      slidesPerView: 2.75\n    },\n    1400: {\n      slidesPerView: 3.1\n    }\n  }\n}); // Account Management Card Slider\n\nvar swiper = new Swiper(\".account-management--swiper\", {\n  slidesPerView: 1.01,\n  spaceBetween: 20,\n  // autoplay: {\n  //   delay: 1500,\n  // },\n  // Navigation arrows\n  navigation: {\n    nextEl: \".swiper-button-next\",\n    prevEl: \".swiper-button-prev\"\n  },\n  breakpoints: {\n    576: {\n      slidesPerView: 1.1\n    },\n    768: {\n      slidesPerView: 1.5\n    },\n    992: {\n      slidesPerView: 2\n    },\n    1400: {\n      slidesPerView: 2.9\n    }\n  }\n}); // Payments Card Slider\n\nvar swiper = new Swiper(\".payments--swiper\", {\n  slidesPerView: 1.01,\n  spaceBetween: 20,\n  // Navigation arrows\n  navigation: {\n    nextEl: \".swiper-button-next\",\n    prevEl: \".swiper-button-prev\"\n  },\n  breakpoints: {\n    576: {\n      slidesPerView: 1.1\n    },\n    768: {\n      slidesPerView: 1.5\n    },\n    992: {\n      slidesPerView: 2\n    },\n    1400: {\n      slidesPerView: 2.9\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibmF2YmFyVG9nZ2xlciIsInF1ZXJ5U2VsZWN0b3IiLCJib2R5IiwiaXNFeHBhbmRlZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwiYXV0b3BsYXkiLCJkZWxheSIsImJyZWFrcG9pbnRzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVuZGQvLi9yZXNvdXJjZXMvanMvYXBwLmpzP2NlZDYiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBuYXZiYXJUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItdG9nZ2xlclwiKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgbmF2YmFyVG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLXNjcm9sbFwiKTtcblxuICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcIm5vLXNjcm9sbFwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyTmF2XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJoaWRkZW4uYnMuY29sbGFwc2VcIiwgZnVuY3Rpb24gKCkge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJOYXZcIikuYWRkRXZlbnRMaXN0ZW5lcihcInNob3duLmJzLmNvbGxhcHNlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJuby1zY3JvbGxcIik7XG4gIH0pO1xufSk7XG5cbi8vIEhlcm8gQ2FyZCBTbGlkZXJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmhlcm8tLXN3aXBlclwiLCB7XG4gIHNsaWRlc1BlclZpZXc6IDEuMDEsXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiAyMDAwLFxuICB9LFxuXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNTc2OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjgsXG4gICAgfSxcbiAgICA5OTI6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIuNSxcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIuNzUsXG4gICAgfSxcbiAgICAxNDAwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLjEsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG4vLyBBY2NvdW50IE1hbmFnZW1lbnQgQ2FyZCBTbGlkZXJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmFjY291bnQtbWFuYWdlbWVudC0tc3dpcGVyXCIsIHtcbiAgc2xpZGVzUGVyVmlldzogMS4wMSxcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgLy8gYXV0b3BsYXk6IHtcbiAgLy8gICBkZWxheTogMTUwMCxcbiAgLy8gfSxcblxuICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNTc2OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjEsXG4gICAgfSxcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICB9LFxuICAgIDk5Mjoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDE0MDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIuOSxcbiAgICB9LFxuICB9LFxufSk7XG5cbi8vIFBheW1lbnRzIENhcmQgU2xpZGVyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5wYXltZW50cy0tc3dpcGVyXCIsIHtcbiAgc2xpZGVzUGVyVmlldzogMS4wMSxcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcblxuICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNTc2OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjEsXG4gICAgfSxcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICB9LFxuICAgIDk5Mjoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDE0MDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIuOSxcbiAgICB9LFxuICB9LFxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtFQUN4RCxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixpQkFBdkIsQ0FBdEI7RUFDQSxJQUFNQyxJQUFJLEdBQUdK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\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5kZC8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzP2E5N2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/sass/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfundd"] = self["webpackChunkfundd"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;