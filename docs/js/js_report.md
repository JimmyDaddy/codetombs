## JS 埋点上报的几种方式

js 埋点上报有多种方式可以选择，但是由于前端浏览器百花齐放的特性兼之各个浏览器对标准 API 的支持程度导致做通用的 js 埋点  SDK 便显得有些麻烦，而其中上报作为埋点中的重要一环显得尤其重要，以下列出可能会用到的上报方式可针对实际情况予以选用。

###  XHR

在不涉及跨域的情况下使用 XMLHttprequest 是不错的选择,  [主流浏览器几乎都支持到了 XHR](https://caniuse.com/#search=XMLHttpRequest)，缺点就是使用不方便以及在极限情况(页面关闭、页面跳转、浏览器关闭)下难以上报成功

### fetch

在不涉及跨域的情况下同样可以使用 fetch 来进行上报，其[浏览器支持情况](https://caniuse.com/#search=fetch), fetch 相对于 XHR 使用起来更加友好

###  new Image

利用图片上报是一种比较常用的方式，在浏览器中静态资源的获取本身就是支持跨域的，这样一来就不需要后端和前端配合来做额外的配置了，我们可以使用 
```javascript
 var img = new Image(1, 1);
 img.src=reportUrl
```
的方式将上报信息带在图片地址的参数里面用于上报，后端可以选择返回一张透明的小图片或者直接返回 204

###  navigator.sendBeacon

这是针对用户在使用浏览器时的各种极限情况例如关闭页面、离开页面或者关闭浏览器而导致上报不成功而推出的上报 API，sendBeacon 是异步且不会在页面关闭以后就停止上报，加上 sendBeacon 天然支持跨域，所以在浏览器支持良好的情况下可以优先选择这个 API，其[浏览器支持情况](https://caniuse.com/#search=sendBeacon)，可以看出 iOS safari 从 11.3 以后就开始支持这个 API 了，但是笔者在使用时发现，Android 6 以上的浏览器包括自带浏览器和微信浏览器都能上报成功，**而 iOS(12+) 版本的微信浏览器和 chrome 却几乎无法上报，而 iOS Safari 本身却表现良好。**
