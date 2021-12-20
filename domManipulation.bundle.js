/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/taskObjects.js":
/*!****************************!*\
  !*** ./src/taskObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
const task = (title, description, dueDate, priority, completed) => {
    return {title, description, dueDate, priority, completed};
}




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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "card": () => (/* binding */ card),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage),
/* harmony export */   "deleteLocal": () => (/* binding */ deleteLocal),
/* harmony export */   "changeStatus": () => (/* binding */ changeStatus)
/* harmony export */ });
/* harmony import */ var _taskObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskObjects.js */ "./src/taskObjects.js");



const card = (() => {
function createCard(obj) {
    const card = document.createElement('div');
    card.classList.add('card');
    for (let key in obj) {
        const newEl = document.createElement('p')
        newEl.textContent = `${obj[key]}`;
        newEl.classList.add(`${key}`)
        newEl.classList.add('cardText');
        card.append(newEl);
    }
    const newBtn = document.createElement('button');
    newBtn.classList.add('btnDelete');
    newBtn.textContent = 'X';
    card.append(newBtn);
    return card;
}

function createPlaceHolder() {
    const placeHolder = document.createElement('div');
    placeHolder.classList.add('card');
    const newEl = document.createElement('p');
    newEl.textContent = 'Create a new task...';
    newEl.classList.add('cardText');
    placeHolder.id = 'placeHolder'
    placeHolder.append(newEl);
    return placeHolder;
}


function clearTasks(){ 
    const cardHolder = document.querySelector('.cardHolder');
    if (cardHolder.hasChildNodes() === true){
        while (cardHolder.firstChild) {
            cardHolder.removeChild(cardHolder.lastChild);
          };
    }
    console.log('List erased')
}

function displayTasks() {
    const data = getLocalStorage();
    let j = data.length;
    const cardHolder = document.querySelector('.cardHolder');
    clearTasks();
    for (let i = 0; i < j; i++) {
        cardHolder.append(card.createCard(data[i]));
    }
    cardHolder.append(createPlaceHolder());
    //TODO: Make the placeholder appear last in the column
}



return {createCard, createPlaceHolder, displayTasks};
})();



const form = (() => {
function displayForm() {
    const formBackground = document.createElement('div');
    formBackground.classList.add('formBackground');
    document.body.append(formBackground);
    
    const containerForm = document.createElement('div');
    containerForm.classList.add('container-form');
    formBackground.append(containerForm);

    const form = document.createElement('form');
    
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title of task");

    const description = document.createElement("input");
    description.setAttribute("type", "text");
    description.setAttribute("name", "description");
    description.setAttribute("placeholder", "Description of task");
   
    const dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("name", "dueDate");
    dueDate.setAttribute("placeholder", "25/08/2022");

    const priority = document.createElement("input");
    priority.setAttribute("type", "number");
    priority.setAttribute("name", "priority");
    priority.setAttribute("placeholder", "from 1 upwards, 1 the most important");

    const completed = document.createElement("p");
    completed.textContent = "Not completed";
    completed.classList.add("completeCheck");

    const submit = document.createElement('input');
    submit.setAttribute("type", "submit");
    submit.setAttribute("name", "submit");
    submit.value = 'Submit';


    form.append(title, description, dueDate, priority, submit);
    containerForm.append(form);    
    
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const newTask = (0,_taskObjects_js__WEBPACK_IMPORTED_MODULE_0__.task)(title.value, description.value, dueDate.value, priority.value, completed.textContent);
        saveToLocal(newTask);
        document.querySelector('.cardHolder').append(card.createCard(newTask));
        closeForm();
    })

}

function closeForm() {
    const formBackground = document.querySelector('.formBackground');
    formBackground.remove(); 
}

    return {displayForm}
})();

