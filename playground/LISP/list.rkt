;构造自己的list
;first define a struct
;(make-pair any any)
(define-struct pair (left right))
;define our cons
(define (my-cons my-first my-rest)
(cond
  [(and (pair? my-rest) (empty? my-rest)) (error 'my-cons "the second value must be a cons")]
[else (make-pair my-first my-rest)]))