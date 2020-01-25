//task_1
{
    const word = prompt("Enter the word");
    let isPolindrom = true;
    for (let index = 0; index < Math.floor(word.length / 2); index++) {
        if (word[index] !== word[word.length - 1 - index]) {
            isPolindrom = false;
            break;
        }
    }

    if (isPolindrom === true) {
        alert(`The word: ${word} is a polindrome!`)
    } else {
        alert(`The word: ${word} isn\`t a polindrome!`)
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
    let rezArray = changeNumberToString(array, 0, "zero");
    console.log(array);
    console.log(rezArray);
}

function createRandomArray(maxLenght, maxNumber) {
    let arr = [];
    while (arr.length < maxLenght) {
        let rundNumber = Math.floor(Math.random() * (maxNumber + 1));

        if (arr.indexOf(rundNumber) === -1) {
            arr.push(rundNumber);
        }
    }
    return arr;
}

function changeNumberToString(arraChange, number, numString) {
    return arraChange.map((num) => {
        let index = num.toString().indexOf(number);
        if (index === -1) {
            return num;
        } else {
            do {
                num = num.toString();
                num = num.substring(0, index) + numString + num.substring(index + 1, index.length);
                index = num.indexOf(number);
            } while (index !== -1)
            return num;
        }
    });
}