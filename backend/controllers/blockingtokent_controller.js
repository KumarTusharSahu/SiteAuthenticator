const User = require("../models/user");
const Crypto = require("crypto");



module.exports.starttoken=function(req,res){
    return res.json(req.user)
}
module.exports.token =  function (req, res) {
    console.log(req.body.site)
    const user = req.user;
   const Prevwebiste = req.user.website;
   console.log(Prevwebiste)
  const webiste = {
    id: Crypto.randomBytes(21).toString("base64").slice(0, 21),
    site: req.body.site,
    createdAt: Math.floor(Date.now() / 1000),
  };
  Prevwebiste.push(webiste);
 console.log("success");
 user.website = Prevwebiste;
  user.save();
  return res.redirect("http://localhost:3000/users/token");
};
