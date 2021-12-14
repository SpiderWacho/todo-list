import './style.css';
import {task} from './taskObjects.js'
import {formatDistanceToNow} from 'date-fns/esm';
import {createCard, createPlaceHolder, displayForm} from './domManipulation.js';
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
    return cardHolder
}

createHeadBar();
createBar();
const cardHolder = createContent();

return {cardHolder};
})();

function appendPlaceHolder() {
    Home.cardHolder.append(createPlaceHolder());
}

const newTask = task("Example task", "Example description", formatDistanceToNow(new Date(2021, 11, 30)), 1, false) 
Home.cardHolder.append(createCard(newTask));


const btnNewTask = document.querySelector('.btn-newTask');
btnNewTask.addEventListener('click', displayForm);


