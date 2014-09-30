function DeviceMotion() {
				
				var singletonContextManager = ContextManagerSingleton.getInstance("deviceMotion");
				if (window.DeviceMotionEvent) {
				console.log( "DeviceMotion is fired -> Requested DeviceMotion is returned." );
				window.addEventListener('devicemotion', function(eventData) {	
					// Grab the acceleration including gravity from the results
					var acceleration = eventData.accelerationIncludingGravity;

					// Display the raw acceleration data
					var rawAcceleration = "[" + Math.round(acceleration.x) + ", " + 
												Math.round(acceleration.y) + ", " + 
												Math.round(acceleration.z) + "]";

					// Z is the acceleration in the Z axis, and tells us if the device is facing up, or down
					var facingUp = -1;

					if (acceleration.z > 0) {
						facingUp = +1;
					}
					// Convert the value from acceleration to degress
					//   acceleration.x|y is the acceleration according to gravity, we'll assume we're on Earth and divide 
					//   by 9.81 (earth gravity) to get a percentage value, and then multiply that by 90 to convert to degrees.				
					var tiltLR = Math.round(((acceleration.x) / 9.81) * -90);
					var tiltFB = Math.round(((acceleration.y + 9.81) / 9.81) * 90 * facingUp);
					
					// changing and dispatching events here works
          singletonContextManager.dm_acceleration.dm_acceleration = acceleration;
					singletonContextManager.dm_rawAcceleration.dm_rawAcceleration = rawAcceleration;
					singletonContextManager.dm_tiltLR.dm_tiltLR = tiltLR;
					singletonContextManager.dm_tiltFB.dm_tiltFB = tiltFB;
					document.dispatchEvent(singletonContextManager.deviceMotionContextValueEvent);
					
					// need to check and debug to identify the reason why in the function
					// its not working
					//deviceMotionHandler(rawAcceleration, tiltLR, tiltFB);
				}, false);
			}
			else {
    			console.log( "DeviceMotion API not available or no such hardware!");
	   		}	   
	   		
	   		//return moAccel;
		
}

/**
function deviceMotionHandler (rawAcceleration, tiltLR, tiltFB) {
		// Display the acceleration and calculated values
		//document.getElementById("rawAcceleration").innerHTML = rawAcceleration;
		//document.getElementById("tiltLR").innerHTML = tiltLR;
		//document.getElementById("tiltFB").innerHTML = tiltFB;
		singletonContextManager.rawAcceleration.rawAcceleration = rawAcceleration;
		singletonContextManager.tiltLR.tiltLR = tiltLR;
		singletonContextManager.tiltFB.tiltFB = tiltFB;
		document.dispatchEvent(singletonContextManager.deviceMotionContextValueEvent);
		
		// Apply the 2D rotation and 3D rotation to the image
		//var rotation = "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB) + "deg)";
		//document.getElementById("imgRawkes").style.webkitTransform = rotation;    
}*/