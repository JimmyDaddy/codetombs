const value = 'a';

function foo() {
    console.log(value);
}

function bar() {
    const value = 'b';
    foo();
}

// ?
bar();

// JavaScript采用的是词法作用域，函数的作用域基于函数创建的位置

