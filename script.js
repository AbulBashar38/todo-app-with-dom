/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */

// select elements & assign them to variables
const form = document.querySelector('form')
const taskInput = document.querySelector('#new-task')
const incompleteTask = document.querySelector('#items')
const completeTask = document.querySelector('.complete-list ul')
const createTask = (taskName) => {
    const listItem = document.createElement('li')
    const checkbox = document.createElement('input')
    const label = document.createElement('label')
    checkbox.type = 'checkbox';
    label.innerText = taskName;
    listItem.appendChild(checkbox)
    listItem.appendChild(label)
    return listItem;
}
const addCompleteItems = (listItem) => {
    const completeItems = listItem;
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete'
    deleteBtn.innerText = 'Delete';
    completeItems.appendChild(deleteBtn);
    const checkbox = completeItems.querySelector('input[type="checkbox"]')
    checkbox.remove();
    completeTask.appendChild(completeItems)
    deleteCompleteTask(completeItems)
}
const deleteCompleteTask = (completeItems) => {
    const deleteBtn = completeItems.querySelector('button')
    deleteBtn.onclick = () => {
        const ul = completeItems.parentNode
        ul.removeChild(completeItems)
    }
}
const clickCheckbox = (listItem) => {
    const checkbox = listItem.querySelector('input[type="checkbox"]')
    checkbox.onchange = () => vanishListItem(listItem);
}
const vanishListItem = (listItem) => {
    const ul = listItem.parentNode;
    ul.removeChild(listItem);
    addCompleteItems(listItem)
}

const addTask = (event) => {
    event.preventDefault()
    const listItem = createTask(taskInput.value)
    taskInput.value = '';
    incompleteTask.appendChild(listItem)
    clickCheckbox(listItem)
}

for (let index = 0; index < incompleteTask.children.length; index++) {
    clickCheckbox(incompleteTask.children[index]);
}
for (let index = 0; index < completeTask.children.length; index++) {
    deleteCompleteTask(completeTask.children[index]);
}
form.addEventListener('submit', addTask)

