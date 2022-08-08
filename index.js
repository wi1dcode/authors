const express = require('express')
const app = express()
const port = 5000
const authors = require('./routes/authors')

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get('/', (req, res) => {
    res.send('Authors API')
  })

app.use('/authors', authors)
