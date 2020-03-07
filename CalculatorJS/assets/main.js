{
    const cal = document.getElementById("caulculator");
    const res = document.querySelector("#caulculator>.result");
    let dotActiv = true;
    let temp = NaN;
    let operation = null;
    let memory = null;

    cal.addEventListener("click", ev => {
        const classEv = ev.target.className;
        document.querySelector(".button-opt.AC").textContent = 'C';

        if (classEv.includes("button-opt")) {
            calcOpt(ev.target.textContent);
        } else if (classEv.includes("button-num")) {
            calcNum(ev.target.textContent);
        } else if (classEv.includes("button-oper")) {
            calcOper(ev.target.textContent);
        } else if (classEv.includes("button-memory")) {
            calcMemory(ev.target.textContent);
        }
    });

    document.querySelector("#caulculator>.result").addEventListener("click", function () {
        let oldRes = res.textContent;
        if (oldRes.length > 1) {
            res.textContent = oldRes.slice(0, oldRes.length - 1);
        } else {
            res.textContent = 0;
        }
    });

    document.addEventListener('keypress', ev => {
        if ((ev.key >= '0' && ev.key <= '9')|| ev.key === '.') {
            calcNum(ev.key);
        } else if("-+*/".includes(ev.key)){
            setOperMemor(ev.key);
        } else if(ev.key === '='){
            calcRes();
        }
    });

    function calcNum(val) {
        if (res.textContent.length < 11) {
            if (val === '0') {
                if (res.textContent !== '0') {
                    res.textContent += val;
                }
            } else if (val === '.') {
                if (dotActiv) {
                    dotActiv = false;
                    res.textContent += val;
                }
            } else {
                if (res.textContent === '0') {
                    res.textContent = val;
                } else {
                    res.textContent += val;
                }
            }
        }
    }

    function calcOpt(val) {
        if (val === '+/-') {
            res.textContent = +(res.textContent) * (-1);
            return;
        } else if (val === '%') {
            res.textContent = +(res.textContent) / 100;
            return;
        } else {
            res.textContent = 0;
            dotActiv = true;
            document.getElementsByClassName("button-opt AC")[0].textContent = 'AC';
            return;
        }
    }

    function calcOper(val) {
        if (val === "=") {
            calcRes();
        } else{
            setOperMemor(val);
        }
    }

    function calcMemory(val) {
        if (val === 'mc') {
            memory = null;
            document.querySelector(".button-memory.mr").style.backgroundColor = "#212121";
        } else if (val === 'm+') {
            if (memory === null) {
                memory = +(res.textContent);
                document.querySelector(".button-memory.mr").style.backgroundColor = "grey";
            } else {
                memory += +(res.textContent);
            }
        } else if (val === 'm-') {
            if (memory !== null) {
                memory -= +(res.textContent);
            }
        } else if (val === 'mr') {
            if (memory !== null) {
                res.textContent = memory;
            }
        }
    }

    function setOperMemor(val) {
        temp = +(res.textContent);
        operation = val;
        res.textContent = 0;
    }

    function calcRes(){
        let tmp;
            switch (operation) {
                case '+':
                    tmp = +(res.textContent) + temp;
                    break;
                case '–':
                case '-':
                    tmp = -(res.textContent) + temp;
                    break;
                case '×':
                case '*':
                    tmp = +(res.textContent) * temp;
                    break;
                case '÷':
                case '/':
                    tmp = temp / (res.textContent);
                    break;
            }
            res.textContent = roundRez(tmp);
    }

    function roundRez(val) {
        if (val.toString().length < 12) {
            return val;
        } else {
            return val.toExponential(8);
        }
    }
}