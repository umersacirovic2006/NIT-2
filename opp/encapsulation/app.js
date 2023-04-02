// class Person {
//     constructor(name, lastName, age) {
//         this.name = name,
//         this.lastName = lastName,
//         this.age = age;
//     }
//     introduction = () => console.log(`Hello!!! I am ${this.name} ${this.lastName}. Nice to meet you!`);
//     aboutAge = () => console.log(`I am ${this.age} years old.`);
// }

// class Employee extends Person {
//     constructor(position, hRate, job, name, lastName, age) {
//         super(name, lastName, age)
//         this.job = job,
//         this.hRate = hRate;
//         this.position = position;
//     }
//     aboutJob = () => console.log(`I work as a ${this.job}.`);
//     calcMonthlyIncome = () => this.hRate * 8 * 5 * 4;
// }

// class Engineer extends Employee {
//         #favCollege

//         constructor(favCollege, degree, langs, position, hRate, job, name, lastName, age) {
//             super(position, hRate, job, name, lastName, age)
//             this.degree = degree;
//             this.langs = langs;
//             this.#favCollege = favCollege;
//         }
// }

// const e1 = new Employee("Neka", false, ["Javascript", "Python"], )

class Osoba {
    constructor(ime, godine){
        let _ime = ime;
        let _godine = godine;

        this.getIme = function(){
            return _ime
        }

        this.getGodine = function(){
            return _godine
        }

        this.setIme = function (ime){
            ime = _ime
        }

        this.setGodine = function (godine){
            godine = _godine
        }
    }
}

let osoba = new Osoba("Pera", 25)
console.log(osoba.getIme());
console.log(osoba.getGodine());

osoba.setIme("Neko")
osoba.setGodine(30)

console.log(osoba.getIme());
console.log(osoba.getGodine());

class Student {
    constructor(name, lastName, age, school, schoolName, schoolYear){
        let _name = name
        let _lastName = lastName
        let _age = age
        let _school = school
        let _schoolName = schoolName
        let _schoolYear = schoolYear

        this.getName = function(){
            return _name
        }

        this.setName = function (name){
            name = _name
        }

        this.getLastName = function(){
            return _lastName
        }

        this.setLastName = function (lastName){
            lastName = _lastName
        }

        this.getAge = function(){
            return _age
        }

        this.setAge = function (age){
            age = _age
        }

        this.getSchool = function(){
            return _school
        }

        this.setSchool = function (school){
            school = _school
        }

        this.getSchoolName = function(){
            return _schoolName
        }

        this.setSchoolName = function (schoolName){
            schoolName = _schoolName
        }

        this.getSchoolYear = function(){
            return _schoolYear
        }

        this.setSchoolYear = function (schoolYear){
            schoolYear = _schoolYear
        }
    }
}

let stud1 = new Student("Neko", "Neki", 24, "Da", "Aha", 5)

console.log(stud1.getName());
console.log(stud1.getLastName());
console.log(stud1.getAge());
console.log(stud1.getSchool());
console.log(stud1.getSchoolName());
console.log(stud1.getSchoolYear());

stud1.setName("Medo")
stud1.setLastName("Medovic")
stud1.setAge(14)
stud1.setSchool("Osnovna")
stud1.setSchoolName("Trso")
stud1.setSchoolYear(8)

console.log(stud1.getName());
console.log(stud1.getLastName());
console.log(stud1.getAge());
console.log(stud1.getSchool());
console.log(stud1.getSchoolName());
console.log(stud1.getSchoolYear());