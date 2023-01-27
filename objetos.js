const mamal = { hasHair: true };

const human = {
  teeth: 32,
};

human.__proto__ = mamal;

const gwen = {
  age: 19,
};

gwen.__proto__ = human;
console.log(gwen.teeth);
console.log(gwen.hasHair);
mamal.hasHair = false;
gwen.teeth = 30;
console.log(gwen.teeth);
console.log(gwen.hasHair);
