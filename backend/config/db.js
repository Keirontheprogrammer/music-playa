const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD ,   
    database: process.env.DB_NAME || 'musicdb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

(async () =>{
    try {
        const connect  = await db.getConnection();
        console.log("Database is connected successfully!!");
        connect.release();
    }
    catch(error){
        console.log("Database based failed to connect error: ", error.message);
        process.exit(1);
    }
})();

module.exports = db;
