// task 1
{
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    console.log(getSalary1(salaries));
    console.log(getSalary2(salaries));

    function getSalary1(sal) {
        return Object.values(sal).reduce(function (sum, current) {
            return sum + current;
        });
    }

    function getSalary2(sal) {
        let res = 0;

        for (const i in sal) {
            res += sal[i];
        }

        return res;
    }
}

//task 2
{
    const entrances = validValue("Enter entrances", 1, 10);
    const flors = validValue("Enter floors", 1, 25);
    const apartmentsPerFlor = validValue("Enter the number of apartments per floor", 1, 20);
    const apartment = validValue("Enter apartment №");

    let res = calculateLocationApartment(entrances, flors, apartmentsPerFlor, apartment);

    if (res) {
        alert(`Apartment: ${res.apartment}.\nEntrance: ${res.entrance}.\nFlor: ${res.floor}.`);
    } else {
        alert("You entered incorrect data!");
    }

    function calculateLocationApartment(entrances, flors, apartmentsPerFlor, apartment) {
        const apartmentsPerEntrances = apartmentsPerFlor * flors;

        if (entrances * apartmentsPerEntrances < apartment) {
            return null;
        }

        return {
            entrance: Math.ceil(apartment / apartmentsPerEntrances),
            floor: Math.ceil((apartment % apartmentsPerEntrances) / apartmentsPerFlor),
            apartment: apartment
        }
    }

    function validValue(text, minVal, maxVal) {
        let val;
        do {
                val = Number(prompt(`${text}`));
        } while (!Number.isInteger(val) || (val < minVal || (val > maxVal)))

        return val;
    }
}

// task 3
{
    var generator = sequence(10, 3);
    console.log(generator());
    console.log(generator());
    console.log(generator());

    function sequence(start, step) {
        let rez = start - step;
        return function () {
            return rez += step;
        }
    }
}

// task 4
{
    function sum(number) {
        let res = number;

        function resNum(n) {
            res += n;
            return resNum;
        };

        resNum.toString = function () {
            return res;
        };

        return resNum;
    }

    let x = sum(2)(5)(10);
    alert(x);
}