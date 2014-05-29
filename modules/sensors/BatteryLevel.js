function BatteryLevel() {
	  
		var singletonContextManager = ContextManagerSingleton.getInstance("batteryLevel");
		
	    // get the battery information
	    var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
		

		if (battery != undefined) {
			console.log( "BatteryLevel is fired -> Requested BatteryLevel is returned." );
				// this is for getting the battery level
				var bLevel = Math.round(battery.level * 100);
				
				// We're just going to simulate a 3-second delay since it takes some time
				// to get the battery level and fire the event when requested the first time
				var timer = setTimeout(function () {
					singletonContextManager.batteryLevel.batteryLevel = bLevel;
					document.dispatchEvent(singletonContextManager.batteryLevelContextValueEvent);
					console.log( "BatteryLevel first time request is fired -> Requested battery level is returned." );
				}, 100);
			
			// this is for monitoring the battery level when its increased or decreased
			battery.addEventListener("levelchange", updateBatteryStatus);
			
		}
		else {
			document.getElementById("batteryLevel").innerHTML =  "Not supported on your device or browser.";
		}
		
		function updateBatteryStatus() {
		console.log( "updateBatteryStatus is fired -> Requested BatteryLevel is returned." );
		
			var bLevel = Math.round(battery.level * 100);
			
			// this is for updating the battery level when its increased or decreased
			singletonContextManager.batteryLevel.batteryLevel = bLevel;
			document.dispatchEvent(singletonContextManager.batteryLevelContextValueEvent);
			console.log( "BatteryLevel updateBatteryStatus request is fired -> Requested battery level is returned." );
		}

}
