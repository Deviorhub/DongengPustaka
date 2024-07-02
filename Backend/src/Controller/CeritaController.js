import { 
    getAllCeritas as modelGetAllCeritas,
    getCeritasById as modelGetCeritasId,
    // addUsers
} from "../Models/ModelCerita.js";

export const getAllCeritasController = async(req, res) => {
    try {
        const data = await modelGetAllCeritas();
        res.json({
            message: 'GET semua ceritas berhasil!',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const getCeritaById = async(req, res) => {
    const {id} = req.params
    try {
        const data = await modelGetCeritasId(id);
        if(data.length > 0){
            res.json({
                message : `GET cerita dengan ID:${id} berhasil!`,
                data: data
            });
        } else {
            res.status(404).json({
                message : `Cerita dengan ID:${id} tidak ditemukan.`
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}