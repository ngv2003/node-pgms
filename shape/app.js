// app.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    fs.readFile(indexPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading index.html:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(data);
    });
});

app.post('/calculate', (req, res) => {
    const { shape, radius, side, base, height } = req.body;

    let area;
    switch (shape) {
        case 'circle':
            area = Math.PI * Math.pow(Number(radius), 2);
            break;
        case 'square':
            area = Math.pow(Number(side), 2);
            break;
        case 'triangle':
            area = 0.5 * Number(base) * Number(height);
            break;
        default:
            area = 'Invalid shape';
            break;
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calculation Result</title>
        </head>
        <body>
            <h1>Result</h1>
            <p>The area of the ${shape} is ${area}</p>
            <a href="/">Calculate another area</a>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
