const mySql = require('mysql2')

/**
 * Initialise MySQL database
 * @returns {mySql.Connection}
 */
function connectDB() {
    const connection = mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password'
    })

    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to database')
    });
}

module.exports = {
    connectDB,
}