function makebubble() {
    var clutter = "";

    for (var i = 1; i <= 140; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}
var timer = 30;
var increseScore = 0;
var hitval;
function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML = `<div><h1>Game Over</h1>
        <div><h1>Your Score Was=${increseScore}</h1></div></div>`;

        }

    }, 1000);
}
function hit() {
    hitval = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitval;
}
function score() {
    increseScore += 10;
    document.querySelector("#scoreval").textContent = increseScore;
}
document.querySelector(".pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitval) {
        score();
        makebubble();
        hit();
    }
})

hit();
runtimer();
makebubble();
