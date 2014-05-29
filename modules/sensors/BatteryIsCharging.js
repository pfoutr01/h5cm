
function BatteryIsCharging() {
      
		var singletonContextManager = ContextManagerSingleton.getInstance("isBatteryCharging");
	  
	    // get the battery information
	    var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
		
		if (battery != undefined) {
			console.log( "BatteryLevel is fired -> Requested BatteryLevel is returned." );
			// this is for getting the battery is charging status
			var isCharging = ((battery.charging) ? "true" : "false");
			
			// We're just going to simulate a 3-second delay since it takes some time
			// to get the battery is charging and fire the event when requested the first time
				var timer = setTimeout(function () {
					singletonContextManager.isBatteryCharging.isBatteryCharging = isCharging;
					document.dispatchEvent(singletonContextManager.isBatteryChargingContextValueEvent);
					console.log( "BatteryIsCharging first time request is fired -> Requested charging status is returned." );
				}, 100);
				
			
			// this is for monitoring the battery is charging when its plugged or unplugged
			battery.addEventListener("chargingchange", updateBatteryChargingStatus);
		
		}
	  else {
	
			console.log("Not supported on your device or browser.");
	
		}
		
		
		function updateBatteryChargingStatus() {
			var isCharging = ((battery.charging) ? "true" : "false");
			
			singletonContextManager.isBatteryCharging.isBatteryCharging = isCharging;
			document.dispatchEvent(singletonContextManager.isBatteryChargingContextValueEvent);
			console.log( "BatteryIsCharging updateBatteryChargingStatus request is fired -> Requested charging status is returned." );
		}

}
