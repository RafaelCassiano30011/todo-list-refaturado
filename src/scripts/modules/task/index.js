import Element from "../element/index.js"


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
        const _checkbox = Element({
            type: 'div',
            class: ['checkbox', task.done ? 'checked' : 'checkebox-no'],
        })
        const _taskWrapper = Element({
            type: 'div',
            class: ['task-wrapper', ],
            sons: [_checkbox, taskSpan, trash]
        })
        return _taskWrapper
    }
}

export default Task