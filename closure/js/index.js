$(document).ready(function() {
    var spans = $("#divTest span");
    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function(i) {
        	console.log(i);
            alert(i);
        }
    }



    function showHelp(help) {
        document.getElementById('help').innerHTML = help;
    }

    function makeHelpCallback(help) {
        return function() {
            showHelp(help);
        };
    }

    function setupHelp() {
        var helpText = [{
            'id': 'email',
            'help': 'Your e-mail address'
        }, {
            'id': 'name',
            'help': 'Your full name'
        }, {
            'id': 'age',
            'help': 'Your age (you must be over 16)'
        }];

        for (var i = 0; i < helpText.length; i++) {
            var item = helpText[i];
            document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
        }
    }

    setupHelp();
});


function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

function setupSomeGlobals() {
    // Local variable that ends up within closure
    var num = 666;
    // Store some references to functions as global variables
    gAlertNumber = function() { alert(num); }
    gIncreaseNumber = function() { num++; }
    gSetNumber = function(x) { num = x; }
}

/*setupSomeGlobals();
gIncreaseNumber();
gAlertNumber(); // 667
gSetNumber(5);
gAlertNumber(); // 5

var oldAlert = gAlertNumber;

setupSomeGlobals();
gAlertNumber(); // 666

oldAlert() // 5*/

/*function checkClosure(){
    var str = 'rain-man';
    setTimeout(
        function(){ alert(str); } //这是一个匿名函数
    , 2000);
}
checkClosure();*/
