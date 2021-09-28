const express = require('express');
const mongoose = require('mongoose');
const app=express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'))


app.listen(2345,async function(){
await connect();
console.log("2345");
});
