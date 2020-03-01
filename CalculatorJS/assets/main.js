{
    const cal = document.getElementById("caulculator");

    let dotActiv = true;
    let temp = NaN;
    let operation = null;
    let memory = null;

    const res = document.getElementsByClassName("result")[0];

    cal.addEventListener("click", (ev) => {
        const classEv = ev.target.className;

        document.getElementsByClassName("button-opt AC")[0].textContent = 'C';

        if (classEv.includes("button-opt")) {
            calcOpt(ev.target.textContent);
        } else if (classEv.includes("button-num")) {
            calcNum(ev.target.textContent);
        } else if (classEv.includes("button-oper")) {
            calcOper(ev.target.textContent);
        } else if (classEv.includes("button-memory")) {
            calcMemory(ev.target.textContent);
        }


        function calcNum(val) {
            if (res.textContent.length < 11) {
                if (val === '0') {
                    if (res.textContent !== '0') {
                        res.textContent += ev.target.textContent;
                    }
                } else if (val === '.') {
                    if (dotActiv) {
                        dotActiv = false;
                        res.textContent += ev.target.textContent;
                    }
                } else {
                    if (res.textContent === '0') {
                        res.textContent = ev.target.textContent;
                    } else {
                        res.textContent += ev.target.textContent;
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
            if (val === "+") {
                temp = +(res.textContent);
                operation = '+';
                res.textContent = 0;
                return;
            } else if (val === "-") {
                temp = +(res.textContent);
                operation = '-';
                res.textContent = 0;
                return;
            } else if (val === "÷") {
                temp = +(res.textContent);
                operation = '/';
                res.textContent = 0;
                return;
            } else if (val === "×") {
                temp = +(res.textContent);
                operation = '*';
                res.textContent = 0;
                return;
            } else if (val === "=") {

                let tmp;
                switch (operation) {
                    case '+':
                        tmp = +(res.textContent) + temp;
                        break;
                    case '-':
                        tmp = -(res.textContent) + temp;
                        break;
                    case '*':
                        tmp = +(res.textContent) * temp;
                        break;
                    case '/':
                        tmp= temp / (res.textContent);
                        break;
                }

                res.textContent = roundRez(tmp);
            }
        }

        function calcMemory(val) {
            if (val === 'mc') {
                memory = null;
                document.getElementsByClassName("button-memory")[3].style.backgroundColor = "#212121";
            } else if (val === 'm+') {
                if (memory === null) {
                    memory = +(res.textContent);
                    document.getElementsByClassName("button-memory")[3].style.backgroundColor = "grey";

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

        function roundRez(val) {
            if (val.length < 12) {
                return val;
            }
            else {
                return val.toExponential(8);
            }
        }
    });
}