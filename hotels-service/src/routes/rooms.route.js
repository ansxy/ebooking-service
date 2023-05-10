const router = require('express').Router()

const { getAllRoom, createRoom, getRoomById, deleteRoomById, editRoomById } = require('../controller/rooms.controller')
const verifyToken = require('../lib/verifyToken')
//TODO : Add Route For new APi
//TODO : Taro di middlewarenya ini : verifyToken // Diimport dulu c
//CONTOH :  router.post('/create',verifyToken, createHotel)
 

router.delete('/room/:roomId',verifyToken,deleteRoomById)
router.put('/room/:roomId',verifyToken,editRoomById)
router.get('/', getAllRoom)
router.post('/room/create', createRoom)
router.get('/room/:roomId', getRoomById)