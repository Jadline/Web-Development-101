

const taskButton = document.querySelector('.add-task-btn')

taskButton.addEventListener('click',() => {
    const inputValue = document.querySelector('.new-task').value

    const ul = document.querySelector('.tasks')

    let  li = document.createElement('li')
    li.classList.add('task')

    let inputElement = document.createElement('input')
    inputElement.type = 'checkbox'
    inputElement.classList.add('task-checkbox')

    let spanElement = document.createElement('span')
    spanElement.innerHTML = inputValue
    spanElement.classList.add('task-name')

    let dltBtn = document.createElement('button')
    dltBtn.innerHTML = 'Delete'
    dltBtn.classList.add('delete-task')

    li.append(inputElement)
    li.append(spanElement)
    li.append(dltBtn)

    ul.appendChild(li)


    document.querySelector('.new-task').value = '';


    
})