// task 1
{
    fizzBuzz(15);

    function fizzBuzz(n) {
        const buzz = 'buzz';
        const fizz = 'fizz';
        for (let i = 1; i <= n; i++) {
            if (!(i % 3) && !(i % 5)) {
                console.log(`${fizz}${buzz}`)
            } else if (!(i % 3)) {
                console.log(fizz)
            } else if (!(i % 5)) {
                console.log(buzz)
            } else {
                console.log(i)
            }
        }
    }
}

//task 2
{
    console.log(isAnagram('fhdsjk', ' dsjkfh'));

    function isAnagram(word1, word2) {
        return sortStrByLett(word1) === sortStrByLett(word2);
    }

    function sortStrByLett(str) {
        return str.toLowerCase().replace(new RegExp(/[^a-zа-я0-9]+/g), '').split('').sort().join('');
    }
}

// task 3
{
    console.log(getFibonacci(10));
    console.log(getFibonacci2(10));

    function getFibonacci(n = 0) {
        if (n < 2) {
            return n;
        } else {
            return getFibonacci(n - 1) + getFibonacci(n - 2);
        }
    }
}

function getFibonacci2(n = 0) {
    let arr = [0, 1];
    if (n === 0) {
        return arr[0];
    }
    if (n === 1) {
        return arr[1];
    }
    if (n > 1) {
        for (let i = 2; i <= n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        return arr[n];
    }
}

// task 4
{
    console.log(sum(500));
    console.log(sum2(500));

    function sum(n) {
        let arr = [];

        for (let i = 1; i <= n; i++) {
            arr[i] = i;
        }

        return arr.join('').split('').reduce((acc, curr) => {
            return acc += parseInt(curr);
        }, 0);
    }

    function sum2(n) {
        let temp = n;
        let rez = 0;
        let i = 1;

        while (temp) {
            let tmpDiv10 = temp % 10;
            rez += sumNum(tmpDiv10 - 1) * i + tmpDiv10 * (n % i + 1);
            temp = Math.floor(temp / 10);
            rez += 45 * temp * i;
            i *= 10;
        }

        function sumNum(m) {
            return (m + 1) * m / 2;
        }

        return rez;
    }
}