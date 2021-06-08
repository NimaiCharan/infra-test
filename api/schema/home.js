var mongoose = require('mongoose')

const homePageBrandSchema = new mongoose.Schema({
    "brand_code": {
        type: String,
        requied: true
    },
    "brand_name": {
        type: String,
        requied: true
    },
    "brand_img" : {
        type: String,
        requied: true
    },
    "created_at": {
         type: Date, 
         default: Date.now },
    "modified_at": { 
        type: Date, 
        default: Date.now },
    "modicationScript": {
        type: String,
        default: "DBA"
    },
    "modified_by": String,
    "brand_category":{
        type: String,
        requied: true
    }
});
module.exports = mongoose.model('home_brand',homePageBrandSchema)
