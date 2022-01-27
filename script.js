var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var context = canvas.getContext("2d");

function drawLinesRandom (index=0, lines=10) {
    if(index == 0) context.clearRect(0, 0, canvas.width, canvas.height);
    if(index >= lines) {
        return;
    }
    else {
        context.beginPath();

        //random path
        var random1 = Math.floor(Math.random() * canvas.width);
        var random2 = Math.floor(Math.random() * canvas.height);
        var random3 = Math.floor(Math.random() * canvas.width);
        var random4 = Math.floor(Math.random() * canvas.height);
        context.moveTo(random1, random2);
        context.lineTo(random3, random4);
    
        //random line width
        var randomLineWidth = Math.floor(Math.random() * 100)
        context.lineWidth = randomLineWidth;
        
        //random line color
        var randomColor = HSLToRGB(Math.floor(Math.random() * 360),  70, 50);
        context.strokeStyle = randomColor;
        
        context.stroke();
        return drawLinesRandom(index+1, lines)
    }
    
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

drawLinesRandom(0, 100);

canvas.addEventListener('click', function(e){
    drawLinesRandom(0, 100)
});
//setInterval(() => {canvas.click()}, 100); //10ms = crazy 