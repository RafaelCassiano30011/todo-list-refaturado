import all from './dados/index.js'
import PrintTaskList from './modules/printTaskList/index.js'
import Task from './modules/task/index.js'

const $buttonNova = document.querySelector('.button-nova-tarefa')

// // const newTask = Task.build()
// console.log(newTask)

$buttonNova.addEventListener('click', () => {
    const allList = all.read()
    PrintTaskList({
        taskList: allList,
        parent: '.box-task',
    })
})