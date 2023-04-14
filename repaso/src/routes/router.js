const {Router} = require('express')
const usersRouter = require('./users.router')
const postRouter = require('./posts.router')



const router = Router()

router.use("/users", usersRouter)
router.use("/posts", postRouter)

module.exports = router

