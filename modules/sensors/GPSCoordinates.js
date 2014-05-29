function GPSCoordinates() {

		var singletonContextManager = ContextManagerSingleton.getInstance("gpsCoordinates");
			
		if (navigator.geolocation != undefined) {
		    		      
			navigator.geolocation.getCurrentPosition(showPosition);
		}
		else {
			return "Not supported on your device or browser.";
		}	   
       

		function showPosition(position){
					
			singletonContextManager.gpsLatitude.gpsLatitude = position.coords.latitude;
			singletonContextManager.gpsLongitude.gpsLongitude = position.coords.longitude;

			document.dispatchEvent(singletonContextManager.gpsContextValueEvent);
			
			console.log( "GPSCoordinates showPosition is fired -> Requested position is returned." );
		}
		
		
		function monitorPosition(position){	   
			// Log that a newer, perhaps more accurate
			// position has been found.
			console.log( "monitorPosition is fired -> A new GPS Position was Found." );
 
			// Set the new position of the existing marker.
			singletonContextManager.gpsLatitude.gpsLatitude = position.coords.latitude;
			singletonContextManager.gpsLongitude.gpsLongitude = position.coords.longitude;

			document.dispatchEvent(singletonContextManager.gpsContextValueEvent);
			
			console.log( "GPSCoordinates monitorPosition is fired -> Requested position is returned." );
		}
		
}


