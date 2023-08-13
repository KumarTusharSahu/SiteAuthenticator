const express = require('express');
const app = express();
const port = 8000;
app.use(express.urlencoded());
app.get('/sign',function(res,req){
    res.render("hello")
})

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
