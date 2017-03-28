// JavaScript Document

var turnplate = {
    restaraunts: ["2倍", "4倍", "6倍", "8倍", "谢谢参与"],
    colors: ["#FF2211", "#87FCAB", "#BB2241", "#DAFA52", "#23FDBA"],
    outsideRadius: 222,			//大转盘外圆的半径
    textRadius: 165,				//大转盘奖品位置距离圆心的距离
    insideRadius: 65,			//大转盘内圆的半径
    startAngle: 0,				//开始角度
    bRotate: false				//false:停止;ture:旋转
};

$(document).ready(function () {
    var rotateTimeOut = function () {
        $('#wheelcanvas').rotate({
            angle: 0,
            animateTo: 2160,
            duration: 6000,
            callback: function () {
                alert('网络超时，请检查您的网络设置！');
            }
        });
    };
    $('#tupBtn').click(function () {
        if (turnplate.bRotate) return;
        turnplate.bRotate = !turnplate.bRotate;
        var item = rnd(1, turnplate.restaraunts.length),
            len = turnplate.restaraunts.length
            ;
        console.log('item => ' + item);

        var angles = (item - 0.5) * 360 / len;
        console.info(angles)
        if (angles < 270) {
            angles = 270 - angles;
        } else {
            angles = 360 - angles + 270;
        }
        var turntable = new Turntable.rotate(document.getElementById("wheelcanvas"), {
            angle: 0,
            animateTo: angles + 1800,
            duration: 6000,
            callback: function () {
                turnplate.bRotate = !turnplate.bRotate;
                alert("res");
            }
        })
        // turntable.stopRotate();
        // turntable.rotate();
    })

});

function rnd(n, m) {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;

}


window.onload = function () {
    drawRouletteWheel(document.getElementById("wheelcanvas"));
};

function drawRouletteWheel(canvas) {
    if (canvas.getContext) {
        var arc = Math.PI / (turnplate.restaraunts.length / 2);
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#FFBE04";
        ctx.font = 'bold 22px Microsoft YaHei';
        for (var i = 0; i < turnplate.restaraunts.length; i++) {
            var angle = turnplate.startAngle + i * arc;
            ctx.fillStyle = turnplate.colors[i];
            ctx.beginPath();
            ctx.arc(258, 258, turnplate.outsideRadius, angle, angle + arc, false);
            ctx.arc(258, 258, turnplate.insideRadius, angle + arc, angle, true);
            ctx.stroke();
            ctx.fill();
            ctx.save();
            ctx.fillStyle = "#CB0030";
            var text = turnplate.restaraunts[i];
            var line_height = 30;
            ctx.translate(258 + Math.cos(angle + arc / 2) * turnplate.textRadius, 258 + Math.sin(angle + arc / 2) * turnplate.textRadius);
            ctx.rotate(angle + arc / 2 + Math.PI / 2);
            if (text.indexOf("\n") > 0) {//换行
                var texts = text.split("\n");
                for (var j = 0; j < texts.length; j++) {
                    ctx.font = j == 0 ? 'bold 22px Microsoft YaHei' : 'bold 22px Microsoft YaHei';
                    if (j == 0) {
                        ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
                    } else {
                        ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
                    }
                }
            } else if (text.indexOf("\n") == -1 && text.length > 6) {
                text = text.substring(0, 6) + "||" + text.substring(6);
                var texts = text.split("||");
                for (var j = 0; j < texts.length; j++) {
                    ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
                }
            } else {
                ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
            }
            ctx.restore();
        }
    }
}
