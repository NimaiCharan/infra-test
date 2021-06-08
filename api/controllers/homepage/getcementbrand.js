var express = require('express');
const { mongoose } = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();

const mongoURL= "mongodb+srv://testUser:Test123@testdata.eamfv.mongodb.net";
router.get('/',async(req, res)=>{
    
    MongoClient.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true},(err,db)=>{
        if (err) throw err;
        var response;
        var database = db.db('infra-test')
        database.collection('brand').find({},(err, result)=>{
            if (err) throw err;
            result.each((err, doc)=>{
                if (err) throw err;
                var response = {
                    statusCode: 200,
                    headers:  { 'Content-Type': 'application/json' },
                    body:    JSON.parse(JSON.stringify(doc))
                  }
                response.push(response)
              
            })
        });
        res.send(response);
    });
    
});

module.exports = router;