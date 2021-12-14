import {task} from './taskObjects.js'

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
    return card;
}

function createPlaceHolder(el) {
    const placeHolder = document.createElement('div');
    placeHolder.classList.add('card');
    const newEl = document.createElement('p');
    newEl.textContent = 'Create a new task...';
    newEl.classList.add('cardText');
    placeHolder.id = 'placeHolder'
    placeHolder.append(newEl);
    return placeHolder;
}

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

    const submit = document.createElement('input');
    submit.setAttribute("type", "submit");
    submit.setAttribute("name", "submit");
    submit.value = 'Submit';


    form.append(title, description, dueDate, priority, submit);
    containerForm.append(form);    
    submit.addEventListener('click', function(e) {
        e.preventDefault;
        newTask = task(title.value, description.value, dueDate.value, priority.value, submit.value)
        localStorage.setItem('newTask', JSON.stringify(newTask));
    })
    
}

let currentTodo = JSON.parse(localStorage.getItem("newTask") || "[]");
    if (currentTodo.lenght == 0 ) {
        let currentTodo = [];}
    else {
        currentTodo = newTask;
    }
currentTodo.forEach(todo => {   document.body.append(createCard(todo))

});



export {createCard, createPlaceHolder, displayForm};
