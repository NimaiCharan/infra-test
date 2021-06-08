const express = require('express');
var db = require('../db');
var mongoose = require('mongoose');

//DB Schemas
var {homePageBrandSchema} = require('../schema/home');
const home_brand = mongoose.model("home_brand", homePageBrandSchema);

exports.retHomeBrand =(req, res)=>{
    home_brand.find({},(err, doc)=>{
        if (err) throw err;
        //for(var i = 0; i<5; i++)
        var data = [];
        for(var i = 0; i<5; i++){
            data[i]=doc[i];
        }
        data=JSON.stringify(data);
        data = JSON.parse(data);
        res.status(200).send(data);
    })
   //res.send("hello");
}

exports.addHomeBrand = (req, res)=>{
    
    const home_brand_data = new home_brand({
        "brand_code": "CEM256",
        "brand_name": "JP CEMENTS",
        "brand_img" : "URL HERE",
        "modified_by": "Nimai",
        "brand_category": "CEMENT"
    
    });
    home_brand_data.save({},(err, doc)=>{
        if(err) throw err;
        res.send(doc)
    })
};