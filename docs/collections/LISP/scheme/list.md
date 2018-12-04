# List 队列

* `empty`:保留字，空队列（Empty List）
* `cons`: 有两个成员变量
* `first` 和 `rest` ，如 `(cons 'haha empty)`,则表示第一个 `first` 是 `'haha` 可用表达式 `(first (cons 'haha empty))` 输出 `'haha`，第二个则是空队列，`cons` 的第二个成员变量必须是队列，因此可以由 `cons` 生成多元素的队列如：

```scheme
(cons 'steak
  (cons 'pommes-frites
    (cons 'beans
      (cons 'bread
        (cons 'water
          (cons 'juice
            (cons 'brice-cheses empty)
          )
        )
      )
    )
  )
)
```

同时队列不一定要包含相同类型的数据，上面的例子说明，`cons` 在第一个成员类型为符号类型的情况下，第二个可以为 `cons` 类型，因此我们可以定义含有不同数据类型的队列，如：

```scheme
(cons 78
  (cons 'hello
    (cons "stehd" empty)
  )
)
```

由此应该可以总结出，`cons` 实际上就是一个 `struct` 可以这样定义

```scheme
;构造自己的list
;first define a struct
;(make-pair any any)
(define-struct pair (left right))
;define our cons
(define (my-cons my-first my-rest)
(cond
  [(and (pair? my-rest) (empty? my-rest)) (error 'my-cons "the second value must be a cons")]
[else (make-pair my-first my-rest)]))
```

实际上就是定义一个函数，而 lisp 使可以将函数作为数据来进行操作的，因此函数 `my-cons` 也可以作为一个对象来进行操作

扩展树：由于 `cons` 的成员可以包含 `cons` 本身因此可以利用 `cons` 定义出树结构来，
例如:

```scheme
(cons 
  (cons 23 
    (cons 3 
      (cons 23 empty)
    )
  ) (cons 45 
      (cons 4 
        (cons 5 empty)
      )
  )
)
```

上面的定义就是一个类似于树结构