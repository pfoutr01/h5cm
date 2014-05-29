
function DeviceOrientation() {
			var singletonContextManager = ContextManagerSingleton.getInstance("deviceOrientation");
			
        if (window.DeviceOrientationEvent) {
				console.log( "DeviceOrientation is fired -> Requested DeviceOrientation is returned." );
				// Listen for the deviceorientation event and handle the raw data
				window.addEventListener('deviceorientation', function(eventData) {
					
					// gamma is the left-to-right tilt in degrees, where right is positive
					var tiltLR = eventData.gamma;
					// beta is the front-to-back tilt in degrees, where front is positive
					var tiltFB = eventData.beta;

					// alpha is the compass direction the device is facing in degrees
					var direction = eventData.alpha;
		
					// changing and dispatching events here works
					singletonContextManager.do_tiltLR.do_tiltLR = tiltLR;
					singletonContextManager.do_tiltFB.do_tiltFB = tiltFB;
					singletonContextManager.do_direction.do_direction = direction;
					document.dispatchEvent(singletonContextManager.deviceOrientationContextValueEvent);
					
					// need to check and debug to identify the reason why in the function
					// its not working
					// call our orientation event handler
					//deviceOrientationHandler(tiltLR, tiltFB, direction);
					}, false);
					
			}  else if (window.OrientationEvent) {
				console.log( "DeviceOrientation is fired -> Requested DeviceOrientation is returned." );
				window.addEventListener('MozOrientation', function(eventData) {
					
					// x is the left-to-right tilt from -1 to +1, so we need to convert to degress
					var tiltLR = eventData.x * 90;

					// y is the front-to-back tilt from -1 to +1, so we need to convert to degress
					// We also need to invert the value so tilting the device towards us (forward) 
					// results in a positive value. 
					var tiltFB = eventData.y * -90;
					
					// MozOrientation does not provide this data
					var direction = null;

					// changing and dispatching events here works
					singletonContextManager.do_tiltLR.do_tiltLR = tiltLR;
					singletonContextManager.do_tiltFB.do_tiltFB = tiltFB;
					singletonContextManager.do_direction.do_direction = direction;
					document.dispatchEvent(singletonContextManager.deviceOrientationContextValueEvent);
					
					// need to check and debug to identify the reason why in the function
					// its not working
					// call our orientation event handler
					//deviceOrientationHandler(tiltLR, tiltFB, direction);
					}, false);

			} 
			else {
    			return "DeviceOrientation API not available or no such hardware!";
	   		}	   
	   		
}

		
function deviceOrientationHandler(tiltLR, tiltFB, dir) {

	// Display the values
	document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
	document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
	document.getElementById("doDirection").innerHTML = Math.round(dir);

	// Apply the transform to the image
	document.getElementById("imgLogo").style.webkitTransform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
	document.getElementById("imgLogo").style.MozTransform = "rotate("+ tiltLR +"deg)";
	document.getElementById("imgLogo").style.transform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
}