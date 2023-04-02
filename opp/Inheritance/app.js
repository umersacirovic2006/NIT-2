class Person {
  constructor(name, lastName, age) {
    (this.name = name), (this.lastName = lastName), (this.age = age);
  }
  introduction = () =>
    console.log(
      `Hello!!! I am ${this.name} ${this.lastName}. Nice to meet you!`
    );
  aboutAge = () => console.log(`I am ${this.age} years old.`);
}

// // Professor

// class Employee extends Person {
//     constructor(position, hRate, job, name, lastName, age) {
//         super(name, lastName, age)
//         this.job = job,
//         this.hRate = hRate;
//     }
//     aboutJob = () => console.log(`I work as a ${this.job}.`);
//     calcMonthlyIncome = () => this.hRate * 8 * 5 * 4;
// }

// class Professor extends Employee {
//     constructor(name, lastName, age, job) {
//         super(name, lastName, age, job)
//     }
// }

// const prof1 = new Professor("Asmir", "Crnovrsanin", 35, "Professor of Islamic law")

// prof1.introduction()
// prof1.aboutAge()
// prof1.aboutJob()

// // Student

class Student extends Person {
  constructor(school, schoolName, schoolYear, name, lastName, age) {
    super(name, lastName, age);
    this.school = school;
    this.schoolName = schoolName;
    this.schoolYear = schoolYear;
  }
  aboutSchool = () =>
    console.log(
      `I go to ${this.schoolName} ${this.school}, I am a ${this.schoolYear}rd year.`
    );
}

const stud1 = new Student("University", "Drzavni", 3, "Alen", "Kalac", 22);

stud1.introduction();
stud1.aboutAge();
stud1.aboutSchool();

// Engineer

// class Engineer extends Employee {
//     constructor(degree, langs, job, )
// }

// Animal

class Animal {
  constructor(name, species, weight) {
    this.name = name;
    (this.species = species), (this.weight = weight);
  }

  wakeUp = () => console.log(`${this.name} is going to wake up!`);
  eat = () =>
    console.log(`${this.name} is eating! Their weight is ${this.weight} kg.`);
  sleep = () => console.log(`${this.name} is going to sleep! Sleep well!!!`);
}

class Dog extends Animal {
  constructor(name, species, weight) {
    super(name, species, weight);
  }

  introduction = () => console.log(`${this.name} is a ${this.species}!`);
  whenAngy = () => console.log(`${this.name} is barking!`);
}

const baki = new Dog("Baki", "Dog", 14);
// baki.wakeUp()
// baki.eat()
// baki.sleep()
// baki.introduction()
// baki.whenAngy()

// Churro

class Fox extends Animal {
  constructor(name, species, weight) {
    super(name, species, weight);
  }

  introduction = () => console.log(`${this.name} is a ${this.species}`);
}

// const churro = new Animal("Churro", "red fox", 13)
// churro.wakeUp()
// churro.eat()
// churro.sleep()
