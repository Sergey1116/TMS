function buttonFizzBuzz() {
    number = prompt("Enter a number:");
    if (!+number) {
        alert("Enter a number!")
    } else {
        createUlArr(fizzBuzz(number));
    }

    function createUlArr(arr) {
        let ul = document.getElementById("fizzBuzz");
        ul.innerHTML = 'Your list:';
        arr.forEach(el => {
            let li = document.createElement("li");
            li.textContent = el;
            ul.append(li);
        });
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