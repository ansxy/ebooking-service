const router = require('express').Router();

const { createAirport } = require('../controllers/airport.controller');
const { getAllFlight, createFlight, delayedFlight } = require('../controllers/flight.controller');
router.get('/', getAllFlight)
router.post('/create', createFlight)
router.post('/airport', createAirport)
router.put('/flight/:flightId', delayedFlight)


module.exports = router;