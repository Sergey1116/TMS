createFirsBox();

function createFirsBox() {
    let fragment = new DocumentFragment();

    let inp = document.createElement("input");
    inp.type = "number";
    inp.value = 1;

    let but = document.createElement("button");
    but.textContent = "Generate";

    fragment.appendChild(inp);
    fragment.appendChild(but);

    document.getElementById("incDecBox").innerHTML = "";
    document.getElementById("incDecBox").append(fragment);


    document.querySelector("#incDecBox>button").addEventListener("click",
        () => {
            createSecondBox(+document.querySelector("#incDecBox>input").value);
        }
    );
}


function createSecondBox(n) {
    let fragment = new DocumentFragment();

    let inp = document.createElement("input");
    inp.type = "number";
    inp.value = 0;
    inp.disabled = true;

    fragment.appendChild(inp);


    let divBt = document.createElement("div");
    divBt.id = "buttons";


    for (let i = 1; (i <= n) && (i <= 20); i++) {
        divBt.appendChild(createBtFrag(i, true));
        divBt.appendChild(createBtFrag(i, false));
    }

    fragment.appendChild(divBt);

    let bt = document.createElement("button");
    bt.className = "reset";
    bt.textContent = "Reset";
    fragment.appendChild(bt);


    document.getElementById("incDecBox").innerHTML = "";
    document.getElementById("incDecBox").append(fragment);


    document.getElementById("buttons").addEventListener("click",
            (ev) => {
                const a = document.getElementsByTagName("input")[0];
                if (ev.target.dataset.addition === 'true') {
                    a.value = +a.value + (+ev.target.dataset.number);
                }
                if (ev.target.dataset.addition === 'false') {
                    a.value -= Number(ev.target.dataset.number);
                }
            }
        );

        document.querySelector("#incDecBox>.reset").addEventListener("click",
        () => {
            createFirsBox();
        }
    );

    function createBtFrag(n, incOrDec) {
        let bt = document.createElement("button");
        bt.textContent = `${incOrDec ? '+' : '-' }${n}`;
        bt.dataset.addition = incOrDec ? 'true' : 'false';
        bt.dataset.number = n;
        return bt;
    }
}