# Cond的特点

* cond_false:when the first condition is false:

```scheme
(cond
  [false ...]
  [exp1 exp2]
  ...)
= (cond
; The first line disappeared.
  [exp1 exp2]
  ...)
```

then the first cond-line disappears;

* cond_true:when the first condition is true:

```scheme
(cond
  [true exp]
  ...)
= exp
```

the entire cond-expressions is replaced by the first answer;

* cond_else:when the only line left is the else-line:

```scheme
(cond
  [else exp])
  = exp
```

即：cond是按照程序编写顺序执行的
例如下面的程序：

```scheme
(define (judge a)
  (cond
      [false "xxxxx"]
      [(symbol=? 'a a) "yes"]
      [true "hehe"]
      [(symbol=? 'v a) "no"]
      [else "yyy"]
  )
)

;test
(judge 'a);输出yes
(judge 'v);输出hehe,如果程序传入参数'v永远不可能输出“no”,因为在执行(symbol=? 'v)这个表达式之前，就已经执行了[true "hehe"]这个判断行，函数提前结束并返回值

```