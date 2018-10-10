if("serviceWorker" in navigator) {
		navigator.serviceWorker.register("./sw.js").then(function() {
				console.log("Registration Successful!");
		})
			.catch(function() {
					console.log("Registration Failed!");
		});
}
