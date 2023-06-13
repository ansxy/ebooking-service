const RoomRouter = require('express').Router()

const { getAllRoom, createRoom, getRoomById, deleteRoomById, editRoomById } = require('../controller/rooms.controller')
const verifyToken = require('../lib/verifyToken')
//TODO : Add Route For new APi
//TODO : Taro di middlewarenya ini : verifyToken // Diimport dulu c
//CONTOH :  router.post('/create',verifyToken, createHotel)
 

RoomRouter.delete('/:roomId',verifyToken,deleteRoomById)
RoomRouter.put('/:roomId',verifyToken,editRoomById)
RoomRouter.get('/', getAllRoom)
RoomRouter.post('/create', createRoom)
RoomRouter.get('/:roomId', getRoomById)

module.exports = {RoomRouter}