const User = require("../models/user");
const Crypto = require("crypto");
const fs = require("fs");
module.exports.starttoken = function (req, res) {
  return res.json(req.user);
};
module.exports.token = function (req, res) {
  const user = req.user;
  //   if(!req.user.webiste){
  //     const webiste = {
  //         id: Crypto.randomBytes(21).toString("base64").slice(0, 21),
  //         site: req.body.site,
  //         createdAt: Math.floor(Date.now() / 1000),
  //       };
  //   }
  const Prevwebiste = req.user.website ? req.user.website : [];
  console.log(Prevwebiste);
  const webiste = {
    id: Crypto.randomBytes(21).toString("base64").slice(0, 21),
    site: req.body.site,
    createdAt: Math.floor(Date.now() / 1000),
    status: false,
  };
  Prevwebiste.push(webiste);
  console.log("success");
  user.website = Prevwebiste;
  user.save();
  return res.redirect("http://localhost:3000/users/token");
};

module.exports.blocker = async function (req, res) {
  console.log(req.params.id);

  // const user=await User.findById(req.user._id);
  const user = await User.findById(req.user._id);
  const website = user.website;

  const result = website.find(({ id }) => id === req.params.id);
  await User.updateOne(
    {
      _id: req.user._id,
    },
    {
      $set: { "website.$[elem].status": true },
    },
    {
      arrayFilters: [{ "elem.id": req.params.id }],
    }
  );
  // Make a variable to store path of hosts file
  //const filePath =  "/etc/hosts";
  // Note* If you are a windows user, your file path should be C:\Windows\System32\drivers\etc\hosts
  /**
   * File path: C:\Windows\System32\drivers\etc\hosts
   * Backslash needs to be escaped before execurting*/
  const filePath = "C:\\Windows\\System32\\drivers\\etc\\hosts";

  // Store the redirection path in a variable
  // The websites in the block list will be directed to localhost (127.0.0.1)
  const redirectPath = "127.0.0.1";

  // List of websities to be blocked
  // let websites = ["https://www.business.org/","https://www.oneplus.in/","www.oneplus.in","https://www.xnxx.press/","xnxx.press","www.youtube.com","https://www.youtube.com/","www.business.org","business.org","https://www.facebook.com/","www.facebook.com"];

  // Set delay (Time interval after which our script should execute)
  let delay = 10000; // 10 seconds
  // Make a new object of Date
  let date = new Date();
  // Compare whether the current time is free time or block time
  let hours = date.getHours();
  // Blocking our website from 2pm to 6pm
  if (hours >= 0 && hours < 23) {
    console.log("Time to block websites");
    fs.readFile(filePath, (err, data) => {
      // Throw error in case something went wrong!
      if (err) {
        return console.log(err);
      }

      // Convert the fetched data to string
      fileContents = data.toString();

      /**
       * Check whether each website in the list exist in the list,
       * If it exists, ignore,
       * else, write the websites and redirect address in the file
       */
      for (let i = 0; i < website.length; i++) {
        let addWebsite = "\n" + redirectPath + " " + result.site;
        if (fileContents.indexOf(addWebsite) < 0) {
          console.log("Website: " + addWebsite + " is not present");
          fs.appendFile(filePath, addWebsite, (err) => {
            if (err) {
              return console.log("Error: ", err);
            }
            console.log("File Updated Successfully");
          });
        } else {
          console.log("Website: " + addWebsite + " is present");
        }
      }
    });
  } else {
    console.log("Time to unblock websites");

    /**
     * Declare and empty string,
     * We will keep on appending the lines which do not contain our websites to this string
     * At the end, we will replace the file contents by this string
     */
    let completeContent = "";

    // Read  file line by line
    fs.readFileSync(filePath)
      .toString()
      .split("\n")
      .forEach((line) => {
        // console.log(line);
        let flag = 1;
        // Loop through each website from website list
        for (let i = 0; i < website.length; i++) {
          // Check whether the current line contains any blocked website
          if (line.indexOf(result.site) >= 0) {
            flag = 0;
            break;
          }
        }

        if (flag == 1) {
          if (line === "") completeContent += line;
          else completeContent += line + "\n";
        }
      });

    // Replace the contents of file by completeContent
    fs.writeFile(filePath, completeContent, (err) => {
      if (err) {
        return console.log("Error!", err);
      }
    });
  }
  return res.send({ status: true, message: "blocked site" });
};

module.exports.unblock = async function (req, res) {
  console.log("Time to unblock websites");

  const user = await User.findById(req.user._id);
  const website = user.website;
  const result = website.find(({ id }) => id === req.params.id);
  await User.updateOne(
    {
      _id: req.user._id,
    },
    {
      $set: { "website.$[elem].status": false },
    },
    {
      arrayFilters: [{ "elem.id": req.params.id }],
    }
  );
  const filePath = "C:\\Windows\\System32\\drivers\\etc\\hosts";
  let completeContent = "";

  // Read  file line by line
  fs.readFileSync(filePath)
    .toString()
    .split("\n")
    .forEach((line) => {
      // console.log(line);
      let flag = 1;
      // Loop through each website from website list
      for (let i = 0; i < website.length; i++) {
        // Check whether the current line contains any blocked website
        if (line.indexOf(result.site) >= 0) {
          flag = 0;
          break;
        }
      }

      if (flag == 1) {
        if (line === "") completeContent += line;
        else completeContent += line + "\n";
      }
    });

  // Replace the contents of file by completeContent
  fs.writeFile(filePath, completeContent, (err) => {
    if (err) {
      return console.log("Error!", err);
    }
  });
  return res.redirect("http://localhost:3000/users/token");
};

module.exports.removeall = async function (req, res) {
  const user = await User.findById(req.user._id);
  const websites = user.website;
  const filePath = "C:\\Windows\\System32\\drivers\\etc\\hosts";
  let completeContent = "";

  // Read  file line by line
  fs.readFileSync(filePath)
    .toString()
    .split("\n")
    .forEach((line) => {
      // console.log(line);
      let flag = 1;
      // Loop through each website from website list
      for (let i = 0; i < websites.length; i++) {
        // Check whether the current line contains any blocked website
        if (line.indexOf(websites[i].site) >= 0) {
          flag = 0;
          break;
        }
      }

      if (flag == 1) {
        if (line === "") completeContent += line;
        else completeContent += line + "\n";
      }
    });

  // Replace the contents of file by completeContent
  fs.writeFile(filePath, completeContent, (err) => {
    if (err) {
      return console.log("Error!", err);
    }
  });
  user.website = [];
  await user.save();
  return res.redirect("http://localhost:3000/users/token");
};
