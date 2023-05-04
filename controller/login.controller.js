  const express = require("express")
  const routes = express.Router()
  const { validateUser } = require("../services/login.service")
  
  routes.post('/', validateUser);

  module.exports = routes;