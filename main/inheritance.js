class BaseBuilder {
    constructor (value) {
        this.value = value;
    }

    plus(...n) {
        let sum = 0;
        n.forEach(item => sum += item);
        this.value = this.value + sum;
      return this;
    }

    minus(...n){
        if (typeof this.value === 'number') {
            this.value = n.reduce((acc, item) => {return acc - item},this.value);
        }
        if (typeof this.value === 'string'){
            this.value = this.value.slice(0, -n);
        }
        return this;

    }

    multiply(n){
        if (typeof this.value === 'number') {this.value = this.value * n}
        if (typeof this.value === 'string') {this.value = this.value.repeat(n)}
                return this;
    }

    divide(n){
        if (typeof this.value === 'number') {this.value = Math.trunc(this.value / n)}
        if (typeof this.value === 'string') {this.value = this.value.slice(0, n)}
                return this;
    }

    get(){
        return this.value;
    }
}
//ES6 class IntBuilder:
class IntBuilder extends BaseBuilder {
    constructor(value = 0) {
        super(value);
    }
    static random (from, to) {
        from = Math.trunc(from)
        to = Math.trunc(to)
       return  Math.floor(Math.random() * (to - from + 1)) + from

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
  StringBuilder.prototype = Object.create(BaseBuilder.prototype)
  StringBuilder.prototype.constructor = StringBuilder;

  StringBuilder.prototype.remove = function (str) {
   this.value =  this.value.split('').filter(item => item !== str).join('');
   return this;
  }

  StringBuilder.prototype.sub = function (from, n) {
    this.value =  this.value.substr(from, n);
    return this;
   }

   // EXAMPLE:
IntBuilder.random(10, 100);

let intBuilder = new IntBuilder(10);
intBuilder
  .plus(2, 3, 2)
  .minus(1, 2)
  .multiply(2)
  .divide(4)
  .mod(3)
  .get();
console.log(intBuilder)

// EXAMPLE:
let strBuilder = new StringBuilder('Hello');
strBuilder
  .plus(' all', '!')
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove('l')
  .sub(1,1)
  .get();
  console.log(strBuilder)