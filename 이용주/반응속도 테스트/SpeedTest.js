var t = document.querySelector('.test');
var s = document.querySelector('.speed');
var st, et;
var tid;
var rt = [];

t.addEventListener('click', () => {
    if (t.textContent === '클릭해서 시작하세요') {
        start();
    } else if (t.textContent === '초록색이 되면 클릭하세요!') {
        early();
    }
});

function start() {
    t.style.backgroundColor = 'red';
    t.textContent = '초록색이 되면 클릭하세요!';
    var rd = Math.random() * 2000 + 1000;
    tid = setTimeout(() => {
        t.style.backgroundColor = 'green';
        st = new Date();
    }, rd);
}

function early() {
    clearTimeout(tid);
    if (t.style.backgroundColor === 'green') {
        record();
    } else {
        t.style.backgroundColor = 'aqua';
        t.textContent = '너무 성급하시네요!';
        setTimeout(() => {
            reset();
        }, 1500);
    }
}

function record() {
    et = new Date();
    var r = et - st;
    rt.push(r);
    var a = rt.reduce((a, b) => a + b) / rt.length;

    var li = document.createElement('li');
    li.textContent = `반응속도: ${r}ms, 평균속도: ${a.toFixed(2)}ms`;
    s.appendChild(li);

    reset();
}

function reset() {
    t.style.backgroundColor = 'aqua';
    t.textContent = '클릭해서 시작하세요';
}