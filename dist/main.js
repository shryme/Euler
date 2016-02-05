
var code = document.getElementById('code');

function start() {

	console.time("a");

	var res = execute();

	console.timeEnd("a");

	code.innerHTML  = res;
}

function test(value) {

	code.innerHTML  = "";
}

function execute() {

}

