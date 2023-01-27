const p1 = {
  name: "Pepe",
  age: 22,
  greetings() {
    console.log("Hola, soy ${this.name}");
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
