import 'reflect-metadata'
import express, { Application, Request, Response } from 'express'
import { renderToString } from 'react-dom/server'
import { createElement } from 'react'
import { createConnection } from 'typeorm'
import { User } from './models/user.model'
import Email from './components/Email'

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
    const email = renderToString(createElement(Email))
    return res.send(email)
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server started 🦄: http://localhost:${PORT}`)
})

// createConnection()
//     .then(async (connection) => {
//         console.log('Inserting a new user into the database...')
//         const user = new User()
//         user.firstName = 'Timber'
//         user.lastName = 'Saw'
//         user.age = 25
//         await connection.manager.save(user)
//         console.log('Saved a new user with id: ' + user.id)

//         console.log('Loading users from the database...')
//         const users = await connection.manager.find(User)
//         console.log('Loaded users: ', users)

//         console.log(
//             'Here you can setup and run express/koa/any other framework.'
//         )
//     })
//     .catch((error) => console.log(error))
