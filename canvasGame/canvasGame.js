var kaishi = document.getElementById('in'),
    begin = document.getElementById('begin'),
    ctns = document.getElementById('ctns'),
    c = document.getElementById('canvas'),
    cxt = c.getContext('2d'),
    thewidth = document.documentElement.clientWidth,
    theheight = document.documentElement.clientHeight,
    g = 0,
    y = 0,
    l = thewidth,
    ltoggle = theheight,
    h = Math.random() * 400,
    bolls = [],
    walls = [{
        l,
        ltoggle,
        h
    }]

function ks() {
    g = 0,
        y = 0,
        l = thewidth,
        ltoggle = theheight,
        h = Math.random() * 400,
        bolls = [],
        walls = [{
            l,
            ltoggle,
            h
        }]
    ctn = 0
    ctns.innerHTML = '你死在了第' + ctn + '个绿柱子上'
    begin.style.display = 'none'
    int = setInterval(updata, 16.7)
}

function jieshu() {
    begin.style.display = 'block'
    clearInterval(int)
}

c.onclick = function () {
    g = -8
}

// 更新数据
function updata() {
    c.width = thewidth
    c.height = theheight
    velocity()
    gowall()
    boll(bolls)
    wall(walls)
    intersects(bolls, walls)
    deletes(walls)
}

// 小球位置/速率
function velocity() {
    x = thewidth * 0.2
    y = y + g
    g = g + 0.28
    bolls = []
    bolls.push({
        x,
        y,
        g
    })
}

// 墙位置/移动
function gowall() {
    for (var i = 0; i < walls.length; i++) {
        walls[i].l = walls[i].l - 2
        if (walls[walls.length - 1].l < thewidth - 500) {
            var h = Math.random() * 400
            walls.push({
                l,
                ltoggle,
                h
            })
        }
    }
}

// 绘画小球
function boll(bolls) {
    cxt.fillStyle = '#000'
    cxt.beginPath()
    cxt.arc(bolls[0].x, theheight * 0.4 + bolls[0].y, 30, 0, Math.PI * 2, true)
    cxt.closePath()
    cxt.fill()
}

//绘画地形
function wall(walls) {
    for (var i = 0; i < walls.length; i++) {
        cxt.fillStyle = '#0b0'
        cxt.beginPath()
        cxt.moveTo(walls[i].l, 0)
        cxt.lineTo(walls[i].l, walls[i].h)
        cxt.lineTo(walls[i].l + 100, walls[i].h)
        cxt.lineTo(walls[i].l + 100, 0)
        cxt.closePath()
        cxt.fill()
        cxt.beginPath()
        cxt.moveTo(walls[i].l, ltoggle)
        cxt.lineTo(walls[i].l, walls[i].h + 240)
        cxt.lineTo(walls[i].l + 100, walls[i].h + 240)
        cxt.lineTo(walls[i].l + 100, ltoggle)
        cxt.closePath()
        cxt.fill()
    }
}

// 碰撞
function intersects(bolls, walls) {
    for (var i = 0; i < walls.length; i++) {
        if (walls[i].l - bolls[0].x < 30 && walls[i].l - bolls[0].x > -130) {
            if (walls[i].h - (theheight * 0.4 + bolls[0].y) > -30 || walls[i].h - (theheight * 0.4 + bolls[0].y) < -210) {
                jieshu()
            }
        }
    }
}

// 删除内存
function deletes(walls) {
    for (var i = 0; i < walls.length; i++) {
        if (walls[i].l < -100) {
            ctn = ctn + 1
            ctns.innerHTML = '你死在了第' + ctn + '个绿柱子上'
            walls.splice(i, 1)
        }
    }
}
