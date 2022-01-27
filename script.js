var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
// context.moveTo(0, 100);
// context.lineTo(100, 100)
// context.stroke();

function drawLine (xx=0, xy=0, yx=0, yy=0, index=0) {
    if(index == 0) context.clearRect(0, 0, canvas.width, canvas.height);
    if(index > 100) return;
    var random1 = Math.floor(Math.random() * 500);
    var random2 = Math.floor(Math.random() * 500);
    var random3 = Math.floor(Math.random() * 500);
    var random4 = Math.floor(Math.random() * 500);
    context.beginPath();
    context.moveTo(random1, random2);
    context.lineTo(random3, random4);
    context.lineWidth = 10;
    var randomColor = HSLToRGB(Math.floor(Math.random() * 360),  70, 50);
    context.strokeStyle = randomColor
    context.stroke();

    drawLine(xx+10, xy + 10, yx+ 10, yy + 10, index+1)
}

const HSLToRGB = (h, s, l) => {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return 'rgb('+[255 * f(0) + ',' + 255 * f(8) +',' + 255 * f(4)] + ')';
};

canvas.addEventListener('click', drawLine, false);

setInterval(() => {canvas.click()}, 1000); //10ms = crazy 