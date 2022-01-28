var canvas = document.getElementById("myCanvas");
canvas.width = 3000
canvas.height = 3000
var ctx = canvas.getContext("2d");

//drawLinesRandom(0, 1000);
//drawJointedLines(0, 0, 0, 100)

canvas.addEventListener('click', function(e){
    run();
});
//setInterval(() => {canvas.click()}, 100); //10ms = crazy 

const HSLToRGB = (h, s, l) => {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return 'rgb('+[255 * f(0) + ',' + 255 * f(8) +',' + 255 * f(4)] + ')';
};

function drawLinesRandom (index=0, lines=10) {
    canvas.style.background = HSLToRGB(Math.floor(Math.random() * 360),  70, 50);
    if(index == 0) ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(index >= lines) {
        return;
    }
    else {
        ctx.beginPath();

        //random path
        var random1 = Math.floor(Math.random() * canvas.width);
        var random2 = Math.floor(Math.random() * canvas.height);
        var random3 = Math.floor(Math.random() * canvas.width);
        var random4 = Math.floor(Math.random() * canvas.height);
        ctx.moveTo(random1, random2);
        ctx.lineTo(random3, random4);
    
        //random line width
        var randomLineWidth = Math.floor(Math.random() * 10)
        ctx.lineWidth = randomLineWidth;
        
        //random line color
        var randomColor = HSLToRGB(Math.floor(Math.random() * 360),  70, 50);
        ctx.strokeStyle = randomColor;
        
        ctx.stroke();
        return drawLinesRandom(index+1, lines)
    }
    
}

function drawJointedLines (x, y, index=0, lines=10) {
    //canvas.style.background = HSLToRGB(Math.floor(Math.random() * 360),  70, 50);
    if(index == 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if(index >= lines) {
        return;
    }
    else {
        ctx.beginPath();

        //random path
        var random3 = (100 + Math.floor(Math.random() * canvas.width));
        var random4 = (100 + Math.floor(Math.random() * canvas.height));
        ctx.moveTo(x, y);
        ctx.lineTo(random3, random4);
        ctx.lineCap = 'round';
    
        //random line width
        var randomLineWidth = Math.floor(Math.random() * 100)
        ctx.lineWidth = randomLineWidth;
        
        
        //random line color
        var randomColor = HSLToRGB(Math.floor(Math.random() * 360),  70, 50);
        ctx.strokeStyle = randomColor;
        
        ctx.stroke();
        return drawJointedLines(random3, random4, index+1, lines)
    }

}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}


function run() {
    //drawLinesRandom(0, 1000)
    //drawJointedLines(100, 100, 0, 50);
    drawCircle();
}