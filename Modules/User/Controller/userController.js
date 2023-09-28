const User = require('../Model/userModel')

exports.createUser = async(req, res) => {
    try{
        let {email} = req.body
        let existingUser = await User.findOne({email})
        if(existingUser) {
            return res.status(401).send({statusCode:401, message:'Email Already Exist'})
        }
        let user = new User(req.body)
        const newUser = await user.save()
        if(newUser) {
            return res.status(200).send({statusCode:200, message:'Successfully Created User', result:newUser})
        } else
        return res.status(500).send({statusCode:500, message:'Something Went Wrong'})

    } catch(error) {
        return res.status(400).send({statusCode:400, message:'Invalid Input', error:error.message})
    }
}

exports.getUserById = async(req, res) => {
    try{
        let id = req.params.id
        let getUserById = await User.findById(id)
        if(getUserById) {
            return res.status(200).send({statusCode:200, message:'Successfully Got User', result:getUserById})
        } else 
        return res.status(404).send({statusCode:404, message:'User Not Found'})

    } catch(error) {
        return res.status(400).send({statusCode:400, message:'Invalid Input'})
    }
}

exports.getAllUser = async(req, res) => {
    try{
        let getAllUser = await User.find()
        if(getAllUser) {
            return res.status(200).send({statusCode:200, message:'Successfully Got All User', result:getAllUser})
        } else 
        return res.status(404).send({statusCode:404, message:'User Not Found'})

    } catch(error) {
        return res.status(400).send({statusCode:400, message:'Invalid Input'})
    }
}

exports.updateUser = async(req, res) => {
    try{
        let id = req.params.id
        let updateUser = await User.findByIdAndUpdate(id, req.body,{new: true})
        if(updateUser) {
            return res.status(200).send({statusCode:200, message:'Successfully Updated User', result:updateUser})
        } else 
        return res.status(404).send({statusCode:404, message:'User Not Found'})

    } catch(error) {
        return res.status(400).send({statusCode:400, message:'Invalid Input'})
    }
}

exports.deleteUser = async(req, res) => {
    try{
        let id = req.params.id
        let deleteUser = await User.findByIdAndDelete(id, {new: true})
        if(deleteUser) {
            return res.status(200).send({statusCode:200, message:'Successfully Deleted User', result:deleteUser})
        } else 
        return res.status(404).send({statusCode:404, message:'User Not Found'})

    } catch(error) {
        return res.status(400).send({statusCode:400, message:'Invalid Input'})
    }
}


