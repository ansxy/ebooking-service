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

module.exports = { createAirport }
