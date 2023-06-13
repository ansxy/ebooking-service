const router = require('express').Router()

const { createHotel, getHotelById, editHotelById } = require('../controller/hotels.controller')
const verifyToken = require('../lib/verifyToken')
//TODO : Add Route For new API

router.post('/create',verifyToken, createHotel)
router.put('/hotel/:hotelId' ,verifyToken,editHotelById)
router.get('/hotel/:hotelId', getHotelById) 

module.exports = router