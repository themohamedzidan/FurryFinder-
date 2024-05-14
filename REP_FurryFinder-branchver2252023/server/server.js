// App conf for server connection.
const express = require('express');        // Conncet to express.
const path    = require('path');
const server  = express();                 // Create resource.
const port    = process.env.PORT || 9000;  // Set port.
const sql     = require('mssql');          // THe type of sql.
const cors    = require('cors');
server.use(cors());
server.use(express.json());

// Serve static files from the React app.
server.use(express.static('..\\client\\build'))

// SQL connection 

const config = {
    user:     'dba',
    password: 'Aa123456!',
    server:   'srvsqlfurryfinder.database.windows.net',
    database: 'DB_Root',
    options: {
      encrypt: true // If you're using Azure
    }
};

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
server.get('*',(req,res)=>{
  res.sendFile('index.html', { root: path.join(__dirname, '..\\client\\build') })
})

sql.connect(config, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to SQL Server!');
  }
  server.listen(port,()=>{
    console.log(`server work on ${port}`)
  });
  //const value ="amittal@gmail.com";
  // sql.query(`select * from dbo.users_table where user_email = '${value}'`, (err, res) => {
  //   console.log(res);
  // })
});

/////////////////////// END OF CONFIG //////////////////////////////

///////////////////////   START CODE   ///////////////////////////////
// Signup
server.post('/signup',(req,res)=>{
  sql.query(`INSERT INTO [dbo].[users_table]
             ([user_email],[user_name],[user_type],[user_phone],[user_password])
             VALUES ('${req.body.email}','${req.body.name}','1','${req.body.phone}','${req.body.password}')`, (err,data) => {
    if(err){
      console.log(err);
      return res.json("Error - Problem with inserting user data");
    }
    return res.json("Success"); // Send response.
  })
})

// ResetPass
server.post('/resetpass',(req,res)=> {
  sql.query(`SELECT user_email FROM dbo.users_table WHERE user_email='${req.body.email}'`, (err) => {
    if(err){
     // console.log(err);
      return res.json("Error - Problem with getting the user.");
    }
    
    sql.query(`UPDATE dbo.users_table 
               SET user_password='${req.body.newpass}'
               WHERE user_email='${req.body.email}' AND user_password= '${req.body.oldpass}'`,
               (err,data) => {
                if(err){
                  console.log(err);
                  return res.json("Error - Password filed with update.");
                }
                return res.json("Success"); // Send response.
    })
  }) 
})
