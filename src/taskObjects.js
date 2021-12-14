const task = (title, description, dueDate, priority, completed) => {
    return {title, description, dueDate, priority, completed};
}

function saveTask(obj) {
    placeholderTask = {};
    for (key in obj) {
        placeholderTask = {
            key: obj[key]
        } 
    }
    return placeholderTask;  
};

export {task, saveTask};
