const dbPool = require('../Config/Database')

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users'
    return dbPool.execute(SQLQuery)
}

const getUsersById = async (id) => {
    try{
        const SQLQuery = 'SELECT * FROM users WHERE id = ?'
        const [ users ] = await dbPool.execute(SQLQuery, [id])
        return users
    } catch(error) {
        console.error('Error pada proses getUsersById:', error)
        throw error
    }
}

const addUsers = (body) => {
    const {} = body
    const SQLQuery = ``
}

module.exports = {
    getAllUsers,
    getUsersById
}