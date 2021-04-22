const all = {
    data: [],
    create: (task) => {
        const listTask = all.read()
        listTask.push({ done: false, ...task, id: listTask.length + 1 })
        all.data = listTask
    },
    read: () => {
        return [...all.data]
    },
    delete: (id) => {
        const listTask = all.read()
        const newListTask = listTask.filter((task) => {
            if (task.id !== id) {
                return true
            } else {
                return false
            }
        })
        all.data = newListTask
    },
    update: (id, data) => {
        const listTask = all.read()
        const newListTask = listTask.map((task) => {
            if (task.id !== id) {
                return task
            } else {
                const listTaskUpdate = {...task, ...data }
                return listTaskUpdate
            }
        })
        all.data = newListTask
    },
    toggleTask: (id) => {
        const listTask = all.read()
        const newListTask = listTask.map((task) => {
            if (task.id !== id) {
                return task
            } else {
                const done = task.done
                const listTaskUpdate = {...task, done: !done }
                return listTaskUpdate
            }
        })
        all.data = newListTask
    },
}

export default all