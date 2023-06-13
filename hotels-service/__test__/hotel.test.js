const request = require('supertest');
const app = require('../src/index.js');
const tokenAdmin = ""
const tokenPengguna = ""
const tokenMitra = ""
const invalidToken = ""

describe('Hotels Api', () => {
    // TEST GET ALL FLIGHTS
    it('should get all hotels', async () => {
        const response = await request(app).get('/hotels');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('data');
    });
    // TEST CREATE AIRPORT 
    it('should create hotel', async () => {
        const response = await request(app).post('/hotels/create').send({ name: "Hotels", description: "wel its " })
        // .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJBRE1JTiIsImlkIjoiY2xldmRwa3o0MDAwMGNtNzN4bzNqdGlpYyIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImV4cCI6MTY3ODAyMzQ4OCwiaWF0IjoxNjc4MDE5ODg4fQ.FDA1UvIGBAvF8N5GyK1aZ-4tz1Khc2izmZT_71QlRg0")
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty('data')
    })
    // TEST CREATE FLIGHT 
    it('Should create Rooms', async () => {
        const response = await request(app).post('/hotels/room/create').send({
            "room_number": 52,
            "price_per_night": 200.000,
            "room_type": "BOING33",
            "hotelId": 1
        })
        // .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJBRE1JTiIsImlkIjoiY2xldmRwa3o0MDAwMGNtNzN4bzNqdGlpYyIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImV4cCI6MTY3ODAyMzQ4OCwiaWF0IjoxNjc4MDE5ODg4fQ.FDA1UvIGBAvF8N5GyK1aZ-4tz1Khc2izmZT_71QlRg0")
        expect(response.statusCode).toBe(200)
        // expect(response.body).toHaveProperty({ status: "not authorized" })
    })
    // it('Should Delayed Time Flight', async () => {
    //     const response = await request(app).put('/flights/flight/2').send({
    //         delayed_time: 4
    //     }).set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJBRE1JTiIsImlkIjoiY2xldmRwa3o0MDAwMGNtNzN4bzNqdGlpYyIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImV4cCI6MTY3ODAyMzQ4OCwiaWF0IjoxNjc4MDE5ODg4fQ.FDA1UvIGBAvF8N5GyK1aZ-4tz1Khc2izmZT_71QlRg0")
    //     expect(response.statusCode).toBe(204)
    // })
});