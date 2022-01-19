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
    function actualize(data) {
        window.localStorage.setItem('projects', JSON.stringify(data));
    }

    function remove(project) {
        const currentData = Projects.load();
        let index = currentData.indexOf(project);
        if (index !== -1) {
            currentData.splice(index, 1);
        }
        actualize(currentData);
    }



    
         
    return {save, load, remove};
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza09iamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7QUFFZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza09iamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB0YXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkfTtcbn1cblxuY29uc3QgU3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gc2F2ZShvYmosIGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gU3RvcmFnZS5sb2FkKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgbGV0IGFjdHVhbExlbmdodCA9IGN1cnJlbnREYXRhLmxlbmd0aDtcbiAgICAgICAgaWYgKGFjdHVhbExlbmdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvYmouaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JqLmluZGV4ID0gYWN0dWFsTGVuZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnREYXRhLnB1c2gob2JqKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShjdXJyZW50RGF0YSkpOyBcbiAgICAgICAgY29uc29sZS5sb2coYHNhdmVkIHRvICR7Y3VycmVudFByb2plY3R9YCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGxvYWQoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSB8fCBcIltdXCIpO1xuICAgICAgICBsZXQgY3VycmVudERhdGEgPSBbXTtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnREYXRhID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudERhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0dWFsaXplKGRhdGEsIGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgIGxldCBqID0gZGF0YS5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaiA7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpXS5pbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzYXZlLCBsb2FkLCBhY3R1YWxpemV9O1xufSkoKTtcblxuY29uc3QgUHJvamVjdHMgPSAoKCkgPT4ge1xuICAgICAgIFxuXG4gICAgZnVuY3Rpb24gc2F2ZShvYmopIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSBQcm9qZWN0cy5sb2FkKCk7XG4gICAgICAgIGN1cnJlbnREYXRhLnB1c2gob2JqKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudERhdGEpKTsgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgfHwgXCJbXVwiKTtcbiAgICAgICAgbGV0IGN1cnJlbnREYXRhID0gW107XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBjdXJyZW50RGF0YSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnREYXRhO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhY3R1YWxpemUoZGF0YSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZShwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gUHJvamVjdHMubG9hZCgpO1xuICAgICAgICBsZXQgaW5kZXggPSBjdXJyZW50RGF0YS5pbmRleE9mKHByb2plY3QpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBjdXJyZW50RGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGFjdHVhbGl6ZShjdXJyZW50RGF0YSk7XG4gICAgfVxuXG5cblxuICAgIFxuICAgICAgICAgXG4gICAgcmV0dXJuIHtzYXZlLCBsb2FkLCByZW1vdmV9O1xufSkoKTtcblxuZXhwb3J0IHt0YXNrLCBTdG9yYWdlLCBQcm9qZWN0c307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=