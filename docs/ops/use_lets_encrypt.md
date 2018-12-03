
![Let's Encypt](https://letsencrypt.org/images/letsencrypt-logo-horizontal.svg)

[Let's Encrypt](https://letsencrypt.org/) 由互联网安全研究小组提供的免费 SSL 证书申请服务，可以通过以下步骤来为你的网站申请免费的 SSL 证书

* `openssl genrsa 4096 > account.key`
* `openssl genrsa 4096 > domain.key`，如果要签发ECC证书可以使用
`openssl ecparam -genkey -name secp256r1 | openssl ec -out domain.key `
或
`openssl ecparam -genkey -name secp384r1 | openssl ec -out domain.key`
* 然后利用之前的 domain.key 生成CSR：`openssl req -new -key domain.key -out domain.csr `
* 在 nginx 中使用静态资源代理配置验证服务:

  ```config
  server {
      listen       80;
      server_name www.yoursite.com yoursite.com; 
      location^~/.well-known/acme-challenge/ {
      alias /home/xxx/www/challenges/;
    }
  }
  ```

* 重启系统中的 nginx 以加载新配置
* 接下来获取 acme-tiny 脚本: `wget https://raw.githubusercontent.com/diafygi/acme-tiny/master/acme_tiny.py`
* 然后获取网站证书: `python3 acme_tiny.py --account-key ./account.key --csr ./domain.csr --acme-dir /home/xxx/www/challenges/.well-known/acme-challenge/ > ./domain.signed.crt`
* 下载中间证书: `wget -O - https://letsencrypt.org/certs/lets-encrypt-x1-cross-signed.pem > intermediate.pem`
* 链接证书：`cat domain.signed.crt  intermediate.pem > chained.pem`
* 在 nginx 中网站配置里加上以下配置：

  ```config
  listen 443 ssl;
  ssl_certificate ~/www/ssl/chained.pem; 
  ssl_certificate_key ~/www/ssl/domain.key;
  ```

* 重启系统中的 nginx 以加载新配置
* 由于证书半年失效一次，可将以上步骤的 7、8、9、11 编写为一个定时脚本，在合理的周期内更新证书重载配置