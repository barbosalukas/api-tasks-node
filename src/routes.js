import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
        const { search } = req.query
        const tasks = database.getTasks('tasks', search ? {
            title: search,
            description: search,
        } : null)

             return res.end(JSON.stringify(tasks))
    }
        
    },
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { title, description } = req.body

             const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date().toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'}),
        updated_at: new Date().toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'})
      }

         database.createTask('tasks', task)
         return  res.writeHead(201).end()
        
        }
    },
     {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const { title, description } = req.body
            const tasks = database.getTasks('tasks')
            const task = tasks.find(task => task.id === id)

    if (!task) {
      return res.writeHead(404).end()
    }

    if (title !== undefined) {
      task.title = title
    }

    if (description !== undefined) {
      task.description = description
    }

    task.updated_at = new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    })

    database.updateTask('tasks', id, task)

    return res.writeHead(204).end()
  }
},
    
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const tasks = database.getTasks('tasks')
            const task = tasks.find(task => task.id === id)

            if (!task) {
            return res.writeHead(404).end()
         }

            database.deleteTask('tasks', id)

            return res.writeHead(204).end()
  }
        },

        {
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id/complete'),
        handler: (req, res) => {
            const { id } = req.params
            const tasks = database.getTasks('tasks')
            const task = tasks.find(task => task.id === id)

    if (!task) {
      return res.writeHead(404).end()
    }

    if (task.completed_at === null) {
        task.completed_at = new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    })
    } else {
        task.completed_at = null
    }

    task.updated_at = new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    })

    database.updateTask('tasks', id, task)

    return res.writeHead(204).end()
  }
}


]