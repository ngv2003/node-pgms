class Triangle {
    static area(base, height) {
        if (base <= 0 || height <= 0) {
            throw new Error('Base and height must be positive');
        }
        return 0.5 * base * height;
    }
}

module.exports = Triangle;