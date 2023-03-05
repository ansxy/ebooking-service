const router = require('express').Router()

const { createHotel } = require('../controller/hotels.controller')
const {getAllRoom, createRoom} = require('../controller/rooms.controller')
router.get('/', getAllRoom)
router.post('/create', createHotel)
router.post('/room', createRoom)

module.exports = router