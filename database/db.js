const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'rosa2020'
});

connection.connect((error)=>{
    if(error){
        console.log('DATABASE CONNECTION ERROR');
    }else{
        console.log('Connected successfully');
    }
});


module.exports = connection;