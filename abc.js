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
pool.connect()
console.log('connecd');
app.get('/persondata',(req,res,next)=> {
    console.log("person DATA :");
    //pool.query("insert into person values($1,$2,$3,$4,$5)",[ 15,'honey','gali','2000-07-18','hg@gmail.com'])
    pool.query('SELECT * from person')
    .then(persondata => {
        console.log(persondata);
        res.send(persondata.rows);
        })
/*const createUser = (req,res)=> {
    const {firts_name,email} = request.body
    pool.query("insert into person values($1,$2,$3,$4,$5)",[ 14,'honey','gali','2000-07-18','hg@gmail.com'])
}*/
})
const server = app.listen(9005, function () {
    let host = server.address().address
    let port = server.address().port
})