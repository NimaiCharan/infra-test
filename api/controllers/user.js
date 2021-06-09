const mongoose =  require('mongoose')
const {user_data, user_security} = require('../schema/user');
const bcrypt = require('bcrypt');


exports.add_user_data = (req, res)=>{
    const data= req.body;
    const user = mongoose.model("user_data", user_data);
    const user_sec = mongoose.model("user_sec", user_security);
    //const user = mongoose.model("UserData", UserData);
    
    var user_dt = new user({
        "First_name": data.first_name,
        "Last_name": data.last_name,
        "email": data.email,
        "Mobile_number": data.email,

    });
    user_dt.save({}, async (err, doc) => {
        if (err) throw err;
        console.log(doc);
        var salt = await bcrypt.genSalt(10);
        var hashedPassword = await bcrypt.hash(data.password, salt);
        var user_sc = new user_sec({
            "User_id": doc._id,
            "Password": hashedPassword,
            "Password_hint": data.password_hint,
            "Hint_ans": data.hint_ans,
    
        })
        user_sc.save({}, (err, doc) => {
            if (err) throw err;
            //console.log(doc);
            res.status(200).send(user_dt);
    
        });
    
    });
    
}


