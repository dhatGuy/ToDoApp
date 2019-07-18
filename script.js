//selecting the elements
var textBox = document.getElementById('task');
var addButton = document.getElementById('add');
var clearButton = document.getElementById('clear');
var taskList = document.getElementById("taskList");

//event for the add button
addButton.addEventListener('click', function () {
    var task = textBox.value;
    if (task.trim()) {
        var newList = document.createElement('li');
        var newText = document.createTextNode(task);
        newList.appendChild(newText);
        textBox.value = " ";
        taskList.appendChild(newList);
        var removeButton = document.createElement('button');
        removeButton.innerHTML = "Done";
        removeButton.className = "remove";
        removeButton.addEventListener("click", removeTask);
        newList.appendChild(removeButton);
        taskList.appendChild(newItem);
    }
    else {
        var errormsg = document.createElement('h3');
        errormsg.innerHTML = "The task-box can't be empty.";
        taskList.appendChild(errormsg);
    }
});

//event for the clear button
clearButton.addEventListener('click', function () {
    taskList.innerHTML = " ";
});

function removeTask(e) {
    // get the parent list item to remove
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
}