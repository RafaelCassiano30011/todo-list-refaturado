const all = {
    data: [{
            id: 1,
            name: 'fazer arroz',
            done: false,
        },
        {
            id: 2,
            name: 'tirar o lixo',
            done: true,
        }
    ],

    create: () => {},
    read: () => {
        return [...all.data]
    },
    delete: () => {},
    update: () => {},
}

export default all