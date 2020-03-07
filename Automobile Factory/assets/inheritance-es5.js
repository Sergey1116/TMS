function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.superclass = Parent;
}

function Car({
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

Car.prototype.getFullName = function () {
    return `${this.name} ${this.model}`;
}

Car.prototype.getAge = function () {
    return (new Date().getFullYear()) - this.year;
}

Car.prototype.changeColor = function (newColor) {
    if (this.color === newColor) {
        console.log('Up to you!');
    } else {
        this.color = newColor;
        console.log(`Color change to ${newColor}`);
    }
}

Car.prototype.calculateWay = function (kilometers, fuel) {
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

function BMW({
    model,
    awd = false,
    year,
    color,
    maxSpeed,
    fuelCapacity = 60,
    fuelConsumption = 10
}) {
    Car.call(this, {
        name: 'BMW',
        year,
        model,
        color,
        maxSpeed,
        fuelCapacity,
        fuelConsumption
    })
    this.awd = awd;
}

extend(BMW, Car);

BMW.prototype.getFullName = function () {
    return `${this.name} ${this.model} ${this.awd?'xDrive':''}`;
}

function MB({
    model,
    typeFuel = 'petrol',
    year,
    color,
    maxSpeed,
    fuelCapacity = 60,
    fuelConsumption = 10
}) {
    Car.call(this, {
        name: 'Mercedes-Benz',
        year,
        model,
        color,
        maxSpeed,
        fuelCapacity,
        fuelConsumption
    })
    this.typeFuel = typeFuel;
}

extend(MB, Car);

MB.prototype.GetInfo = function () {
    console.log(`${this.name} ${this.model}. Type fuel: ${this.typeFuel}.`);
}

function Audi({
    model,
    year,
    awd = false,
    color,
    maxSpeed,
    fuelCapacity = 60,
    fuelConsumption = 10
}) {
    Car.call(this, {
        name: 'Audi',
        year,
        model,
        color,
        maxSpeed,
        fuelCapacity,
        fuelConsumption
    })
    this.awd = awd;
}

extend(Audi, Car);

Audi.prototype.getFullName = function () {
    return `${this.name} ${this.model} ${this.awd?'quattro':''}`;
}

let ladaV = new Car({
    name: 'Lada',
    model: 'Vesta',
    year: 2016,
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