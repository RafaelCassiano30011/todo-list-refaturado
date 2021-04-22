import all from './dados/index.js'

import PrintTaskList from './modules/printTaskList/index.js'

const $formBox = document.querySelector('.form-box')
const $buttonNewTask = document.querySelector('.button-new-task')
const $inputCreate = document.querySelector('.input-create')
const allList = all.read()

PrintTaskList({
    taskList: allList,
    parent: '.box-task',
})
$formBox.addEventListener('submit', (e) => {
    e.preventDefault()
    if ($inputCreate.classList == 'input-create') {
        $buttonNewTask.textContent = 'Adiconar-Tarefa'

        $inputCreate.classList.toggle('input-create')
        $inputCreate.value = ''

    } else if ($inputCreate.classList == !'input-create') {
        $buttonNewTask.textContent = '+  Nova tarefa'

        $inputCreate.classList.toggle('input-create')
        if ($inputCreate.value == '') return

        all.create({ name: $inputCreate.value })

        const allList = all.read()
        PrintTaskList({
            taskList: allList,
            parent: '.box-task',
        })
    }
})