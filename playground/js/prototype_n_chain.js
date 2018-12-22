function HunmanBeing () {

}

HunmanBeing.prototype.name = 'Kevin';

const badass = new HunmanBeing();

badass.name = 'John';

// John
console.log(badass.name);

// HunmanBeing.prototype.__proto__ 为 Object
HunmanBeing.prototype.__proto__.gender = 'male';

// 向上追溯到 HunmanBeing.prototype.__proto__.gender 为 male
console.log(badass.gender);

// prototype chain: badass.__proto__ --> HunmanBeing.prototype, HunmanBeing.prototype.__proto__ --> Object.prototype, Object.prototype === null

console.log(badass.__proto__ === HunmanBeing.prototype);
console.log(HunmanBeing.prototype.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__);


