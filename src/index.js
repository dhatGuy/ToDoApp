console.clear()
import Todo from "./class";
import render from './render'

export const myTodos = [new Todo('Clean the house', 'Nothing much to do', '2020-04-01', 'High')]

// let todo1 = new Todo('Clean the house', 'Nothing much to do', '2020-04-01', 'High')
// console.log(todo1)

// document.querySelector('.title').innerHTML = todo1._title
// document.querySelector('.description').innerHTML = todo1._description
// document.querySelector('.due-date').innerHTML = todo1._dueDate
// document.querySelector('.priority').innerHTML = todo1._priority

function createTodo(){
    var title = document.querySelector('#title').value
    var description = document.querySelector('#description').value
    var dueDate = document.querySelector('#dueDate').value
    var priority = document.querySelector('#priority').value

    myTodos.push(new Todo(title, description, dueDate, priority))
}

document.querySelector('.btn').addEventListener('click', function(){
    createTodo()
    render
    console.log(myTodos)
})
