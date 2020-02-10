function buttonFizzBuzz() {
    number = prompt("Enter a number:");
    if (!+number) {
        alert("Enter a number!")
    } else {
        createUlArr(fizzBuzz(number));
    }

    function createUlArr(arr) {
        const fragment = document.createDocumentFragment();
        arr.forEach(el => {
            const li = document.createElement("li");
            li.textContent = el;
            fragment.appendChild(li);
        });

        document.getElementById('fizzBuzz').innerText = 'Your list:'
        document.getElementById('fizzBuzz').appendChild(fragment);
    }

    function fizzBuzz(n) {
        let arr = [];
        const buzz = 'buzz';
        const fizz = 'fizz';
        for (let i = 1; i <= n; i++) {
            if (!(i % 3) && !(i % 5)) {
                arr.push(`${fizz}${buzz}`)
            } else if (!(i % 3)) {
                arr.push(fizz);
            } else if (!(i % 5)) {
                arr.push(buzz);
            } else {
                arr.push(i);
            }
        }
        return arr;
    }
}