const prisma = require('../database/prisma.database')

const getAllRoom = async (req, res) => {
    try {
        const flights = await prisma.flight.findMany()
        return res.status(200).json({ data: flights })
    } catch (error) {
        return res.status(500).jsom({ error: error })
    }
}

const createRoom = async (req, res) => {
    const { room_number, price_per_night, zoom_type, hotelId } = req.body

    try {
        const room = await prisma.room.create({
            data: {
                room_number,
                price_per_night,
                zoom_type,
                hotelId
            }
        })
        return res.status(200).json({ status: "success", room: room })
    } catch (error) {
        return res.status(500).json({ status: error })
    }
}

module.exports = {getAllRoom, createRoom}