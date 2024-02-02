let [h, m, s, ms,] = [0, 0, 0, 0]
let timer;

let displayTimer = document.querySelector('.watch')
let ul = document.querySelector('.lap')

function start() {
    if (!timer) {
        timer = setInterval(run, 10)
    }
}

function run() {
    ms += 10
    displayTimer.innerHTML = getTime()
    // console.log(getTime);
    if (ms == 1000) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
}

function getTime() {
    return (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s) + ":" + (ms < 10 ? '0' + ms : ms)
}

function pause() {
    stopTimer()
}

function stopTimer() {
    clearInterval(timer)
    timer = null
}

function reset() {
    stopTimer()
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    displayTimer.innerHTML = getTime()
}

function laps() {
    if (timer) {
        let li = document.createElement('li')
        li.textContent = getTime()
        ul.appendChild(li)
    }
}

function resetLaps() {
    let nodes = ul.childNodes
    ul.innerHTML = ""
    // for (let i = nodes.length - 1; i >= 0; i--) {
    //     ul.removeChild(nodes[i])
    // }

}