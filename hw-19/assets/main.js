document.querySelector(".f1>button").addEventListener("click",
    () => {
        document.querySelector(".f1").style.display = 'none';
        document.querySelector(".f2").style.display = 'flex';
        createButIncDec(+document.querySelector(".f1>input").value);
    }
);

document.getElementById("buttons").addEventListener("click",
        (ev) => {
            const a = document.getElementById("inp");
            if (ev.target.dataset.addition === 'true') {
                a.value = +a.value + (+ev.target.dataset.number);
            }
            if (ev.target.dataset.addition === 'false') {
                a.value -= Number(ev.target.dataset.number);
            }
        }
    );


document.querySelector(".f2>.reset").addEventListener("click",
    () => {
        document.querySelector(".f1>input").value = 0;
        document.querySelector(".f1").style.display = 'flex';
        document.querySelector(".f2").style.display = 'none';
        document.querySelector(".f2>input").value = 0;
    }
);


function createButIncDec(n) {
    let fragment = new DocumentFragment();
    for (let i = 1;
        (i <= n) && (i <= 20); i++) {
        fragment.appendChild(createBtFrag(i, true));
        fragment.appendChild(createBtFrag(i, false));
    }
    document.getElementById("buttons").innerHTML = "";
    document.getElementById("buttons").append(fragment);

    function createBtFrag(n, incOrDec) {
        let bt = document.createElement("button");
        bt.textContent = `${incOrDec ? '+' : '-' }${n}`;
        bt.dataset.addition = incOrDec ? 'true' : 'false';
        bt.dataset.number = n;
        return bt;
    }
}