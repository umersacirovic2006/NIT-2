class Person {
    constructor(name, lastName, age) {
        this.name = name,
        this.lastName = lastName,
        this.age = age;
    }
    introduction = () => console.log(`Hello!!! I am ${this.name} ${this.lastName}. Nice to meet you!`);
    aboutAge = () => console.log(`I am ${this.age} years old.`);
}

class Employee extends Person {
    constructor(position, hRate, job, name, lastName, age) {
        super(name, lastName, age)
        this.job = job,
        this.hRate = hRate;
        this.position = position;
    }
    aboutJob = () => console.log(`I work as a ${this.job}.`);
    calcMonthlyIncome = () => this.hRate * 8 * 5 * 4;
}

class Engineer extends Employee {
        #favCollege

        constructor(favCollege, degree, langs, position, hRate, job, name, lastName, age) {
            super(position, hRate, job, name, lastName, age)
            this.degree = degree;
            this.langs = langs;
            this.#favCollege = favCollege;
        }
}

const e1 = new Employee("Neka", false, ["Javascript", "Python"], )