function saveToLocal(obj) {
    const currentData = getLocalStorage();
    let actualLenght = currentData.length;
    console.log(actualLenght);
    if (actualLenght = undefined) {
        obj.number = 0;
    }
    else {
        obj.number = actualLenght;
    }
    console.log(obj.number);
    currentData.push(obj);
    window.localStorage.setItem("data", JSON.stringify(currentData)); 
}

function getLocalStorage() {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    let currentData = [];
    if (data.lenght != 0) {
        currentData = data;
    }
    return currentData;
}

function deleteLocal() {
    window.localStorage.setItem("data", []); 
}

function changeStatus(e) {
    e.target.parentNode.remove();
    //TODO: Check how to target task in localStorage, need to make an index to access
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tTWFuaXB1bGF0aW9uLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsWUFBWTtBQUNaOztBQUVjOzs7Ozs7O1VDSmQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7OztBQUdyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUztBQUN4QywrQkFBK0IsSUFBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLFFBQVE7QUFDUixDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza09iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbU1hbmlwdWxhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkfTtcbn1cblxuZXhwb3J0IHt0YXNrfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0YXNrfSBmcm9tICcuL3Rhc2tPYmplY3RzLmpzJ1xuXG5cbmNvbnN0IGNhcmQgPSAoKCkgPT4ge1xuZnVuY3Rpb24gY3JlYXRlQ2FyZChvYmopIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICBjb25zdCBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBuZXdFbC50ZXh0Q29udGVudCA9IGAke29ialtrZXldfWA7XG4gICAgICAgIG5ld0VsLmNsYXNzTGlzdC5hZGQoYCR7a2V5fWApXG4gICAgICAgIG5ld0VsLmNsYXNzTGlzdC5hZGQoJ2NhcmRUZXh0Jyk7XG4gICAgICAgIGNhcmQuYXBwZW5kKG5ld0VsKTtcbiAgICB9XG4gICAgY29uc3QgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bkRlbGV0ZScpO1xuICAgIG5ld0J0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBjYXJkLmFwcGVuZChuZXdCdG4pO1xuICAgIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGFjZUhvbGRlcigpIHtcbiAgICBjb25zdCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYWNlSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjb25zdCBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuZXdFbC50ZXh0Q29udGVudCA9ICdDcmVhdGUgYSBuZXcgdGFzay4uLic7XG4gICAgbmV3RWwuY2xhc3NMaXN0LmFkZCgnY2FyZFRleHQnKTtcbiAgICBwbGFjZUhvbGRlci5pZCA9ICdwbGFjZUhvbGRlcidcbiAgICBwbGFjZUhvbGRlci5hcHBlbmQobmV3RWwpO1xuICAgIHJldHVybiBwbGFjZUhvbGRlcjtcbn1cblxuXG5mdW5jdGlvbiBjbGVhclRhc2tzKCl7IFxuICAgIGNvbnN0IGNhcmRIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZEhvbGRlcicpO1xuICAgIGlmIChjYXJkSG9sZGVyLmhhc0NoaWxkTm9kZXMoKSA9PT0gdHJ1ZSl7XG4gICAgICAgIHdoaWxlIChjYXJkSG9sZGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNhcmRIb2xkZXIucmVtb3ZlQ2hpbGQoY2FyZEhvbGRlci5sYXN0Q2hpbGQpO1xuICAgICAgICAgIH07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdMaXN0IGVyYXNlZCcpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgICBjb25zdCBkYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgbGV0IGogPSBkYXRhLmxlbmd0aDtcbiAgICBjb25zdCBjYXJkSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRIb2xkZXInKTtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgY2FyZEhvbGRlci5hcHBlbmQoY2FyZC5jcmVhdGVDYXJkKGRhdGFbaV0pKTtcbiAgICB9XG4gICAgY2FyZEhvbGRlci5hcHBlbmQoY3JlYXRlUGxhY2VIb2xkZXIoKSk7XG4gICAgLy9UT0RPOiBNYWtlIHRoZSBwbGFjZWhvbGRlciBhcHBlYXIgbGFzdCBpbiB0aGUgY29sdW1uXG59XG5cblxuXG5yZXR1cm4ge2NyZWF0ZUNhcmQsIGNyZWF0ZVBsYWNlSG9sZGVyLCBkaXNwbGF5VGFza3N9O1xufSkoKTtcblxuXG5cbmNvbnN0IGZvcm0gPSAoKCkgPT4ge1xuZnVuY3Rpb24gZGlzcGxheUZvcm0oKSB7XG4gICAgY29uc3QgZm9ybUJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdmb3JtQmFja2dyb3VuZCcpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGZvcm1CYWNrZ3JvdW5kKTtcbiAgICBcbiAgICBjb25zdCBjb250YWluZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyRm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItZm9ybScpO1xuICAgIGZvcm1CYWNrZ3JvdW5kLmFwcGVuZChjb250YWluZXJGb3JtKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGUgb2YgdGFza1wiKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uIG9mIHRhc2tcIik7XG4gICBcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiMjUvMDgvMjAyMlwiKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiZnJvbSAxIHVwd2FyZHMsIDEgdGhlIG1vc3QgaW1wb3J0YW50XCIpO1xuXG4gICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29tcGxldGVkLnRleHRDb250ZW50ID0gXCJOb3QgY29tcGxldGVkXCI7XG4gICAgY29tcGxldGVkLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZUNoZWNrXCIpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXQudmFsdWUgPSAnU3VibWl0JztcblxuXG4gICAgZm9ybS5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3VibWl0KTtcbiAgICBjb250YWluZXJGb3JtLmFwcGVuZChmb3JtKTsgICAgXG4gICAgXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIGNvbXBsZXRlZC50ZXh0Q29udGVudCk7XG4gICAgICAgIHNhdmVUb0xvY2FsKG5ld1Rhc2spO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZEhvbGRlcicpLmFwcGVuZChjYXJkLmNyZWF0ZUNhcmQobmV3VGFzaykpO1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQmFja2dyb3VuZCcpO1xuICAgIGZvcm1CYWNrZ3JvdW5kLnJlbW92ZSgpOyBcbn1cblxuICAgIHJldHVybiB7ZGlzcGxheUZvcm19XG59KSgpO1xuXG5mdW5jdGlvbiBzYXZlVG9Mb2NhbChvYmopIHtcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IGdldExvY2FsU3RvcmFnZSgpO1xuICAgIGxldCBhY3R1YWxMZW5naHQgPSBjdXJyZW50RGF0YS5sZW5ndGg7XG4gICAgY29uc29sZS5sb2coYWN0dWFsTGVuZ2h0KTtcbiAgICBpZiAoYWN0dWFsTGVuZ2h0ID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9iai5udW1iZXIgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb2JqLm51bWJlciA9IGFjdHVhbExlbmdodDtcbiAgICB9XG4gICAgY29uc29sZS5sb2cob2JqLm51bWJlcik7XG4gICAgY3VycmVudERhdGEucHVzaChvYmopO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudERhdGEpKTsgXG59XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRhXCIpIHx8IFwiW11cIik7XG4gICAgbGV0IGN1cnJlbnREYXRhID0gW107XG4gICAgaWYgKGRhdGEubGVuZ2h0ICE9IDApIHtcbiAgICAgICAgY3VycmVudERhdGEgPSBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudERhdGE7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxvY2FsKCkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgW10pOyBcbn1cblxuZnVuY3Rpb24gY2hhbmdlU3RhdHVzKGUpIHtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIC8vVE9ETzogQ2hlY2sgaG93IHRvIHRhcmdldCB0YXNrIGluIGxvY2FsU3RvcmFnZSwgbmVlZCB0byBtYWtlIGFuIGluZGV4IHRvIGFjY2Vzc1xufVxuXG5leHBvcnQge2NhcmQsIGZvcm0sIGdldExvY2FsU3RvcmFnZSwgZGVsZXRlTG9jYWwsIGNoYW5nZVN0YXR1c307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=