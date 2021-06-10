const crypto = require("crypto")


function generatepass(password){
    var salt = crypto.randomBytes(32).toString("hex");
    var genHash = crypto.pbkdf2Sync(password, salt,10000,64,"sha512").toString("hex");

    return{
        salt:salt,
        hash:genHash
    }

}



function validatepass(password, salt, hash){
    var hashVerify = crypto.pbkdf2Sync(password, salt,10000,64,"sha512").toString("hex");

    return hash === hashVerify;


}

module.exports = {generatepass,validatepass}