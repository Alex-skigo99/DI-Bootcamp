let num = 493193;
while (String(num).length > 1) {
    num_arr = [...String(num)].map(i => Number(i));
    num = num_arr.reduce((total, n) => total + n)
}
console.log(num);

/**
 * Create a User class
 * Store the name of the user in a "name" variable
 * Add hello method that will log 'Hello' and the name of the user
 * Create a Student class that exextends User
 * Create 3 instances of Student class, add them to an Array
 * Loop the array and call hello method
 */

class User {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hello ${this.name}!`)
    }
}

class Student extends User {
    constructor(name) {
        super(name)
    }
}

let arr = [
    new Student('Mike'),
    new Student('John'),
    new Student('Sarah'),
];

arr.forEach(student => student.hello());

class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment();
  counterOne.increment();
  
  const counterTwo = counterOne;
  counterTwo.increment();
  
  console.log(counterOne.count);

  class Bird {
    constructor() {
      console.log("I'm a bird. 🦢");
    }
  }
  
  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. 🌸");
      super();
    }
  }
  
  const pet = new Flamingo();
  