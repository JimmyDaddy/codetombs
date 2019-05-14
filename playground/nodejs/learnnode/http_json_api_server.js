const http = require('http');
const URL = require('url');
const { URLSearchParams } = require('url');

const routersMap = {
  '/api/parsetime': (req, res) => {
    const iso = getParam(req, 'iso');
    if (iso) {
      const date = new Date(iso);
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      }));
    } else {
      res.end('pls provide iso');
    }
  },
  '/api/unixtime': (req, res) => {
    const unixtime = getParam(req, 'iso');
    if (unixtime) {
      const date = new Date(unixtime);
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify({
        unixtime: date.getTime()
      }));
    } else {
      res.end('pls provide unixtime');
    }
  }
}

const getParam = (req, key) => {
  const reqUrl = URL.parse(req.url, true);
  const params = new URLSearchParams(reqUrl.query);
  return params.get(key);
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const reqUrl = URL.parse(req.url);
    routersMap[reqUrl.pathname](req, res);
  } else {
    res.statusCode = 404;
  }
});

server.listen(process.argv[2]);