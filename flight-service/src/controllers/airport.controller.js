const prisma = require('../database/prisma.database')
const verifyToken = require('../lib/verifyJWT')

const createAirport = async (req, res) => {
    const { name, description } = req.body
    const token = await verifyToken(req)
    if (token.user.role === 'ADMIN') {
        try {
            const airport = await prisma.airpots.create({
                data: {
                    name: name,
                    description: description,
                }
            })
            return res.status(200).json({ "status": "success", data: airport })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: error })
        }
    }
    return res.status(401).json({ status: "not authorized" })
}

const getairportById = async (req, res) => {
    const {airportId} = req.params
    try{
        const flight = await prisma.airport.findUnique({
            where: {
                id: parseInt(airportId)
            },
            include: {
                   flight: true 
            } 
    })
    if (!airport) {
        return res.status(404).json({ error: "airport not found" })
    }
    return res.status(200).json({ data: airport })
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}


module.exports = { createAirport }
