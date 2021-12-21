import {task, Storage} from './taskObjects.js'



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
    placeHolder.id = 'placeHolder';
    placeHolder.addEventListener('click', form.displayForm);
    placeHolder.append(newEl);
    return placeHolder;
}

function displayTasks() {
    const data = Storage.load();
    console.log(data);
    let j = data.length;
    const cardHolder = document.querySelector('.cardHolder');
    clearTasks();
    for (let i = 0; i < j; i++) {
        cardHolder.append(card.createCard(data[i]));
    }
    cardHolder.append(createPlaceHolder());
}

function removeTask(e) {
    let currentData = Storage.load();
    const index = e.target.previousElementSibling.textContent;
    currentData.splice(index, 1);
    Storage.actualize(currentData); 
    displayTasks();
}

function clearTasks(){ 
    const cardHolder = document.querySelector('.cardHolder');
    if (cardHolder.hasChildNodes() === true){
        while (cardHolder.firstChild) {
            cardHolder.removeChild(cardHolder.lastChild);
          };
    }
}



return {createCard, createPlaceHolder, displayTasks, clearTasks};
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
        Storage.save(newTask);
        card.displayTasks();
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
    e.target.parentNode.remove();
    //TODO: Check how to target task in localStorage, need to make an index to access
}



export {card, form, changeStatus};
