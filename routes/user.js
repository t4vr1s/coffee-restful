const { Router } = require('express')
const {
  getUsers,
  postUser,
  putUser,
  patchUser,
  deleteUser
} = require('../controllers/users')

const router = Router()

router.get('/', getUsers)

router.post('/', postUser)

router.put('/:id', putUser)

router.patch('/', patchUser)

router.delete('/', deleteUser)

module.exports = router
