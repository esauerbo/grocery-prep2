const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Recipe = require('./models/recipe-schema');


mongoose.connect("mongodb+srv://dbUser:dbUserPassword@cluster0.cy6ha.mongodb.net/bootcamp?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => console.log('Connected to MongoDB'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + "/../public"))

app.use('/files', express.static('public'))

app.get('/api/recipe', async (req, res) => {
    console.log('recipes page')
    res.status(200)
    let recipes = await Recipe.find();
    res.json(recipes);
  })

app.get('/api/recipe/:name', async (req, res) => {
  res.status(200)
  let name = req.params.name;
  let recipe = await Recipe.find({
    "_id" : name
  }); 
  res.json(recipe);
})

app.post("/api/rating", async (req, res) =>{
    res.status(200)
    let rating = req.body.rating
    let id = req.body.id
    const response = await Recipe.update(
      {"title": id},
      {$push: {ratings: rating}},
  );
    res.send(`Rating of '+ ${rating} for recipe ${id}`)
  })



app.listen(3004, function(){
  console.log("Started on port 3004")
})