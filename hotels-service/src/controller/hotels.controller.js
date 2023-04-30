const prisma = require('../database/prisma.database')

const createHotel = async (req, res) => {
    const { name, description } = req.body;
    try {
        const hotel = await prisma.hotel.create({
            data: {
                name: name,
                description: description,
            }
        });
        return res.status(200).json({ "status": "success", data: hotel })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error });
    }
    // return res.status(401).json({ status: "not authorized "}) //dibutuhin kalo udah ada token sama if
}

const getHotelById = async (req, res) => {
    const { hotelId } = req.params
    try {
        const hotel = await prisma.hotel.findUnique({
            where: {
                id: parseInt(id)
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

//TODO : Edit Hotel
const editHotelById = async(req,res) => {

}

module.exports = { createHotel, getHotelById }