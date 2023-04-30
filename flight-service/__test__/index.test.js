const request = require('supertest');
const app = require('../src/index.js');
const tokenAdmin = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJBRE1JTiIsImlkIjoiY2xmZm9ybm56MDAwNmNtNXNlbHBtaTR5aiIsImVtYWlsIjoiQURNSU5AMS5jb20ifSwiZXhwIjoxNjc5MjUxODMzLCJpYXQiOjE2NzkyNDgyMzN9.7VQb3MzUYM9TMGDzE3GCc_qGh4fKuMf8wf-43rOn-ZM"
const tokenPengguna = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJQRU5HR1VOQSIsImlkIjoiY2xmZm9yNmNsMDAwMGNtNXNxamF3NXZqcyIsImVtYWlsIjoicGVuZ2d1bmFAMS5jb20ifSwiZXhwIjoxNjc5MjUxODg5LCJpYXQiOjE2NzkyNDgyODl9.lVkokyg2EFFHvH9ByggYmMQ81xR_XixhYbIbJD7dAp0"
const tokenMitra = "Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..egaVNbjzjL6zgzLz.QgweXabf8r-d_IU7mSDHMJ4KhvdRd_M_D4asNCn-KOH6kf6XzDWa3ZT6UYRfTvi47kk7AVDvY5fQmejNHOpDRWJ_Ea6FDh4yRqLkEo2mmCmNFIRzp4q3y_fGP_aRfZ9skIa8kADHNvudbUpp3BSkPd5pSeDvaljjRcZLzqoq88bo7wGo3ngMbE4Hqx4I4OmgWhOCxK0ztt6bbk62GYB8UNKqG7-K_jsTbMRBQRw1rI0ls4NerFFnluEsaf2cwcZj6-_mb-9acFb30WN9xoPjTWaoH_mivhdKqjYVYPa-6JCZJx7uLzc8I3-mo6j08EWl5IEWE_BzemDkcHU7u89MEzKGU71-kyguo_qwN1OuUZFgMu7kp87aGa6u0PLpAH5sah5aWcBF8asPV1ifqfviABHeCxOiU4uQJidERIVg9qQRw061NoW6Kk0iZ6q20Q0DX_q0379zKxnjjtSEALexLqiPk1y7rpyOK7Zqp-BxbeZXwdxxJ2IH3vSHQm0zdHoAn376hvr0bH65I0syY14z1jUOs67EQo4I4BKqsMtqzK8.qfLiXraYfErGjJ-qZrZMtw"
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
        const response = await request(app).post('/flights/airport').send({ name: "Airport Airport", description: "wel its " }).set('Authorization', tokenAdmin)
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty('data')
    })
    // TEST CREATE FLIGHT 
    it('Should create Flight', async () => {
        const response = await request(app).post('/flights/create').send({
            "destination": "jakarta",
            "from" : "letsgo",
            "deparatur_time": "2023-04-24T11:39:51+00:00",
            "arrival_time": "2023-05-24T11:39:51+00:00",
            "price": 200.000,
            "flight_type": "BOING33",
            "airportId": "clffpbhsw0000cm979gdewnw6"
        }).set('Authorization', tokenMitra)
        expect(response.statusCode).toBe(200)
        // expect(response.body).toHaveProperty({ status: "not authorized" })
    })
    it('Should Delayed Time Flight', async () => {
        const response = await request(app).put('/flights/flight/clffpz33g0001cm94qst8i3d7').send({
            delayed_time: 4
        }).set('Authorization', tokenMitra)
        expect(response.statusCode).toBe(204)
    })
});
