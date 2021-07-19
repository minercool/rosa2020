const mysql = require('mysql');
const connection = mysql.createConnection({
    host : process.env.host,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
});

connection.connect((error)=>{
    if(error){
        console.log('DATABASE CONNECTION ERROR');
    }else{
        console.log('Connected successfully');
    }
});


module.exports = connection;