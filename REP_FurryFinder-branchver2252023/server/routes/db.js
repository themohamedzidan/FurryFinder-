const sql = require('mssql');            // Connect to SQL.
var   con  = sql.createConnection({
    host: 'srvsqlfurryfinder.database.windows.net',
    user: "dba",
    password: "Aa123456!"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  
// const config = {
//     user: 'dba', // better stored in an app setting such as process.env.DB_USER
//     password: 'Aa123456!', // better stored in an app setting such as process.env.DB_PASSWORD
//     server: 'srvsqlfurryfinder.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
//     port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
//     database: 'DB_Main', // better stored in an app setting such as process.env.DB_NAME
//     authentication: {
//         type: 'default'
//     },
//     options: {
//         encrypt: true
//     }
// }

// console.log("Starting...");
// connectAndQuery();



//module.exports = db;