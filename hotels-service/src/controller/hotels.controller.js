const prisma = require ('../database/prisma.database')

const hotelController = {
    async createHotel(req, res) {
        const { name, description } = req.body;

        try {
            const hotel = await prisma.hotel.create({
                data: { 
                    name: name,
                    description: description,
                 }
            });
            return res.status(200).json({ "status": "success", data: airport })
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
        // return res.status(401).json({ status: "not authorized "}) //dibutuhin kalo udah ada token sama if
    }
}

module.exports = {createHotel}