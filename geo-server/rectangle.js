class Rectangle {
    static area(length, width) {
        if (length <= 0 || width <= 0) {
            throw new Error('Length and width must be positive');
        }
        return length * width;
    }
}

module.exports = Rectangle;
