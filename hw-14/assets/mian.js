//task_1
{
    const word = prompt("Enter the word");
    if (isPolindrom(word)) {
        alert(`The word: "${word}" is a polindrome!`);
    } else {
        alert(`The word: "${word}" isn\`t a polindrome!`);
    }
}

//task_2
{
    let array = createRandomArray(7, 10);
    console.log(array);
    console.log(array.sort((a, b) => a - b));
}

//task_3
{
    let array = createRandomArray(10, 100);
    console.log(createRandomArray(10, 100));
    console.log(changeNumberToString(array, 0, "zero"));
}

function isPolindrom(word) {
    let result = true;
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            result = false;
            break;
        }
    }
    return result;
}

function createRandomArray(maxLenght, maxNumber) {
    let arr = [];
    while (arr.length < maxLenght) {
        let rundNumber = Math.floor(Math.random() * (maxNumber + 1));

        if (!arr.includes(rundNumber)) {
            arr.push(rundNumber);
        }
    }
    return arr;
}

function changeNumberToString(arrChange, number, numString) {
    return arrChange.map((num) => {
        if (num.toString().includes(number)) {
            num = num.toString().replace(new RegExp(number, 'g'), numString);
        }
        return num;
    });
}