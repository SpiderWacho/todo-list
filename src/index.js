import './style.css';
import {task, Storage, Projects} from './taskObjects.js'
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
    const newProject = document.createElement('button')
    newProject.textContent = 'New project';
    newProject.classList.add('btn-newProject')
    newProject.addEventListener('click', createNewProject);
    tabBar.append(newProject);
    
    const inbox = document.createElement('p');
    inbox.textContent = 'Inbox';
    inbox.classList.add('projectsName')
    inbox.addEventListener("click", projectOnClick);
    tabBar.append(inbox);

    const completed = document.createElement('p');
    completed.textContent = 'Completed';
    completed.classList.add('projectsName');
    completed.addEventListener("click", projectOnClick);
    tabBar.append(completed);
}

function createContent() {    
    const content = document.createElement('div');
    content.classList.add("content");
    document.body.append(content);
    const cardHolder = document.createElement('div');
    cardHolder.classList.add('cardHolder');
    cardHolder.setAttribute('data-project', 'inbox');
    content.append(cardHolder);
}

function createNewProject() {
    let title = prompt('Create a new project:');
    const newProject = document.createElement('p');
    newProject.textContent = title;
    newProject.classList.add('projectsName')
    newProject.addEventListener("click", projectOnClick)
    let tabBar = document.querySelector('.tabBar');
    tabBar.append(newProject);
    Projects.save(title);
    
}

function appendProjects() {
    let tabBar = document.querySelector('.tabBar');
    let projects = Projects.load();
    let projectsLength = projects.length;
    for (let i = 0; i < projectsLength; i++) {
        const newProject = document.createElement('p');
        newProject.textContent = projects[i];
        newProject.classList.add('projectsName')
        newProject.addEventListener("click", projectOnClick)
        tabBar.append(newProject);
    }
}

function projectOnClick(e){
    let cardHolder = document.querySelector('.cardHolder');
    cardHolder.setAttribute('data-project', e.target.textContent);
    card.displayTasks(e.target.textContent)
}


createHeadBar();
createBar();
createContent();
card.displayTasks("inbox");
appendProjects();
})();


const completed = document.querySelectorAll('.completed');
completed.forEach(el => el.addEventListener('click', changeStatus));

const btnNewTask = document.querySelector('.btn-newTask');
btnNewTask.addEventListener('click', form.displayForm);




//TODO: Make diferent folders for diferent projects
