import './style.css';
import {task} from './taskObjects.js'
import {card, deleteLocal, form, getLocalStorage, changeStatus} from './domManipulation.js';
import logoImg from './todo-icon.png'

const Home = (() => {
    function createHeadBar () {
        const headBar = document.createElement('div')
        headBar.classList.add('headBar');
        const logo = new Image();
        logo.src = logoImg;
        logo.classList.add("logoImg");
        headBar.append(logo);
        const title = document.createElement('h1');
        title.textContent = 'WorkTODO';
        title.classList.add('headBar-title');
        headBar.append(title);
        document.body.append(headBar);
    };

function createBar() {
    const tabBar = document.createElement('div');
    tabBar.classList.add('tabBar');
    document.body.append(tabBar);
    const btn = document.createElement('button');
    btn.classList.add('btn-newTask')
    btn.textContent = 'New Task';
    tabBar.append(btn);
    const myProjects = document.createElement('button')
    myProjects.textContent = 'My projects';
    myProjects.classList.add('btn-myProjects')
    tabBar.append(myProjects);
}

function createContent() {    
    const content = document.createElement('div');
    content.classList.add("content");
    document.body.append(content);
    const cardHolder = document.createElement('div');
    cardHolder.classList.add('cardHolder');
    content.append(cardHolder);
}

createHeadBar();
createBar();
createContent();
card.displayTasks();
})();


const completed = document.querySelectorAll('.completed');
completed.forEach(el => el.addEventListener('click', changeStatus));

const btnNewTask = document.querySelector('.btn-newTask');
btnNewTask.addEventListener('click', form.displayForm);


//TODO: Make diferent folders for diferent projects
