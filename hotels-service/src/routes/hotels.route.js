const router = require('express').Router()

const { createHotel, getHotelById } = require('../controller/hotels.controller')
const verifyToken = require('../lib/verifyToken')
//TODO : Add Route For new API

router.post('/create',verifyToken, createHotel)
router.get('/hotel/:hotelId', getHotelById) 

module.exports = router