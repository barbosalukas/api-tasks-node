import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)


export class Database {
    #database = {}

    constructor() {
        fs.readFile(databasePath, 'utf8').then((data) => {
            this.#database = JSON.parse(data)
        }).catch (() => {
            this.#persist()
        })
    }

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    getTasks(tasks, search) {
        let data = this.#database[tasks] ?? []

        if (search) {
            data = data.filter(row => {
                return Object.entries(search).some(([key, value]) => {
                    return row[key].toLowerCase().includes(value.toLowerCase())
                })
            })
        }

        return data
    }

    createTask(tasks, data) {

        if( Array.isArray(this.#database[tasks])) {
                this.#database[tasks].push(data)
        } else {
            this.#database[tasks] = [data]

        }
            this.#persist()
            return data
        
    }

    updateTask(tasks, id, data) {
        const rowIndex = this.#database[tasks].findIndex( row => row.id === id )

        if ( rowIndex > -1 ) {
            this.#database[tasks][rowIndex] = data
            this.#persist()
        }
    }

    deleteTask(tasks, id) {
        const rowIndex = this.#database[tasks].findIndex( row => row.id === id)

        if ( rowIndex > -1 ) {
            this.#database[tasks].splice(rowIndex, 1)
            this.#persist()
        }
    }


    
}