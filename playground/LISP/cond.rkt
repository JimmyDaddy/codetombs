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
(judge 'v);输出hehe,如果程序传入参数'v永远不可能输出“no”,因为在执行(symbol=? 'v)这个表达式之前,就已经执行了[true "hehe"]这个判断行,函数提前结束并返回值