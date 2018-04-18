var re = /ab+c/;
var str = "aabcaaa babc";
re = /\babc/;
var regexp = new RegExp("\bab+c");
console.log(str.match(re));
console.log(regexp.test(str));


var myRe = /d(b+)d/g;
var myArray = myRe.exec("aacdbbdbsbz");
console.log(myArray.index);


String.prototype.getQuery = function (name) {
    var reg = new RegExp('(^|\\?|&)' + name + '=([^&]*|$)'), url = this.replace(/&/g, '&'), r = url.match(reg);
    return r === null ? null : unescape(r[2]);
}
var str = 'http://wpa.qq.com/msgrd?v=3&uin=1438344583&site=qq&menu=yes';
alert(str.getQuery('uin')); 