const express = require('express')
const app = express()

/*app.get('/', (req, res) => {
  res.send('Hello world!')
})
*/

app.get('/api/recipe', (req, res) => {
    res.status(200)
    res.send('List of recipes requested')
  })

app.get('/api/recipe/:name', (req, res) => {
res.status(200)
let name = req.params.name
res.send('Instructions for ${name} requested')
})

app.post("/api/rating", (req, res) =>{
    res.status(200)
    let rating = req.body.rating
    let id = req.body.id
    res.send(`Rating of ${rating} for recipe ${id}`)
  })

app.use(express.static(__dirname + "/../public"))

app.use('/files', express.static('public'))

app.listen(5000)