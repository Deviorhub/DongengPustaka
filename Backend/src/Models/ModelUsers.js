import db from "../Config/Database.js";

export const getAllUsers = async() => {
    try {
        const SQLQuery = 'SELECT * FROM users';
        const [rows] = await db.execute(SQLQuery);
        return rows;
    } catch (error) {
        console.error('Error pada proses getAllUsers:', error);
        throw error;
    }
}

// Komentar ini tetap dikomentari jika Anda tidak menggunakannya
// export const getUsersById = async (id) => {
//     try {
//         const SQLQuery = 'SELECT * FROM users WHERE id = ?';
//         const [users] = await db.execute(SQLQuery, [id]);
//         return users;
//     } catch (error) {
//         console.error('Error pada proses getUsersById:', error);
//         throw error;
//     }
// }

// export const addUsers = (body) => {
//     const {} = body;
//     const SQLQuery = ``;
// }