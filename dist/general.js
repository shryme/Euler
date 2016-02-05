

function isPand(n, min, max) {


}








function notify() {
	if (Notification.permission !== "granted")
		Notification.requestPermission();
	else {
		var notification = new Notification('Euler', {
			body: "Finished!!!",
		});
	}
}
