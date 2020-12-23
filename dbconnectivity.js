const { Pool, Client } = require('pg')
const connectionString = 'postgressql://postgres:12345@ocalhost:9000/bca'


const client = new Client({
    connectionString:connectionString,
})
 
client.connect()
.then(()=> console.log('working'))
.catch(e=> console.log('not'))
client.query('select *from person',(err,res)=>{
    console.log(err,res)
    client.end()
})
