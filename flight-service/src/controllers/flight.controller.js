const prisma = require('../database/prisma.database')
const jwt = require('jsonwebtoken');
const getAllFlight = async (req, res) => {
    try {
        const fligts = await prisma.flight.findMany()
        return res.status(200).json({ data: fligts })
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

const createFlight = async (req, res) => {
    const { destination, deparatur_time, arrival_time, price, flight_type, airportId } = req.body
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    const verify = jwt.verify(token, "5MUDIaIUXiE1K9UW4oWC9DkSc/ULuKEdvTtDkiercI0=")
    if (verify.role === "MITRA" || "ADMIN") {
        try {
            const flight = await prisma.flight.create({
                data: {
                    destination,
                    deparatur_time, arrival_time, flight_type, price, airportId
                }
            })
            return res.status(200).json({ status: "success", flight: flight })
        } catch (error) {
            return res.status(500).json({ status: error })
        }
    }
    return res.status(401).json({ status: "not authorized" })

}

const delayedFlight = async (req, res) => {
    const { delayed_time } = req.body
    const { flightId } = req.params
    try {
        const flight = await prisma.flight.update({
            where: {
                id: parseInt(flightId)
            },
            data: {
                delayed_time: delayed_time
            }
        })
        return res.status(204).json({
            "status": "success",
            data: flight
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: "failed", message: error })
    }
}


module.exports = { getAllFlight, createFlight, delayedFlight }