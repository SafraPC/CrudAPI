const connection = require('./database');
const express = require('express');
const router = require('./routes');
const path = require('path');
const app = express();

(async()=>{
app.use(express.json());
app.use(express.urlencoded({extended:false}));

await connection();
app.use(express.json());
app.use(router);
app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')));
app.listen(8080,()=>{
    console.log('Server is Running')
});
})()
