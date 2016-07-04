//声明，因为它是程序的一部分
function foo() {};

//表达式，因为它是表达式的部分
var bar = function foo() {};

//表达式，因为它是new表达式
new function foo() {};

//声明，因为它是函数体的一部分
(function() {
    function foo() {};
});

//函数表达式：包含在分组操作符内
(function foo() {});

//分组操作符只能包含表达式，不能包含语句
try {
    (x = 5);
    console.log(x);
} catch (err) {
    console.log(err);
}

(function test() {console.log(111);})();