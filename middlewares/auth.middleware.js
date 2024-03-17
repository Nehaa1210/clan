const jwt = require('jsonwebtoken')
const payloadKey = 'backend';
const exp = '3h';

const auth = ({ req })=> {
    let token = req?.headers?.authorization?.split(" ")[1];
    if (!token) {
        return req;
    }
    try {
        const { data } = jwt.verify(token, payloadKey, { maxAge: exp });
        req.user = data;
    } catch(err) {
        console.log(err);
    }
    return req; 
}
const signToken= ({ email, password, _id}) =>{
    const payload = {  email, password, _id};

    return jwt.sign({ data: payload }, payloadKey, { expiresIn: exp });
}
module.exports = {auth,signToken};