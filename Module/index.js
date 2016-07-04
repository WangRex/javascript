var Calculator = function(eq) {
    //这里可以声明私有成员

    // var eqCtl = document.getElementById(eq);

    return {
        //暴露公开的成员
        add: function(x, y) {
            var val = x + y;
            // eqCtl.innerHTML = val;
            console.log(val);
        }
    };
}();

// var calculator = new Calculator("test");
// calculator.add(2,2);

Calculator.add(3, 3);

/*var blogModule = (function() {
    var my = {},
        _privateName = "cnblog";

    function _privateAddTopic(data) {
        _privateName = data;
    }
    my.Name = _privateName;
    my.AddTopic = function(data) {
        _privateAddTopic(data);
    }
    my.UpdateTopic = function(data) {
        my.Name = data;
    }

    return my;

}());

console.log(blogModule);
console.log(blogModule.Name);
blogModule.UpdateTopic("Rex");
console.log(blogModule.Name);*/







var blogModule = (function(bm) {
	console.log(bm);

	/*if(!bm) {
		bm = {};
	}*/
    bm.extendFunc = function() {
        console.log("This is the extend function!");
    }
    return bm;
}(blogModule || {}));

blogModule.extendFunc();

var blogModule = (function (my) {
    var oldExtendFuncMethod = my.extendFunc;

    my.extendFunc = function (param1) {
        // 重载方法，依然可通过oldAddPhotoMethod调用旧的方法
        console.log("This is the extend function!" + param1);
    };

    return my;
} (blogModule));

blogModule.extendFunc();
blogModule.extendFunc(111);