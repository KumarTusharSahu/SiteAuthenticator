const User = require("../models/user");

module.exports.authentication = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("home");
  }

  return res.render("authentication", {
    title: "fluneteng",
  });
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
          return;
        }
        return res.redirect("/");
      }
    );
  } else {
    console.log("you have signed up");

    return res.redirect("http://localhost:3000/");
  }
};

module.exports.createSession = function (req, res) {
  return res.redirect("/home");
};

module.exports.destroySession = function (req, res) {
  req.logout();

  return res.redirect("/");
};
