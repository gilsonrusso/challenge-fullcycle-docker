const express = require('express');

const port = 3000;
const app = express();

const name = 'Wesley'

app.get('/', (request, response) => {
    response.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Full Cycle</title>
    </head>
    <body>
        <h1>Full Cycle</h1>
        <footer>${name}</footer>
    </body>
    </html>
    `)
})

app.listen(port, () => console.log(`Server is Running on Port: ${port}`));
