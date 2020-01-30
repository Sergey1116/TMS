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
}

//task 2
{
    const entrances = prompt("Enter entrances");
    const flors = prompt("Enter floors");
    const apartmentsPerFlor = prompt("Enter the number of apartments per floor");
    const apartment = prompt("Enter apartment №");

    const res = calculateLocationApartment(entrances, flors, apartmentsPerFlor, apartment)
    if (res) {
        alert(`Apartment: ${res.apartment}.\nEntrance: ${res.entrance}.\nFlor: ${res.floor}.`);
    } else {
        alert("You entered incorrect data!");
    }

    function calculateLocationApartment(entrances, flors, apartmentsPerFlor, apartment) {
        const apartments = entrances * flors * apartmentsPerFlor;
        if (apartments < apartment) {
            return null;
        }
        return {
            entrance: Math.ceil(apartment / (flors * apartmentsPerFlor)),
            floor: Math.ceil((apartment % (flors * apartmentsPerFlor)) / apartmentsPerFlor),
            apartment: apartment
        }
    }
}

// task 3
{
    var generator = sequence(10, 3);
    console.log(generator()); // 10
    console.log(generator()); // 13
    console.log(generator()); // 16

    function sequence(start, step){
        rez = start-step;
        return function(){
            return rez+=step;
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