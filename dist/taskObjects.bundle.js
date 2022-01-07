/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!****************************!*\
  !*** ./src/taskObjects.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task),
/* harmony export */   "Storage": () => (/* binding */ Storage),
/* harmony export */   "Projects": () => (/* binding */ Projects)
/* harmony export */ });
const task = (title, description, dueDate, priority, completed) => {
    return {title, description, dueDate, priority, completed};
}

const Storage = (() => {
    function save(obj, currentProject) {
        const currentData = Storage.load(currentProject);
        let actualLenght = currentData.length;
        if (actualLenght === undefined) {
            obj.index = 0;
        }
        else {
            obj.index = actualLenght;
        }
        currentData.push(obj);
        window.localStorage.setItem(currentProject, JSON.stringify(currentData)); 
        console.log(`saved to ${currentProject}`);
    }
    
    function load(currentProject) {
        let data = JSON.parse(localStorage.getItem(currentProject) || "[]");
        let currentData = [];
        if (data.length != 0) {
            currentData = data;
        }
        return currentData;
    }

    function actualize(data, currentProject) {
        let j = data.length;
        for (let i = 0; i < j ; i++) {
            data[i].index = i;
        }
        window.localStorage.setItem(currentProject, JSON.stringify(data));
    }

    return {save, load, actualize};
})();

const Projects = (() => {
       

    function save(obj) {
        const currentData = Projects.load();
        currentData.push(obj);
        window.localStorage.setItem("projects", JSON.stringify(currentData)); 
    }

    function load() {
        let data = JSON.parse(localStorage.getItem("projects") || "[]");
        let currentData = [];
        if (data.length != 0) {
            currentData = data;
        }
        return currentData;
    }
         
    return {save, load}
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza09iamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDOztBQUVnQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrT2JqZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWR9O1xufVxuXG5jb25zdCBTdG9yYWdlID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBzYXZlKG9iaiwgY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSBTdG9yYWdlLmxvYWQoY3VycmVudFByb2plY3QpO1xuICAgICAgICBsZXQgYWN0dWFsTGVuZ2h0ID0gY3VycmVudERhdGEubGVuZ3RoO1xuICAgICAgICBpZiAoYWN0dWFsTGVuZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9iai5pbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYmouaW5kZXggPSBhY3R1YWxMZW5naHQ7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudERhdGEucHVzaChvYmopO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnREYXRhKSk7IFxuICAgICAgICBjb25zb2xlLmxvZyhgc2F2ZWQgdG8gJHtjdXJyZW50UHJvamVjdH1gKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZChjdXJyZW50UHJvamVjdCkge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QpIHx8IFwiW11cIik7XG4gICAgICAgIGxldCBjdXJyZW50RGF0YSA9IFtdO1xuICAgICAgICBpZiAoZGF0YS5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgY3VycmVudERhdGEgPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50RGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3R1YWxpemUoZGF0YSwgY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgbGV0IGogPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqIDsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhW2ldLmluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3NhdmUsIGxvYWQsIGFjdHVhbGl6ZX07XG59KSgpO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgoKSA9PiB7XG4gICAgICAgXG5cbiAgICBmdW5jdGlvbiBzYXZlKG9iaikge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0YSA9IFByb2plY3RzLmxvYWQoKTtcbiAgICAgICAgY3VycmVudERhdGEucHVzaChvYmopO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50RGF0YSkpOyBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSB8fCBcIltdXCIpO1xuICAgICAgICBsZXQgY3VycmVudERhdGEgPSBbXTtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnREYXRhID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudERhdGE7XG4gICAgfVxuICAgICAgICAgXG4gICAgcmV0dXJuIHtzYXZlLCBsb2FkfVxufSkoKTtcblxuZXhwb3J0IHt0YXNrLCBTdG9yYWdlLCBQcm9qZWN0c307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=