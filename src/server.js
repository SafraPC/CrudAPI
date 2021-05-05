const connection = require('./database');
const express = require('express');
const router = require('./routes');
const app = express();

(async()=>{
app.use(express.json());
app.use(express.urlencoded({extended:false}));

await connection();
app.use(router)
app.listen(8080,()=>{
    console.log('Server is Running')
});
})()
