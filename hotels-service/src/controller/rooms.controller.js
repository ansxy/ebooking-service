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
        console.log(error)
        return res.status(500).json({ status: error })
    }
}

const getRoomById = async (req, res) => {
    const { roomId } = req.params
    try {
        const room = await prisma.room.findUnique({
            where: {
                id: roomId
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

//TEST : Edit Room 
const editRoomById = async(req,res) => {
    const {roomId} = req.params
    const {price_per_night} = req.body
    try {
        const updatedRoom = await prisma.room.upsert({
            where : {
                id : roomId
            },
            update : {
                price_per_night : price_per_night
            }
        })
        return res.status(200).json({status : "success",data : updatedRoom})
    } catch (error) {
        return res.status(500).json({status : "fail", message: error})
    }
}

//TEST : Delete Room 
const deleteRoomById = async(req,res) => {
    const {roomId} = req.params
    try {
        await prisma.room.delete({
            where : {
                id : roomId
            }
        })
        return res.status(200).json({status : "success" , message : "deleted"})
    } catch (error) {
        return res.status(500).json({status : 'fail' , message : error})
    }
}

//TODO : Reservasi Room 
const resevRoom = async (req,res) => {

}




module.exports = { getAllRoom, createRoom, getRoomById ,editRoomById,deleteRoomById}