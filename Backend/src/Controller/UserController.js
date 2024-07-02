const userModel = require('../Models/ModelUsers')

const getAllUsers = async(req, res) => {
    try {
        const [data] = await userModel.getAllUsers()
        res.json({
            message: 'GET semua users berhasil!',
            data: data
        })
    } catch (error){
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers
}