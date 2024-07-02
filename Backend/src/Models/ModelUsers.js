import db from "../Config/Database.js";

export const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return db.execute(SQLQuery);
};

export const getUsersById = async (id) => {
  try {
    const SQLQuery = "SELECT * FROM users WHERE id = ?";
    const [users] = await dbPool.execute(SQLQuery, [id]);
    return users;
  } catch (error) {
    console.error("Error pada proses getUsersById:", error);
    throw error;
  }
};

export const addUsers = (body) => {
  const {} = body;
  const SQLQuery = ``;
};
