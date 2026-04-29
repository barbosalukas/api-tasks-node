import fs from 'node:fs'
import { parse } from 'csv-parse'

const stream = fs.createReadStream('./tasks.csv')

const parser = parse({
    delimiter: ',',
    skipEmptyLines: true,
    from_line: 2
})

const csv = stream.pipe(parser)

for await(const line of csv) {
    const [title, description] = line

    await fetch('http://localhost:3333/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            description
        })
    })
}