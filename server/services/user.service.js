const pool = require("../db.js");

const getUser = async (email, pass) => {
  try {
    const [row] = await pool.query(`
  SELECT * FROM users WHERE email = '${email}' AND password = '${pass}' `);
    if (row) {
      return row[0];
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
    return;
  }
};

module.exports = { getUser };
