var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    shuzi = [
        [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        [
            [0],
            [0],
            [1],
            [0],
            [0],
            [0],
            [1],
            [0],
            [0],
        ]
    ],
    weizhi = [0, 150, 350, 400, 550, 750, 800, 950],
    oldmiao = '',
    oldshijian = [],
    balls = [],
    boomballs = []

//转化时分秒为两位数
function checkTime(p) {
    if (p < 10) {
        p = "0" + p
    }
    return p
}

//小球
function ball(k, i, j) {
    var ball = {
        x: 25 * (j + 1) + weizhi[k],
        y: 25 * (i + 1),
        g: 1.5 + Math.random(),
        vx: Math.pow(-1, Math.ceil(Math.random() * 2)) * 5,
        vy: -5 + Math.random(),
        color: 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')'
    }
    return ball
}

//更新时间
function updatetime() {
    shi = checkTime(new Date().getHours().toString()).split("")
    feng = checkTime(new Date().getMinutes().toString()).split("")
    miao = checkTime(new Date().getSeconds().toString()).split("")
    oldmiao = checkTime(new Date().getSeconds().toString())
    shijian = shi.concat('10').concat(feng).concat('10').concat(miao)
}

//添加balls数组
function addtime() {
    balls.length = 0
    for (var k = 0; k < shijian.length; k++) {
        for (var i = 0; i < shuzi[shijian[k]].length; i++) {
            for (var j = 0; j < shuzi[shijian[k]][i].length; j++) {
                if (shuzi[shijian[k]][i][j] === 1) {
                    var aBall = ball(k, i, j)
                    balls.push(aBall)
                }
            }
        }
    }
}

//添加boomballs数组
function addboomtime() {
    for (var k = 0; k < oldshijian.length; k++) {
        if (oldshijian[k] !== shijian[k]) {
            for (var i = 0; i < shuzi[oldshijian[k]].length; i++) {
                for (var j = 0; j < shuzi[oldshijian[k]][i].length; j++) {
                    if (shuzi[oldshijian[k]][i][j] === 1) {
                        var aboomball = ball(k, i, j)
                        boomballs.push(aboomball)
                    }
                }
            }
        }
    }
}

//绘制动态小球
function goboomballs() {
    for (var i = 0; i < boomballs.length; i++) {
        context.fillStyle = boomballs[i].color
        boomballs[i].x += boomballs[i].vx
        boomballs[i].y += boomballs[i].vy
        boomballs[i].vy += boomballs[i].g
        if (boomballs[i].y >= context.canvas.height - 10) {
            boomballs[i].y = context.canvas.height - 10
            boomballs[i].vy = -boomballs[i].vy * 0.6
        }
        if (boomballs[i].x < 0 || boomballs[i].x > context.canvas.width) {
            boomballs.splice(i, 1)
        }
        context.beginPath()
        context.arc(boomballs[i].x, boomballs[i].y, 10, 0, Math.PI * 2)
        context.closePath()
        context.fill()
    }
}

//绘制小球
function goballs() {
    context.fillStyle = 'darkblue'
    for (var i = 0; i < balls.length; i++) {
        context.beginPath()
        context.arc(balls[i].x, balls[i].y, 10, 0, Math.PI * 2)
        context.closePath()
        context.fill()
    }
}

//事件
function update() {
    //监测时间变化并更新时间
    if (oldmiao !== checkTime(new Date().getSeconds().toString())) {
        updatetime()
        addtime()
    }
    if (oldshijian.toString() !== shijian.toString()) {
        addboomtime()
    }
    oldshijian = shijian
    //绘制小球
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    goballs()
    goboomballs()
}

//更新
setInterval(update, 50)