const Artist = {};
const Painter = {};

Object.setPrototypeOf(Painter, Artist);

Artist.speak = function () {
    console.log("I am an artist");
}
Painter.paint = function () {
    document.body.style.background = rColor;
    rcolor = function getRandomHexColor() {
        // Generate random values for RGB
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
      
        const hexR = r.toString(16).padStart(2, '0');
        const hexG = g.toString(16).padStart(2, '0');
        const hexB = b.toString(16).padStart(2, '0');
      
        // Combine them into a full hex color code
        return `#${hexR}${hexG}${hexB}`;
    }
}