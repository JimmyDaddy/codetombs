# LISP 符号自定义

The location of parentheses in a definition must match the following pattern exactly:

```scheme
.-- start definition
|
|         .-- start program and input names
|        |
|        |        .- end input names
v        v        v
(define (f arg ...)
    expression)
              ^- end definition
```

Compare this pattern to the area-of-disk program:

```scheme
(define (area-of-disk r)
        (* 3.14 (* r r)))
```

In area-of-disk, the expression is `(* 3.14 (* r r))`. No extra parentheses are added to this expression.

> 定义后再使用，不管是表达式还是表还是变量