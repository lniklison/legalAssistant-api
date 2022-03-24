import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    password: 'admin'
};

async function query(sql) {
    const connection = await mysql.createConnection(config);
    const [results, ] = await connection.execute(sql);
  
    return results;
}

function isEmpty(rows) {
    if (!rows) {
      return [];
    }
    return rows;
  }

export default {
    query,
    isEmpty
}