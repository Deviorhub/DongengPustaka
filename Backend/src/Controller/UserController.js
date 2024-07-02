import { 
    getAllUsers as modelGetAllUsers,
    // getUsersById,
    // addUsers
} from "../Models/ModelUsers.js";

export const getAllUsersController = async(req, res) => {
    try {
        const data = await modelGetAllUsers();
        res.json({
            message: 'GET semua users berhasil!',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}