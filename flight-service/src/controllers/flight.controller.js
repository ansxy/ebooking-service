const prisma = require('../database/prisma.database')
const jwt = require('jsonwebtoken');
const verifyToken = require('../lib/verifyJWT');
const { status } = require('express/lib/response');

const getAllFlight = async (req, res) => {
    try {
        const fligts = await prisma.flight.findMany()
        return res.status(200).json({ data: fligts })
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

const createFlight = async (req, res) => {
    const { destination, deparatur_time, arrival_time, price, flight_type, airportId ,from} = req.body
    const token = await verifyToken(req)
    if (token.user.role === 'MITRA') {
        try {
            const flight = await prisma.flight.create({
                data: {
                    destination : destination.toUpperCase(),
                    deparatur_time, arrival_time, flight_type, price, airportId ,from : from.toUpperCase()
                }
            })
            return res.status(200).json({ status: "success", flight: flight })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ status: error })
        }
    }
    return res.status(401).json({ status: "not authorized" })
}

const getDetailFlight = async (req,res) => {
    const {flightId} = req.params
            try {
                const detailFlight = await prisma.flight.findUnique({
                    where:{
                        id : flightId
                    }
                })
                return res.status(200).json({status:'success', data: detailFlight})
            } catch (error) {
                return res.status(500).json({status:'fail',message:error})
            }
}

const delayedFlight = async (req, res) => {
    const { delayed_time } = req.body
    const { flightId } = req.params
    try {
        const flight = await prisma.flight.update({
            where: {
                id: flightId
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

const searchFlight = async (req,res) => {
    const {from,to,date} = req.query 
    try {
        const result = await prisma.flight.findMany({
            where: {
                AND : [
                {
                    from : {
                        equals : from.toUpperCase()
                    },
                    destination : {
                        equals : to.toUpperCase()
                    },
                    arrival_time: {
                        lte: new Date(date)
                    }
                }
                ]
            }
        })
        console.log()
        if(result.length !== 0) {
            //TODO : Change to Capitalize
            return res.status(200).json({status:'success', data : result})
        }
        return res.status(404).json({status:'fail', message : 'tidak ada penerbangan'})

    } catch (error) {
        return res.status(500).json({status:'fail', message : error })
    }

}


module.exports = { getAllFlight, createFlight, delayedFlight,getDetailFlight,searchFlight}