var re = /ab+c/;
var str = "aabcaaa babc";
re = /\babc/;
var regexp = new RegExp("\bab+c");
console.log(str.match(re));
console.log(regexp.test(str));


var myRe = /d(b+)d/g;
var myArray = myRe.exec("aacdbbdbsbz");
console.log(myArray.index);