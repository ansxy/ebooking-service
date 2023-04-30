const router = require('express').Router();

const { createAirport } = require('../controllers/airport.controller');
const { getAllFlight, createFlight, delayedFlight, getDetailFlight, searchFlight } = require('../controllers/flight.controller');
router.get('/', getAllFlight)
router.post('/create', createFlight)
router.post('/airport', createAirport)
router.put('/flight/get-flight-byid/:flightId', delayedFlight)
router.get('/flight/get-flight-byid/:flightId',getDetailFlight)
router.get('/flight/search-flight',searchFlight)


module.exports = router;