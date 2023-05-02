class BaseBuilder {
    constructor (value) {
        this.value = value
    }
    plus(...n) {
        let sum = 0;
        n.forEach(item => sum += item);
        this.value = this.value + sum;
      return this.value;
    }
    minus(...n){
        if (typeof this.value === 'number') {
            this.value = n.reduce((acc, item) => {return acc - item},this.value);
        }
        if (typeof this.value === 'string'){
            this.value = this.value.slice(0, -n);
        }
        return this.value

    }
    multiply(n){
        if (typeof this.value === 'number') {this.value = this.value * n}
        if (typeof this.value === 'string') {this.value = this.value.repeat(n)}
                return this.value;
    }
    divide(n){
        if (typeof this.value === 'number') {this.value = Math.trunc(this.value / n)}
        if (typeof this.value === 'string') {this.value = this.value.slice(0, n)}
                return this.value;
    }
    get(){
        return this.value;
    }
}