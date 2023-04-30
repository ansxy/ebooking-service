const router = require('express').Router()

const { getAllRoom, createRoom, getRoomById } = require('../controller/rooms.controller')
//TODO : Add Route For new APi

router.get('/', getAllRoom)
router.post('/room/create', createRoom)
router.get('/room/:roomId', getRoomById)