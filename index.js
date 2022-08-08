const express = require('express')
const app = express()
const port = 5000
const authors = require('./routes/authors')

app.get('/', (req, res) => {
    res.send('Authors API')
  })
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


app.use('/authors', authors)
