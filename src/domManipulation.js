import {task, Storage, Projects} from './taskObjects.js'
import {formatDistanceToNow} from 'date-fns/esm';



const content = (() => {
function createCard(obj) {
    const card = document.createElement('div');
    card.classList.add('card');
    for (let key in obj) {
        if (key == 'completed') {
            const newEl = document.createElement('p')
            newEl.textContent = `${obj[key]}`;
            newEl.classList.add(`${key}`)
            newEl.classList.add('cardText');
            newEl.addEventListener('click', changeStatus);
            card.append(newEl);
            continue;
        }
        if (key == 'dueDate') {
            const newEl = document.createElement('p')
            let formatedDate = new Date (obj[key]);
            let dtDateOnly = new Date(formatedDate.valueOf() + formatedDate.getTimezoneOffset() * 60 * 1000);
            newEl.textContent = formatDistanceToNow(dtDateOnly);
            newEl.classList.add(`${key}`);
            newEl.classList.add('cardText');
            card.append(newEl);
            continue;
        }
        const newEl = document.createElement('p')
        newEl.textContent = `${obj[key]}`;
        newEl.classList.add(`${key}`)
        newEl.classList.add('cardText');
        card.append(newEl);
    }
    const newBtn = document.createElement('button');
    newBtn.classList.add('btnDelete');
    newBtn.textContent = 'X';
    newBtn.addEventListener('click', removeTask);
    card.append(newBtn);
    return card;
}

function createPlaceHolder() {
    const placeHolder = document.createElement('div');
    placeHolder.classList.add('card');
    const newEl = document.createElement('p');
    newEl.textContent = 'Create a new task...';
    newEl.classList.add('cardText');
    newEl.id = 'placeHolderText';
    placeHolder.id = 'placeHolder';
    placeHolder.addEventListener('click', form.displayForm);
    placeHolder.append(newEl);
    return placeHolder;
}

function displayTasks(currentProject) {
    clearTasks();
    const data = Storage.load(currentProject);
    let j = data.length;
    const cardHolder = document.querySelector('.cardHolder');
    for (let i = 0; i < j; i++) {
        cardHolder.append(createCard(data[i]));
    }
    cardHolder.append(createPlaceHolder());
    if (currentProject === 'Completed' || currentProject === 'Inbox') {
        return;
    }
    const newP = document.createElement('p');
    newP.classList.add('btn-remove');
    newP.textContent = `Delete ${currentProject} folder`;
    newP.addEventListener('click', deleteProject);
    cardHolder.append(newP);
}

function deleteProject() {
        let cardHolder = document.querySelector('.cardHolder');
        let currentProject = cardHolder.getAttribute('data-project');
        if (currentProject === 'Inbox' || currentProject === 'Completed') {
            return;
        }
        let elements = document.querySelectorAll('.projectsName')
        let length = elements.length;
        for (let i = 0; i < length; i++) {
            if (elements[i].textContent === currentProject) {
                elements[i].remove();
            }
        }
        Projects.remove(currentProject)
        window.localStorage.removeItem(currentProject);
        displayTasks('index');
}

function appendProjects() {
    let tabBar = document.querySelector('.tabBar');
    let projects = Projects.load();
    let projectsLength = projects.length;
    console.log(projects);
    for (let i = 0; i < projectsLength; i++) {
        const newProject = document.createElement('p');
        newProject.textContent = projects[i];
        
        if (newProject.textContent === '') {
            continue;
        }
        newProject.classList.add('projectsName')
        newProject.addEventListener("click", projectOnClick)
        tabBar.append(newProject);
        }
}

function removeTask(e) {
    let cardHolder = document.querySelector('.cardHolder');
    let currentProject = cardHolder.getAttribute('data-project')  
    let currentData = Storage.load(currentProject);
    const index = e.target.previousElementSibling.textContent;
    currentData.splice(index, 1);
    Storage.actualize(currentData, currentProject); 
    displayTasks(currentProject);
}

function clearTasks(){ 
    const cardHolder = document.querySelector('.cardHolder');
    if (cardHolder.hasChildNodes() === true){
        while (cardHolder.firstChild) {
            cardHolder.removeChild(cardHolder.lastChild);
          };
    }
}

function projectOnClick(e){
    let cardHolder = document.querySelector('.cardHolder');
    cardHolder.setAttribute('data-project', e.target.textContent);
    displayTasks(e.target.textContent)
}



return {createCard, createPlaceHolder, displayTasks, clearTasks, appendProjects, projectOnClick};
})();



const form = (() => {
function displayForm() {
    const formBackground = document.createElement('div');
    formBackground.classList.add('formBackground');
    document.body.append(formBackground);
    
    const containerForm = document.createElement('div');
    containerForm.classList.add('container-form');
    formBackground.append(containerForm);

    const divClose = document.createElement('div');
    divClose.classList.add('divClose');
    const btnClose = document.createElement('p');
    btnClose.textContent = 'X'
    btnClose.classList.add('btn-close');
    btnClose.addEventListener('click', closeForm);
    divClose.append(btnClose);
    containerForm.append(divClose);

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
    submit.classList.add("submit");


    form.append(title, description, dueDate, priority, submit);
    containerForm.append(form);    
    
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(dueDate);
        if (dueDate.value === '') {
            if (document.querySelector('.errorMsg') == undefined) {
            const newP = document.createElement('p');
            newP.textContent = 'You must input a valid due date';
            newP.classList.add('errorMsg');
            containerForm.append(newP);
            }
            return;
        }
        let cardHolder = document.querySelector('.cardHolder');
        let currentProject = cardHolder.getAttribute('data-project')        
        const newTask = task(title.value, description.value, dueDate.value, priority.value, completed.textContent);
        Storage.save(newTask, currentProject);   
        content.displayTasks(currentProject);
        closeForm();
    })

}

function closeForm() {
    const formBackground = document.querySelector('.formBackground');
    formBackground.remove(); 
}

    return {displayForm}
})();


function changeStatus(e) {
    let cardHolder = document.querySelector('.cardHolder');
    let currentProject = cardHolder.getAttribute('data-project'); 
    if (currentProject === 'Completed') {
        return;
    } 
    let currentData = Storage.load(currentProject);
    const index = e.target.nextElementSibling.textContent;
    currentData[index].completed = 'Completed';
    Storage.save(currentData[index], 'Completed');
    currentData.splice(index, 1);
    Storage.actualize(currentData, currentProject); 
    e.target.parentNode.remove();
}


export {content, form, changeStatus};
