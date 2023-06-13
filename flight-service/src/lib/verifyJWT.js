const jwt = require('jsonwebtoken');

async function verifyToken(req) {
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    const verify = jwt.verify(token, process.env.JWT_SECRET)
    return verify
}

module.exports = verifyToken