var Calculator = function(eq) {
	//这里可以声明私有成员

	// var eqCtl = document.getElementById(eq);

	return {
		//暴露公开的成员
		add: function (x, y) {
			var val = x + y;
			// eqCtl.innerHTML = val;
			console.log(val);
		}
	};
}();

// var calculator = new Calculator("test");
// calculator.add(2,2);

Calculator.add(3,3);