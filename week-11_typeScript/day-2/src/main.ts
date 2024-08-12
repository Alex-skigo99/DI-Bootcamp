// const span = <HTMLSpanElement>document.querySelector('#year');
// span.innerHTML = '2023';

const year = document.getElementById('year') as HTMLSpanElement;
const t_y: string = new Date().getFullYear().toString();
year ? year.textContent = t_y : '';

class User {
    public name: string;
    private age: number;
    protected readonly active: boolean;

    constructor(name: string, age: number, active: boolean) {
        this.name = name;
        this.age = age;
        this.active = active;
    }

    getAge() {
        return `My age is ${this.age}`
    }
    setAge(age: number) {
        this.age = age;
    }
    getActive() {
        return `Am i active? ${this.active}`
    }
};

let user1 = new User('John', 25, true)
// user1.age = 30;  //bad way
user1.setAge(30);
console.log(user1.getAge());
console.log(user1.getActive());

class Student extends User {
    constructor(name: string, age: number, active: boolean) {
        super(name, age, active);
    }

    // getStudentAge() {
    //     return `My age is ${this.age}`
    // }
    getStudentActive() {
        return `Am i active? ${this.active}`
    }

};

let student1 =new Student('Anne', 22, true);
console.log(student1.name);
console.log(student1.getAge());
console.log(student1.getStudentActive());
