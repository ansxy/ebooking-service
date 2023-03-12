const prisma = require('../database/prisma.database')
const getAllRoom = async (req, res) => {
    try {
        const hotels = await prisma.hotel.findMany()
        return res.status(200).json({ data: hotels })
    } catch (error) {
        return res.status(500).jsom({ error: error })
    }
}

const createRoom = async (req, res) => {
    const { room_number, price_per_night, room_type, hotelId } = req.body
    try {
        const room = await prisma.room.create({
            data: {
                room_number,
                price_per_night,
                room_type,
                hotelId
            }
        })
        return res.status(200).json({ status: "success", room: room })
    } catch (error) {
        return res.status(500).json({ status: error })
    }
}

const getRoomById = async (req, res) => {
    const { roomId } = req.params
    try {
        const room = await prisma.room.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                hotel: true
            },
        })
        if (!room) {
            return res.status(404).json({ error: "Room not found" })
        }
        return res.status(200).json({ data: room })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error })
    }
}

module.exports = { getAllRoom, createRoom, getRoomById }