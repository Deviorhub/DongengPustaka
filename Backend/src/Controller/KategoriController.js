import { 
    getAllKategoris as modelGetAllKategoris,
    getKategorisById as modelGetKategorisId,
    // addUsers
} from "../Models/ModelKategori.js";

export const getAllKategorisController = async(req, res) => {
    try {
        const data = await modelGetAllKategoris();
        res.json({
            message: 'GET semua kategoris berhasil!',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const getKategorisById = async(req, res) => {
    const {id} = req.params
    try {
        const data = await modelGetKategorisId(id);
        res.json({
            message: 'GET kategoris berhasil!',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}