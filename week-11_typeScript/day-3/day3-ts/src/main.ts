interface EmployeeInterface {
  // [key: string]: string | number | boolean;
  name: string;
  age: number;
  role: string;
};
let employee1: EmployeeInterface = {
  name: 'John',
  age: 30,
  role: 'Developer'
};

console.log(employee1.name);
employee1.age = 31;
// employee1.active = true;

let prop1: string = 'name';
console.log(employee1[prop1 as keyof EmployeeInterface]);

for (let key in employee1) {
  console.log(`${key} - ${employee1[key as keyof EmployeeInterface]}`);
  console.log(`${key} - ${employee1[key as keyof typeof employee1]}`);
}

const logEmployee = (
  employee: EmployeeInterface, 
  key: keyof EmployeeInterface
): void => {
  console.log(key, employee[key]);
};
logEmployee(employee1, 'name');

interface Student {
  // [key: string]: string|number|string[]|undefined,
  name: string,
  grade: string | number,
  courses?: string[],
};
let student1: Student = {
  name: 'Mikle',
  grade: 70,
  courses: ['Course1', 'course2']
};
for (let key in student1) {
  console.log(`${key} - ${student1[key as keyof typeof student1]}`);
};

// Record type <T>
type keys = 'name' | 'age' | 'role';
type EmployeeType = Record<keys, string | number>;
let employee2: EmployeeType = {
  name: 'Anne',
  age: 77,
  role: 'Director'
};

for (let key in employee2) {
  console.log(key, employee2[key as keyof typeof employee2]);
};

// Generics

interface BoolCheck<T> {
  arg: T,
  is: boolean,
};

const echo = <T>(value: T): T => value;
console.log(echo('hello'));

const isObj = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return {arg, is: false};
  }
  if (typeof arg === 'object' && !Array.isArray(arg) && arg != null) {
    return {arg, is: true};
  }
  return {arg, is: !!arg}
};

console.log(isObj(true));
console.log(isObj('hey'));
console.log(isObj({a: 'a'}));
console.log(isObj([3,5]));

interface HasId {
  id: number,
  // name: string,
};
const checkUser = <T extends HasId>(user: T): T => {
  return user;
};
console.log(checkUser({id:1, name:'John', email: 'eee@dffds.com'}));
console.log(checkUser({id:6, name: 'Anne'}));

const userJson = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

const getUsersInfo = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map(user => user[key]);
};
console.log(getUsersInfo(userJson, 'email'));

// Generics with Class

class StateObject<T> {
  private data: T
  constructor(value: T) {
    this.data = value;
  }
  get state(): T {
    return this.data;
  }
  set state(value: T) {
    this.data = value;
  }
};

const state = new StateObject('John');
console.log(state.state);
// state.state = 12;
const state2 = new StateObject<string[]>(['aaa', 'bbb'])
console.log(state2);

// Utility types

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
};
const post1: Post = {
  id:1,
  title: 'title',
  content: 'content',
  author: 'John'
};
const updatePost = (post: Post, update: Partial<Post>): Post => {
  return {...post, ...update};
};
console.log(updatePost(post1, {content: 'jfjsjfksjfs', author: 'Mark Twen'}));

// Pick or Omit
type MiniPost = Pick<Post, 'id' | 'title'>;  //include id, title
type OtherPost = Omit<Post, 'id' | 'title'>; //not include id, title

//Exclude
type Grades = 'A' | 'B' | 'C' | 'D' | 'F';
type Passes = Exclude<Grades, 'D' | 'F'> // A,B,C

type Failed = Extract<Grades, 'D' | 'F'> // D,F

type NullableString = string | null | undefined;
type NonNullableString = NonNullable<NullableString>;

//ReturnType
const createUser = (name: string, age: number, active: boolean) => {
  return {name, age, active}
};
type UserReturnType = ReturnType<typeof createUser>;

// Parameters
type UserParams = Parameters<typeof createUser>;
const usersP: UserParams = ['Anne', 34, true];
const newUser: UserReturnType = createUser(...usersP);

//Awaited
interface Users {
  id: number,
  nema: string,
  username: string,
  email: string
}
const fetchUsers = async(): Promise<Users[]> => {
  const res = await fetch('');
  return res.json();
};
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>