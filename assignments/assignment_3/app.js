const express = require('express');
const bodyparser = require("body-parser");
const faker = require('faker');
const app = express();

app.set('views','./views');
app.set('view engine', 'ejs');

app.use(bodyparser());
let users = []
for(var i = 0; i < 5; i++){
     users.push({
          name: faker.name.findName(),
          email: faker.internet.email()
     })
}

app.get("/" , (req,res) => {
     console.log(users);
     res.render('index.ejs',{users})
});
app.get("/form" , (req,res) => {
     res.render('form.ejs');
});

app.post("/user/add" , (req,res) => {
     users.push({
          name : req.body.name,
          email : req.body.email
     })
     res.redirect('/');
})

app.listen(3000,() => {
     console.log("listening..")
})