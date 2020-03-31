import myTodos from './index'

export function render(){
    myTodos.forEach(todo=>{
        document.querySelector('.list').appendChild(
            `<li>${todo._title}</li>`
        )
    })
    console.log('worked')
}

