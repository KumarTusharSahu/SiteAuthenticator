const User = require("../models/user");




module.exports.login=function (req,res){

}
module.exports.authentication = function (req, res) {

  if (req.isAuthenticated()){
    return  res.send("home")
}

  return res.send("login")
  
};

module.exports.create = async function (req, res) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    User.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
       
      },

      function (err, user) {
        if (err) {
          console.log("error in creating account", err);
          return res.status(500).send({status:false,message:"error in creating account"});
        }

        return res.redirect('/users/login')
      }
    );
  } else {
    console.log("you have signed up");

    return res.redirect("/users/login")
  }
};

module.exports.createSession =  function (req, res) {
  
  return res.redirect("http://localhost:3000/users/home");
};

module.exports.destroySession = function (req, res) {
  req.logout();
  res.send("success")
  
};
