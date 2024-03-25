const express = require('express')
// var MongoClient = require('mongodb').MongoClient; 
// const mongoose = require("mongoose");
const dbConnect = require("./config/database");
const cors = require("cors")
const bodyParser = require("body-parser")
const UserData = require("./model/userData")

const app = express();
dbConnect();

app.use(cors());
app.use(bodyParser.text());

const port = 3000; 

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post('/UserData' ,async(req, res)=>{
    try {
        const parseData = JSON.parse(req.body);
        console.log(req.body)
        console.log(parseData)
        const Username = parseData.Username
        const Password = parseData.Password
        const data =  new UserData({
            Username: Username,
            Password: Password
        })
        data.save();
        res.send("Data Successfuly inserted...") 
        // res.send("Data not inserted Successfuly...")
        } catch(err) {
            console.log(err)
        }
    });


/*
    const client =  new MongoClient("mongodb+srv://deepanshushukla9585:3zqQGp9g9XmkMYAS@cluster0.30m4y4d.mongodb.net/");

    app.post('/UserData' ,async(req, res)=>{
        try {
            const parseData = JSON.parse(req.body);
            // console.log(req.body)
            console.log(parseData)
            const Username = parseData.Username
            const Password = parseData.Password
            const database = client.db("tempData");
            const collection = database.collection("userData");
            var obj = {Username: Username , Password: Password}
            const result = collection.insertOne(obj);
        } 
        catch(err) {
            console.log(err)
        }
    });
*/


app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})
