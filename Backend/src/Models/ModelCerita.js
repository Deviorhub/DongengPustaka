import db from "../Config/Database.js";

export const getAllCeritas = async() => {
    try {
        const SQLQuery = 'SELECT * FROM ceritas';
        const [rows] = await db.execute(SQLQuery);
        return rows;
    } catch (error) {
        console.error('Error pada proses getAllCeritas:', error);
        throw error;
    }
}

export const getCeritasById = async(id) => {
    try {
        const SQLQuery = 'SELECT * FROM ceritas WHERE id = ?';
        const [rows] = await db.execute(SQLQuery, [id]);
        return rows;
    } catch (error) {
        console.error('Error pada proses getCeritasUsers:', error);
        throw error;
    }
}