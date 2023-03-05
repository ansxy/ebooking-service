const request = require('supertest');
const app = require('../src/index.js');
const tokenAdmin = ""
const tokenPengguna = ""
const tokenMitra = ""
const invalidToken = ""

describe('Flight API', () => {
    // TEST GET ALL FLIGHTS
    it('should get all flights', async () => {
        const response = await request(app).get('/flights');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('data');
        // expect(response.body.flights).toHaveLength(2);
    });
    // TEST CREATE AIRPORT 
    it('should create airport', async () => {
        const response = await request(app).post('/flights/airport').send({ name: "Airport Airport", description: "wel its " }).set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJBRE1JTiIsImlkIjoiY2xldmRwa3o0MDAwMGNtNzN4bzNqdGlpYyIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImV4cCI6MTY3ODAyMzQ4OCwiaWF0IjoxNjc4MDE5ODg4fQ.FDA1UvIGBAvF8N5GyK1aZ-4tz1Khc2izmZT_71QlRg0")
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty('data')
    })
    // TEST CREATE FLIGHT 
    it('Should create Flight', async () => {
        const response = await request(app).post('/flights/create').send({
            "destination": "jakarta",
            "deparatur_time": "2023-02-24T11:39:51+00:00",
            "arrival_time": "2023-02-24T11:39:51+00:00",
            "price": 200.000,
            "flight_type": "BOING33",
            "airportId": 4
        }).set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJBRE1JTiIsImlkIjoiY2xldmRwa3o0MDAwMGNtNzN4bzNqdGlpYyIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImV4cCI6MTY3ODAyMzQ4OCwiaWF0IjoxNjc4MDE5ODg4fQ.FDA1UvIGBAvF8N5GyK1aZ-4tz1Khc2izmZT_71QlRg0")
        expect(response.statusCode).toBe(200)
        // expect(response.body).toHaveProperty({ status: "not authorized" })
    })
    it('Should Delayed Time Flight', async () => {
        const response = await request(app).put('/flights/flight/2').send({
            delayed_time: 4
        }).set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJBRE1JTiIsImlkIjoiY2xldmRwa3o0MDAwMGNtNzN4bzNqdGlpYyIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImV4cCI6MTY3ODAyMzQ4OCwiaWF0IjoxNjc4MDE5ODg4fQ.FDA1UvIGBAvF8N5GyK1aZ-4tz1Khc2izmZT_71QlRg0")
        expect(response.statusCode).toBe(204)
    })
});
