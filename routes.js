const user = require('../userCrud/modules/User/Routes/userRoute')
module.exports = [
    {
        path: '/user',
        handler: user,
        schema: 'User'
    }

]