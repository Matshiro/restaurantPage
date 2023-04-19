"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["index"],{

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/logo.png");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _pages_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/header.js */ "./src/pages/header.js");
/* harmony import */ var _pages_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main.js */ "./src/pages/main.js");






function createMain(){
    const main = document.createElement('main');

    main.appendChild((0,_pages_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    main.appendChild((0,_pages_main_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

    return main;
}





document.body.appendChild(createMain());

/***/ }),

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");



function createHeader(){
    const header = document.createElement('header');

    const logo = document.createElement('img');
    logo.id = "logoImg";
    logo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    header.appendChild(logo);

    const textContainer = document.createElement('container');
    textContainer.id = "textContainer";
    header.appendChild(textContainer);

    const textHeader = document.createElement('h1');
    textHeader.id = "textHeader";
    textHeader.textContent = "Bochenkownia";
    textContainer.appendChild(textHeader);

    const buttonContainer = document.createElement('container');
    buttonContainer.id = "buttonContainer";
    textContainer.appendChild(buttonContainer);

    const buttonMain = document.createElement('button');
    buttonMain.classList.add("menuButton");
    buttonMain.classList.add("current");
    buttonMain.textContent = "Strona główna";
    buttonMain.addEventListener('click', function(){
        changeCurrent(this);
        changeSite("main");
    })
    buttonContainer.appendChild(buttonMain);
    
    const buttonMenu = document.createElement('button');
    buttonMenu.className = "menuButton";
    buttonMenu.textContent = "Menu";
    buttonMenu.addEventListener('click', function(){
        changeCurrent(this);
        changeSite("menu");
    })
    buttonContainer.appendChild(buttonMenu);

    const buttonDirections = document.createElement('button');
    buttonDirections.className = "menuButton";
    buttonDirections.textContent = "Trasa";
    buttonDirections.addEventListener('click', function(){
        changeCurrent(this);
        changeSite("directions");
    })
    buttonContainer.appendChild(buttonDirections);

    return header;
}

function changeCurrent(currentSite){
    const buttons = document.getElementsByClassName('menuButton');
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('current');
    }
    currentSite.classList.add('current');

}

function changeSite(currentSite){

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createMainmenu(){
    const divnachwile = document.createElement('div');

    return divnachwile;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMainmenu);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSxxQkFBdUIsb0JBQW9COzs7Ozs7Ozs7OztBQ0ExRDs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ2lCO0FBQ0E7Ozs7QUFJN0M7QUFDQTs7QUFFQSxxQkFBcUIsNERBQVk7QUFDakMscUJBQXFCLDBEQUFjOztBQUVuQztBQUNBOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ5Qzs7O0FBR3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsd0RBQU87QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQ3BFM0I7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpRUFBZSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYXNzZXRzL2xvZ28ucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvcGFnZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3BhZ2VzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9sb2dvLnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vcGFnZXMvaGVhZGVyLmpzXCI7XG5pbXBvcnQgY3JlYXRlTWFpbm1lbnUgZnJvbSBcIi4vcGFnZXMvbWFpbi5qc1wiO1xuXG5cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1haW5tZW51KCkpO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cblxuXG5cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpOyIsImltcG9ydCBsb2dvSW1nIGZyb20gJy4uL2Fzc2V0cy9sb2dvLnBuZyc7XG5cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nby5pZCA9IFwibG9nb0ltZ1wiO1xuICAgIGxvZ28uc3JjID0gbG9nb0ltZztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGFpbmVyJyk7XG4gICAgdGV4dENvbnRhaW5lci5pZCA9IFwidGV4dENvbnRhaW5lclwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRleHRIZWFkZXIuaWQgPSBcInRleHRIZWFkZXJcIjtcbiAgICB0ZXh0SGVhZGVyLnRleHRDb250ZW50ID0gXCJCb2NoZW5rb3duaWFcIjtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRIZWFkZXIpO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGFpbmVyJyk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmlkID0gXCJidXR0b25Db250YWluZXJcIjtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBidXR0b25NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uTWFpbi5jbGFzc0xpc3QuYWRkKFwibWVudUJ1dHRvblwiKTtcbiAgICBidXR0b25NYWluLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xuICAgIGJ1dHRvbk1haW4udGV4dENvbnRlbnQgPSBcIlN0cm9uYSBnxYLDs3duYVwiO1xuICAgIGJ1dHRvbk1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjaGFuZ2VDdXJyZW50KHRoaXMpO1xuICAgICAgICBjaGFuZ2VTaXRlKFwibWFpblwiKTtcbiAgICB9KVxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25NYWluKTtcbiAgICBcbiAgICBjb25zdCBidXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uTWVudS5jbGFzc05hbWUgPSBcIm1lbnVCdXR0b25cIjtcbiAgICBidXR0b25NZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgYnV0dG9uTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNoYW5nZUN1cnJlbnQodGhpcyk7XG4gICAgICAgIGNoYW5nZVNpdGUoXCJtZW51XCIpO1xuICAgIH0pXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuXG4gICAgY29uc3QgYnV0dG9uRGlyZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbkRpcmVjdGlvbnMuY2xhc3NOYW1lID0gXCJtZW51QnV0dG9uXCI7XG4gICAgYnV0dG9uRGlyZWN0aW9ucy50ZXh0Q29udGVudCA9IFwiVHJhc2FcIjtcbiAgICBidXR0b25EaXJlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY2hhbmdlQ3VycmVudCh0aGlzKTtcbiAgICAgICAgY2hhbmdlU2l0ZShcImRpcmVjdGlvbnNcIik7XG4gICAgfSlcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uRGlyZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50KGN1cnJlbnRTaXRlKXtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudUJ1dHRvbicpO1xuICAgIGNvbnNvbGUubG9nKGJ1dHRvbnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGJ1dHRvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgIH1cbiAgICBjdXJyZW50U2l0ZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cbn1cblxuZnVuY3Rpb24gY2hhbmdlU2l0ZShjdXJyZW50U2l0ZSl7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyOyIsIlxuZnVuY3Rpb24gY3JlYXRlTWFpbm1lbnUoKXtcbiAgICBjb25zdCBkaXZuYWNod2lsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcmV0dXJuIGRpdm5hY2h3aWxlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW5tZW51OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==