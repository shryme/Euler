

function isPand(n, min, max) {

}








function notify() {
	if (Notification.permission !== "granted")
		Notification.requestPermission();
	else {
		var notification = new Notification('Notification title', {
			body: "Hey there! You've been notified!",
		});
	}
}
