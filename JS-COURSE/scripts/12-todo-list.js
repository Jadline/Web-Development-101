//create array to store todos
//when we click add
//get text from the textbox and add it to the add
//console log() the array

// const todos = []

// let input = document.querySelector('input')
// let button = document.querySelector('button')

// button.addEventListener('click', ()=>{
//     todos.push(input.value)
//     input.value = ''
//     console.log(todos)
    
// })

const todoList = [{
    name :'make dinner',
    dueDate :'2024-08-22'
},
{name :'wash dishes',
dueDate:'2024-07-16'}];
renderTodoList()
function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach((todoObject,index) => {
        //destructuring
        const {name,dueDate} = todoObject
        
        const html = `<div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${index},1)
            renderTodoList()
        " class="delete-todo-button">Delete</button>
        `
        todoListHTML += html 
    })
    /*for(let i=0;i < todoList.length;i++){
        const todoObject = todoList[i]
        //destructuring
        const {name,dueDate} = todoObject
        
        const html = `<div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1)
            renderTodoList()
        " class="delete-todo-button">Delete</button>
        `
        todoListHTML += html
}*/
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo(){
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value

    const dateInputELement  = document.querySelector('.js-due-date-input')
    const dueDate = dateInputELement.value
    // console.log(name)
    todoList.push({
        //name : name,
        //dueDate:dueDate
        name,
    dueDate})
    inputElement.value = ''
    // console.log(todoList)

    renderTodoList()
}