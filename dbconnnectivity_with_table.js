const {Client,Pool} = require('pg')
const pool= new Pool({
user:'postgres',
host:'localhost',
database:'bca',
password:'12345',
port:9000
})
 pool.connect()
const results= pool.query('SELECT * from person' );
console.table(results.rows);
pool.end();
