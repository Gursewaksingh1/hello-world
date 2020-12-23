
//almost do the work but its is complex to understand specially bodyparser part,
//thats why i did some expriement by removing bodyparser and i still work as it meant to be


const express = require('express');
const app = express();
const {Pool} = require('pg');
const pool =new Pool({
user: 'postgres',
host: 'localhost',
database: 'bca',
password: '12345',
dialect: 'postgres',
port: 9000
});

const bodyParser= require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));

pool.connect((err,client,release)=> {
    if(err) {
        return console.error(
            'Error acquiring client', err.stack)
        
    }
    client.query('SELECT NOW()',(err,results)=> { 
        release()
        if (err) {
            return console.error(
                'Errorexecuting query',err.stack)
            
        }
        console.log("connected to database!")
    })
})

app.get('/persondata',(req,res,next)=> {
    console.log("person DATA :");
    pool.query('Select first_name from person where id=$1',[1])
    .then(persondata => {
        console.log(persondata);
        res.send(persondata.rows);
        })
})

const server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
})