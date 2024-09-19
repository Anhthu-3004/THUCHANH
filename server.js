import express from 'express'
import dotenv from 'dotenv/config'
import myDateTime from './date'
import { getPath } from './getURL'
import viewEngine from './viewEngine'
const app = express()
const port = process.env.PORT
viewEngine (app)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.get('/ejs', (req, res) => {
    res.render("test")
})
app.get('/about', (req, res) => {
    res.send('Hello World!. Page about')
})
app.get('/date', (req, res) => {
    res.send(myDateTime())
})