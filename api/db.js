var mongoose = require('mongoose');
const mongoURL= "mongodb+srv://testUser:Test123@testdata.eamfv.mongodb.net";
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})