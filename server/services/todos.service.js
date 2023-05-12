const pool = require("../db.js");

const createTodo = async (user_id, fecha, descripcion, complete) => {
  const [result] = await pool.query(
    ` INSERT INTO todos (fecha, descripcion, completed, user_id) 
          VALUES 
          ('${fecha}','${descripcion}',${complete},${user_id})`
  );
  if (result.insertId) {
    return true;
  } else {
    return false;
  }
};

const deleteTodo = async (id) => {
  const [result] = await pool.query(
    `
          DELETE FROM todos WHERE id = ${id};
          `
  );
  if (result.affectedRows) {
    console.log(result);
    return result;
  }
};

const todoCompleted = async (id, value) => {
  const newValue = value === true ? "TRUE" : "FALSE";
  const [result] = await pool.query(
    `
        UPDATE todos
        SET completed = ${newValue} 
        WHERE id = ${id};
        `
  );
  if (result.affectedRows) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
const getTodoByID = async (id) => {
  const [row] = await pool.query(`
      SELECT * FROM todos WHERE user_id = ${id}`);
  return row;
};

module.exports = {
  createTodo,
  deleteTodo,
  todoCompleted,
  getTodoByID,
};
