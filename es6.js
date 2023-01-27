class Person(){

}

const p1 = {
  name: "Pepe",
  age: 22,
  greetings: function() {
    console.log("Hola, soy ${this.name} ");
  },
};

const p2 = {
  name: "Ernesto",
  age: 25,
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p3 = new Person("Luisa", 34);
const p4 = new Person("Juan", 42);
console.log(p1, p2, p3, p4);


class Student extends PersonClass {
  curso
  constructor(name, age, curso) {
    super(name, age)
    this.curso = curso
  }
}

const s1 = new Student("Juan", 53, "Angular")