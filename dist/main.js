
var code = document.getElementById('code');

function start() {

	console.time("a");

	var res = execute();

	console.timeEnd("a");

	console.log("Result: ", res);
	code.innerHTML  = res;

	if (document.hidden)
		notify();
}

function test(value) {

	code.innerHTML = "";

}

function execute() {


	return "";
}


