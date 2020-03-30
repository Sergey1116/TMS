class Car {
    constructor({
        name,
        model,
        year,
        color,
        maxSpeed,
        fuelCapacity = 60,
        fuelConsumption = 10
    }) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    getFullName() {
        return `${this.name} ${this.model}`;
    }

    getAge() {
        return (new Date().getFullYear()) - this.year;
    }

    changeColor(newColor) {
        if (this.color === newColor) {
            console.log('Up to you!');
        } else {
            this.color = newColor;
            console.log(`Color change to ${newColor}`);
        }
    }

    calculateWay(kilometers, fuel) {
        if (fuel < 10) {
            console.log("You need to refuel!");
        } else {
            const time = Math.round(kilometers / this.maxSpeed * 100) / 100;
            const needFuel = kilometers * this.fuelConsumption / 100;
            if (needFuel > fuel) {
                const needRefuel = Math.ceil((needFuel - fuel) / this.fuelCapacity);
                console.log(`Time to destination ${time} h. You need to refuel ${needRefuel} times.`);
            } else {
                console.log(`Time to destination ${time} h.`);
            }
        }
    }
}

class BMW extends Car {
    constructor({
        model,
        awd = false,
        year,
        color,
        maxSpeed,
        fuelCapacity = 60,
        fuelConsumption = 10
    }) {
        super({
            name: 'BMW',
            year,
            model,
            color,
            maxSpeed,
            fuelCapacity,
            fuelConsumption
        });
        this.awd = awd;
    }
    getFullName() {
        return `${this.name} ${this.model} ${this.awd?'xDrive':''}`;
    }
}

class MB extends Car {
    constructor({
        model,
        typeFuel = 'petrol',
        year,
        color,
        maxSpeed,
        fuelCapacity = 60,
        fuelConsumption = 10
    }) {
        super({
            name: 'Mercedes-Benz',
            year,
            model,
            color,
            maxSpeed,
            fuelCapacity,
            fuelConsumption
        });
        this.typeFuel = typeFuel;
    }
    GetInfo() {
        console.log(`${this.name} ${this.model}. Type fuel: ${this.typeFuel}.`);
    }
}

class Audi extends Car {
    constructor({
        model,
        awd = false,
        year,
        color,
        maxSpeed,
        fuelCapacity = 60,
        fuelConsumption = 10
    }) {
        super({
            name: 'Audi',
            year,
            model,
            color,
            maxSpeed,
            fuelCapacity,
            fuelConsumption
        });
        this.awd = awd;
    }
    getFullName() {
        return `${this.name} ${this.model} ${this.awd?'quattro':''}`;
    }
}

let ladaV = new Car({
    name: 'Lada',
    model: 'Vesta',
    year: 2018,
    color: 'red',
    maxSpeed: 180
});

let bmw5 = new BMW({
    model: '5',
    year: 2011,
    color: 'black',
    maxSpeed: 250,
    awd: true
});

let mbE = new MB({
    model: 'E',
    year: 2015,
    color: 'rerd',
    maxSpeed: 250,
    typeFuel: 'diesel'
});

let audiA6 = new Audi({
    model: 'A6',
    year: 2017,
    color: 'pink',
    maxSpeed: 250,
    awd: true,
    fuelConsumption: 20
});

console.log(ladaV.getFullName());
console.log(ladaV.getAge());
ladaV.changeColor('grey');
ladaV.calculateWay(1323, 10);

console.log(bmw5.getFullName());
console.log(bmw5.getAge());
bmw5.changeColor('white');
bmw5.calculateWay(200, 10);

console.log(mbE.getFullName());
console.log(mbE.getAge());
mbE.GetInfo();

console.log(audiA6.getFullName());
console.log(audiA6.getAge());
audiA6.changeColor('white');
audiA6.calculateWay(400, 10);