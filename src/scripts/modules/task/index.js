import all from "../../dados/index.js"
import Element from "../element/index.js"
import PrintTaskList from "../printTaskList/index.js"

const Task = {
    build: (task) => {
        const trash = Element({
            type: 'img',
            src: '../imagem/lixeira.png',
            class: ['delete-trash'],
        })
        const taskSpan = Element({
            type: 'span',
            text: task.name,
            class: ['span-checkbox', task.done ? 'span-checkbox-on' : 'span-checkbox-off']

        })
        const inputUpdate = Element({
            type: 'input',
            class: ['hide']
        })
        const _checkbox = Element({
            type: 'div',
            class: ['checkbox', task.done ? 'checked' : 'checkebox-no'],
        })
        const _taskWrapper = Element({
            type: 'div',
            class: ['task-wrapper', ],
            sons: [_checkbox, taskSpan, inputUpdate, trash]
        })
        trash.addEventListener('click', () => {
            all.delete(task.id)
            const allList = all.read()
            PrintTaskList({
                taskList: allList,
                parent: '.box-task',
            })
        })
        _checkbox.addEventListener('click', () => {
            all.toggleTask(task.id)
            const allList = all.read()
            PrintTaskList({
                taskList: allList,
                parent: '.box-task',
            })
        })
        taskSpan.addEventListener('click', () => {
            inputUpdate.value = taskSpan.textContent
            taskSpan.classList.toggle('hide')
            _checkbox.classList.toggle('hide')
            trash.classList.toggle('hide')
            inputUpdate.classList.toggle('hide')
            inputUpdate.focus()
        })
        inputUpdate.addEventListener('blur', () => {
            taskSpan.classList.toggle('hide')
            _checkbox.classList.toggle('hide')
            trash.classList.toggle('hide')
            inputUpdate.classList.toggle('hide')

            all.update(task.id, { name: inputUpdate.value })
            const allList = all.read()
            PrintTaskList({
                taskList: allList,
                parent: '.box-task',
            })
        })
        return _taskWrapper
    }
}

export default Task