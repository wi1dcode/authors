const express = require('express')
const app = express()

var authors = [
    {
        id: 1,
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        id: 2,
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        id: 3,
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        id: 4,
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get('/:id', (req, res) => {
    
    const author = authors[req.params.id - 1]
    if (author) {
    res.send(`${author.name}, ${author.nationality}`)   
    } else {
        res.status(404).send('Not Found')
}
})

app.get('/:id/books', (req, res) => {
    
    const author = authors[req.params.id - 1]
    if (author) {
        res.send(author.books.join(' , '))   
    } else {
        res.status(404).send('Not Found')
    }
})

app.get('/json/:id', (req, res) => {
    
    const author = authors[req.params.id - 1]
    
    if (author) {
        const formattedAuthor = {
            name: author.name,
            nationality: author.nationality
        }
        
        res.send(formattedAuthor)  
    } else {
        res.status(404).send('Not Found')
    }

})
app.get('/json/:id/books', (req, res) => {
    
    const author = authors[req.params.id - 1]
    
    if (author) {
        const formattedAuthor = {
            books: author.books
        }
        
        res.send(formattedAuthor)  
    } else {
        res.status(404).send('Not Found')
    }

})


module.exports = app
