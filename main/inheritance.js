//Created a Base class ES5:
function BaseBuilder(value) {
  this.value = value;
}
//common methods:
BaseBuilder.prototype.plus = function () {
  var n = Array.from(arguments);
  var sum = n.reduce(function (acc, item) {
    return (acc += item);
  });
  this.value = this.value + sum;
  return this;
};
BaseBuilder.prototype.minus = function (n) {};
BaseBuilder.prototype.multiply = function (n) {};
BaseBuilder.prototype.divide = function (n) {};
BaseBuilder.prototype.get = function () {
  return this.value;
};

//ES6 class IntBuilder:
class IntBuilder extends BaseBuilder {
  constructor(value = 0) {
    super(value);
  }
  minus(...n) {
    this.value = n.reduce((acc, item) => {
      return acc - item;
    }, this.value);
    return this;
  }
  multiply(n) {
    this.value = this.value * n;
    return this;
  }
  divide(n) {
    this.value = Math.trunc(this.value / n);
    return this;
  }
  static random(from, to) {
    from = Math.trunc(from);
    to = Math.trunc(to);
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
  mod(n) {
    this.value = this.value % n;
    return this;
  }
}

//ES5 class StringBuilder:
function StringBuilder(value) {
  this.value = value;
}
StringBuilder.prototype = Object.create(BaseBuilder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.minus = function (n) {
  this.value = this.value.slice(0, -n);
  return this;
};

StringBuilder.prototype.multiply = function (n) {
  this.value = this.value.repeat(n);
  return this;
};

StringBuilder.prototype.divide = function (n) {
  this.value = this.value.slice(0, n);
  return this;
};

StringBuilder.prototype.remove = function (str) {
  this.value = this.value
    .split("")
    .filter(function (item) {
      return item !== str;
    })
    .join("");
  return this;
};

StringBuilder.prototype.sub = function (from, n) {
  this.value = this.value.substr(from, n);
  return this;
};
// EXAMPLE  for static random method:
IntBuilder.random(10, 100);
console.log(IntBuilder.random(10, 100));

// EXAMPLE 1 for IntBuilder with METHOD CHAINING:
let intBuilder = new IntBuilder(10);
intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get();
console.log(intBuilder);

// EXAMPLE 2 for IntBuilder without METHOD CHAINING:
let intBuilder2 = new IntBuilder(8);
intBuilder2.plus(5, 4, 3);
console.log(intBuilder2);
intBuilder2.minus(2, 1);
console.log(intBuilder2);
intBuilder2.multiply(3);
console.log(intBuilder2);
intBuilder2.divide(5);
console.log(intBuilder2);
intBuilder2.mod(3);
console.log(intBuilder2);
intBuilder2.get();
console.log(intBuilder2);

// EXAMPLE 1 for strBuilder with METHOD CHAINING:
let strBuilder = new StringBuilder("Hello");
strBuilder
  .plus(" all", "!")
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove("l")
  .sub(1, 1)
  .get();
console.log(strBuilder);

// EXAMPLE 2 for strBuilder without METHOD CHAINING:
let strBuilder2 = new StringBuilder("strbuilder");
strBuilder2.plus(" new", "!");
console.log(strBuilder2);
strBuilder2.minus(4);
console.log(strBuilder2);
strBuilder2.multiply(3);
console.log(strBuilder2);
strBuilder2.divide(4);
console.log(strBuilder2);
strBuilder2.remove("b");
console.log(strBuilder2);
strBuilder2.sub(1, 1);
console.log(strBuilder2);
strBuilder2.get();
console.log(strBuilder2);
