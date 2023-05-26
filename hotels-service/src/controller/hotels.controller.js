const prisma = require('../database/prisma.database')

const createHotel = async (req, res) => {
    const { name, description,address,city,phone } = req.body;
    try {
        const hotel = await prisma.hotel.create({
            data: {
                name: name,
                description: description,
                address : address,
                city : city,
                phone : phone
            }
        });
        return res.status(200).json({ "status": "success", data: hotel })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error });
    }
}

const getHotelById = async (req, res) => {
    const { hotelId } = req.params
    try {
        const hotel = await prisma.hotel.findUnique({
            where: {
                id: parseInt(hotelId)
            },
            include: {
                rooms: true
            }
        })
        if (!hotel) {
            return res.status(404).json({ error: "Hotel not found" })
        }
        return res.status(200).json({ data: hotel })
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

//TEST : Edit Hotel
const editHotelById = async(req,res) => {
    const {hotelId} = req.params
    const { name, description,address,city,phone } = req.body;
    try {
        const updateHotel = await prisma.room.upsert({
            where : {
                id : hotelId
            },
            data: {
                name: name,
                description: description,
                address : address,
                city : city,
                phone : phone
            }
        })
        return res.status(200).json({status : "success",data : updateHotel})
    } catch (error) {
        return res.status(500).json({status : "fail", message: error})
    }
}

module.exports = { createHotel, getHotelById,editHotelById }