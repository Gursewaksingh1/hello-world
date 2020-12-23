const express = require('express');
const app = express();           //object creating of express

const {Pool} = require('pg');    //dbconectivity  begins
const pool =new Pool({
user: 'postgres',
host: 'localhost',
database: 'bca',
password: '12345',
dialect: 'postgres',
port: 9000
});
pool.connect()
console.log('connecd');   //after asign all values required db connected


app.get('/persondata',(req,res,next)=> {
    console.log("person DATA :");
    //pool.query("insert into person values($1,$2,$3,$4,$5)",[ 15,'honey','gali','2000-07-18','hg@gmail.com'])
    pool.query('SELECT * from person') //slected person all data which is a table name by using app.get function 
    .then(persondata => {
        console.log(persondata);
        res.send(persondata.rows); //sending response in rows
        })
    })


/* the following function was created to insert a new record,
 but in app.get we can also insert new record

const createUser = (req,res)=> {
    const {firts_name,email} = request.body
    pool.query("insert into person values($1,$2,$3,$4,$5)",[ 14,'honey','gali','2000-07-18','hg@gmail.com'])
}*/



//at last we use listen function with port number 9005 to view our code at browser
const server = app.listen(9005, function () {
    let host = server.address().address
    let port = server.address().port
})