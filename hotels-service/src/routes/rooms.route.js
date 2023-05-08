const router = require('express').Router()

const { getAllRoom, createRoom, getRoomById } = require('../controller/rooms.controller')
//TODO : Add Route For new APi
//TODO : Taro di middlewarenya ini : verifyToken // Diimport dulu c
//CONTOH :  router.post('/create',verifyToken, createHotel)
 

router.get('/', getAllRoom)
router.post('/room/create', createRoom)
router.get('/room/:roomId', getRoomById)