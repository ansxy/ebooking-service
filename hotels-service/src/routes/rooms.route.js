const router = require('express').Router()

const { getAllRoom, createRoom, getRoomById } = require('../controller/rooms.controller')

router.get('/', getAllRoom)
router.post('/room/create', createRoom)
router.get('/room/:roomId', getRoomById)