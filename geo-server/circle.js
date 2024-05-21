class Circle {
    static area(radius) {
        if (radius <= 0) {
            throw new Error('Radius must be positive');
        }
        return Math.PI * radius * radius;
    }
}

module.exports = Circle;