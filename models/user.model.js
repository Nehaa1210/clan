const mongoose= require('mongoose');
const userSchema = mongoose.Schema(
    {
        username:String,
        email:String,
        password:String,
        books:[{book:String,ownId:String, status:{type:String}}],
        incomingRequests:[{book:String,requesterId:String}],
        outgoingRequests:[{book:String,ownerId:String}]
    }
)
 
const UserModel = mongoose.model('User',userSchema);

module.exports= UserModel