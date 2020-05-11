/**
 * 批量请求函数

multiRequest(urls,maxNum)

1. 批量请求函数，最大并发数maxNum。
2. 每当有一个请求返回，就留下一个空位，可以增加新的请求。
3. 所有请求完成后，结果按照urls里面的顺序依次打出。
 */

const urllib = require('urllib')
const sendMutiReq = (urls, maxNum) => new Promise(resolve => {
  if (!urls || !urls.length > 0) {
    return []
  }
  if (urls.length <= maxNum ) {
    Promise.all(urls.map(url => urllib.request(url))).then(resp => {
      resp.map(res => {
        console.log(res.data.toString('utf8'));
      })
    })
  }

  const requestPool = []
  let running = 0
  const addRequest = (url, index) => {
    return requestPool.push({
      index,
      request: urllib.request(url, {
        timeout: 3000
      })
    })
  }
  urls.map((url, index) => addRequest(url, index))
  const resps = {}
  const run = () => {
    if (Object.keys(resps).length === urls.length) {
      const ress = []
      Object.keys(resps).map(key => {
        ress.push(resps[key])
      })
      resolve(ress)
    }
    while(requestPool.length > 0 && running < maxNum) {
      const req = requestPool.shift()      
      running += 1
      req.request.then((res) => {
        resps[req.index] = res.data.toString('utf8')
        running -= 1
        run()
      })
    }
  }
  run()
})

const urls = [
  'http://localhost:3000?num=1',
  'http://localhost:3000?num=2',
  'http://localhost:3000?num=3',
  'http://localhost:3000?num=4',
  'http://localhost:3000?num=5',
  'http://localhost:3000?num=6',
  'http://localhost:3000?num=7',
  'http://localhost:3000?num=8',
  'http://localhost:3000?num=9',
  'http://localhost:3000?num=10',
  'http://localhost:3000?num=11'
];


sendMutiReq(urls, 3).then(res => {
  console.log(res);
})
