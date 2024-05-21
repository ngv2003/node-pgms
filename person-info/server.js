
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3001;


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/submit', (req, res) => {
    const name = req.body.name;
    const age = parseInt(req.body.age, 10);
    const eligible = age >= 18 ? 'eligible to vote' : 'not eligible to vote';

    res.send(`
        <h1>Person Information</h1>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>This person is ${eligible}.</p>
        <a href="/">Go back</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
