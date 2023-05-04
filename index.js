require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser')
const courses = require("./controller/courses.controller")
const users = require("./controller/users.controller")
const login = require("./controller/login.controller")
const app = express()
const { validate } = require("./midlewares/middleware")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/v1/courses",  courses)
app.use("/v1/users", users )
app.use("/v1/login", login )
// http: GET,  DELETE, POST, PUT, PATCH
// HTTP STATUS: 200, 201, 404, 401, 500
app.listen(process.env.PORT, () => {
    console.log(`Server its running in the port ${process.env.PORT}`)
})

