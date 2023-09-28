const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userGuid: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        // unique:true
    }, 
    businessName: {
        type: String
    }, 
    businessNumber: {
        type: String
    }, 
    uniqueCode:{
        type: String
    },
    externalReference:{
        type: String
    },
    phoneNumber:{
        type: String
    },
    homeAddress: {
        type: [
            {
               street: String,
               city: String,
               state: String,
               postalCode: String

            }

        ]
    },
    postalAddress: {
        type: [
            {
                street: String,
               city: String,
               state: String,
               postalCode: String

            }
    ]
    },
    creationDate:{
        type: Date,
        default: Date.now
    },
    modifyDate:{
        type: Date
    }, 
    archiveDate: {
        type: Date
    }
    
});



const User = mongoose.model('User', userSchema)


module.exports = User;