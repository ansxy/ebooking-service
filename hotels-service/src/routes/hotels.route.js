const router = require('express').Router()

const { createHotel, getHotelById } = require('../controller/hotels.controller')
//TODO : Add Route For new API

router.post('/create', createHotel)
router.get('/hotel/:hotelId', getHotelById) 

module.exports = router