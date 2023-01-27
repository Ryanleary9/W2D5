// Literal

const obj = { breed: "husky" };
const objChild = Object.create(obj);
console.log(obj.hasOwnProperty("foo"));
console.log(objChild.breed);

// Factory

function createFoo() {
  // To Do ...
  return { foo: "foo" };
}

// Patron Constructor

// Patrones de ejecucion

function bar() {
  console.log("Soy bar");
}

// Uso: patron function

bar();

//

const obj1 = {
  bar,
};

obj1.bar();

// Uso: patron constructor

// eslint-disable-next-line new-cap
const newObject = new bar();

// - Crea un objeto
// - Lo usa como this dentro de la funcion
// - Lo retorna
