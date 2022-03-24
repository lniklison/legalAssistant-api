const mysql = require('mysql2/promise');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'admin'
};

async function query(sql: String) {
    const connection = await mysql.createConnection(config);
    const [results, ] = await connection.execute(sql);
  
    return results;
}

function isEmpty(rows: any) {
    if (!rows) {
      return [];
    }
    return rows;
  }

module.exports = {
    query,
    isEmpty
}