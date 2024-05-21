// server.js

const http = require('http');
const url = require('url');
const Circle = require('./circle');
const Rectangle = require('./rectangle');
const Triangle = require('./triangle');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const shape = queryObject.shape;

    let area;
    try {
        switch (shape) {
            case 'circle':
                const radius = parseFloat(queryObject.radius);
                area = Circle.area(radius);
                break;
            case 'rectangle':
                const length = parseFloat(queryObject.length);
                const width = parseFloat(queryObject.width);
                area = Rectangle.area(length, width);
                break;
            case 'triangle':
                const base = parseFloat(queryObject.base);
                const height = parseFloat(queryObject.height);
                area = Triangle.area(base, height);
                break;
            default:
                throw new Error('Invalid shape');
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ shape, area }));
    } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
