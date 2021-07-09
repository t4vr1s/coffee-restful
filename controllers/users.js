const { response, request } = require('express')

const getUsers = (req = request, res = response) => {
  const { page, limit } = req.query
  res.json({
    msg: 'Get API',
    page,
    limit
  })
}

const postUser = (req, res = response) => {
  const { nombre, edad } = req.body
  res.status(201).json({
    msg: 'Post API',
    nombre,
    edad
  })
}

const putUser = (req, res = response) => {
  const { id } = req.params
  res.json({
    msg: 'Put API',
    id
  })
}

const patchUser = (req, res = response) => {
  res.json({
    msg: 'Patch API'
  })
}

const deleteUser = (req, res = response) => {
  res.json({
    msg: 'Delete API'
  })
}

module.exports = {
  getUsers,
  postUser,
  putUser,
  patchUser,
  deleteUser
}
