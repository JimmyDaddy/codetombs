function foo() {
  console.log(a);
  a = 1;
}

foo(); // ReferenceError: a is not defined


// ============

function bar() {
  a = 1;
  console.log(a);
}

bar(); // 1

// ============


function foo() {
  console.log(a);
  a = 1;
}

a = 2;

foo(); // 2

// ===========