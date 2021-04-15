import Task from "../task/index.js";

const PrintTaskList = (props) => {
    const $container = document.querySelector(props.parent)

    props.taskList.forEach(task => {
        const newTask = Task.build(task)

        $container.appendChild(newTask)
    });
}
export default PrintTaskList