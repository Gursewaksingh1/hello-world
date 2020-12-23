const {Pool, Client} = require('pg')
const connectionString ='postgressql://postgres:12345@localhost:9000/bca'
const client = new Client({
    connectionString:connectionString,
})
 client.connect()
.then(() => console.log('connected we are'))
.catch(e => console.log)
client.query("insert into person values($1,$2,$3,$4,$5)",[ 11,'kuri','besii','1998-01-28','kude@gmail.com']);
client.query('SELECT first_name from person', (err,res)=>{
    console.log(err,res)
    client.end()
})
