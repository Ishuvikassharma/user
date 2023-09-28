const mongoose = require('mongoose');
require('dotenv').config();

exports.connection = async () => {
    try {
        mongoose.set("strictQuery", false)

        await mongoose.connect(process.env.MONGO_URL);
        console.log('________________________________________\n<- ✅ Database Connection Established ->\n________________________________________\n');

        mongoose.set('debug', true);
    } catch (err) {
        console.log('_________________________________________\n<- ⚠️ Database Connection Unsuccessful  ->\n_________________________________________\n');
        throw err;
    }
}