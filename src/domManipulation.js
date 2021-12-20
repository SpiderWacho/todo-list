import {task} from './taskObjects.js'


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
        const newTask = task(title.value, description.value, dueDate.value, priority.value, completed.textContent);
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

export {card, form, getLocalStorage, deleteLocal, changeStatus};
