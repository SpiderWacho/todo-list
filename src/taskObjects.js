const task = (title, description, dueDate, priority, completed) => {
    return {title, description, dueDate, priority, completed};
}

const Storage = (() => {
    function save(obj) {
        const currentData = load();
        let actualLenght = currentData.length;
        if (actualLenght === undefined) {
            obj.index = 0;
        }
        else {
            obj.index = actualLenght;
        }
        currentData.push(obj);
        window.localStorage.setItem("data", JSON.stringify(currentData)); 
    }
    
    function load() {
        let data = JSON.parse(localStorage.getItem("data") || "[]");
        let currentData = [];
        if (data.length != 0) {
            currentData = data;
        }
        return currentData;
    }

    function actualize(data) {
        let j = data.length;
        for (let i = 0; i < j ; i++) {
            data[i].index = i;
        }
        window.localStorage.setItem("data", JSON.stringify(data));
    }

    return {save, load, actualize};
})();

export {task, Storage};
