<<<<<<< HEAD
import {
  getAllUsers as modelGetAllUsers,
  // getUsersById,
  // addUsers
} from "../Models/ModelUsers.js";

export const getAllUsersController = async (req, res) => {
  try {
    const data = await modelGetAllUsers();
    res.json({
      message: "GET semua users berhasil!",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
=======

import { 
    getAllUsers as modelGetAllUsers,
    getUsersById as modelGetUsersId,
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

export const getUsersById = async(req, res) => {
    const {id} = req.params
    try {
        const data = await modelGetUsersId(id);
        res.json({
            message: 'GET users berhasil!',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
>>>>>>> a20f0aba758cbe18709c24dd50d05645f5809a0d
