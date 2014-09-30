function loadDependencies(scriptsURL){
	// *** Create an array to hold our promises
            var promises = [ ];
			
            for (var i=0; i < scriptsURL.length; i++){ 
                // *** Store the promise returned by getSizeSettingsFromPage in a variable
                promise = $.getScript( scriptsURL[i] );
				
                promise.then(function(scriptsURL) {
                    // *** When the promise is resolved
                    //console.log('Loading dependency: ' + scriptsURL[i] + ' OK!');
                });
				
                // // *** Add the promise returned by getScript to the array
                promises.push(promise);
            }
            // *** Call dependenciesLoaded after all promises have been resolved
            Q.all(promises).then(dependenciesLoaded);
}

var ContextManagerSingleton = (function () {

    var instance;

    function createInstance() {
        // create the singleton object context manager instance
		var object = new Object("ContextManagerSingleton Instance.");	
		// create the custom context events for the context manager
		object.gpsContextValueEvent;
		object.batteryLevelContextValueEvent;
		object.isBatteryChargingContextValueEvent;
		object.deviceMotionContextValueEvent;
		
		// create the helper variables for the context manager
		object.wsCounter = 0;
		object.restfulCounter = 0;	
		
		
		instance = object;
    }
	
    return {
        getInstance: function (context) {

			if (!instance) {
				console.log('creating the ContextManagerSingleton instance.');
			
				// *** Create an array to hold our promises
				var promises = [ ];
				var scriptsURL = new Array("context/ContextUI_Utilities.js");
				
				for (var i=0; i < scriptsURL.length; i++){ 
					// *** Store the promise returned by getSizeSettingsFromPage in a variable
					promise = $.getScript( scriptsURL[i] );
					
					promise.then(function(scriptsURL) {
						// *** When the promise is resolved
						//console.log('Loading dependency: ' + scriptsURL[i] + ' OK!');
					});
					
					// // *** Add the promise returned by getScript to the array
					promises.push(promise);
				}
				// *** Call dependenciesLoaded after all promises have been resolved
				Q.all(promises).then(createInstance());
            }
			
			if (context == "batteryLevel"){
				instance.batteryLevel = { batteryLevel: "context" };
				
				instance.batteryLevelContextValueEvent = new CustomEvent("batteryLevelContextValueEvent", {
					detail: { message: "batteryLevelContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true	}
				);
				console.log("batteryLevel context property initialised");
			}
			else if (context == "isBatteryCharging"){
				instance.isBatteryCharging = { isBatteryCharging: "context" };
				
				instance.isBatteryChargingContextValueEvent = new CustomEvent("isBatteryChargingContextValueEvent", { 
					detail: { message: "isBatteryChargingContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true	}
				);
				console.log("isBatteryCharging context property initialised");
			}
			else if (context == "gpsCoordinates"){
				instance.gpsLongitude = { gpsLongitude: "context" };
				instance.gpsLatitude = { gpsLatitude: "context" };
				
				instance.gpsContextValueEvent = new CustomEvent("gpsContextValueEvent", {
					detail: { message: "gpsContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
				);
				console.log("gpsCoordinates context property initialised");
			}
			else if (context == "deviceMotion"){
				instance.dm_rawAcceleration = { dm_rawAcceleration: "context" };
				instance.dm_tiltLR = { dm_tiltLR: "context" };
				instance.dm_tiltFB = { dm_tiltFB: "context" };
			
				instance.deviceMotionContextValueEvent = new CustomEvent("deviceMotionContextValueEvent", { 
					detail: { message: "deviceMotionContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
				);
				console.log("deviceMotion context property initialised");
			}
			else if (context == "deviceOrientation"){
				instance.do_tiltLR = { do_tiltLR: "context" };
				instance.do_tiltFB = { do_tiltFB: "context" };
				instance.do_direction = { do_direction: "context" };
			
				instance.deviceOrientationContextValueEvent = new CustomEvent("deviceOrientationContextValueEvent", { 
					detail: { message: "deviceOrientationContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
				);
				console.log("deviceOrientation context property initialised");
			}
			else if (context == "networkStatus"){
				instance.networkStatus = { networkStatus: "context" };
				instance.networkStatusContextValueEvent = new CustomEvent("networkStatusContextValueEvent", { 
					detail: { message: "networkStatusContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
				);
				console.log("networkStatus context property initialised");
			}
			else if (context == "facebookConnect"){
				instance.facebookConnect = { facebookConnect: "context" };
				instance.facebookConnectContextValueEvent = new CustomEvent("facebookConnectContextValueEvent", { 
					detail: { message: "facebookConnectContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
				);
				console.log("facebookConnect context property initialised");
			}
			else if (context == "facebookInfo"){
				instance.facebookInfo = { facebookInfo: "context" };
				instance.facebookInfoContextValueEvent = new CustomEvent("facebookInfoContextValueEvent", { 
					detail: { message: "facebookInfoContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
				);
				console.log("facebookInfo context property initialised");
			}
			else if (context == "linkedInConnect"){
				instance.linkedInConnect = { linkedInConnect: "context" };
				instance.linkedInConnectContextValueEvent = new CustomEvent("linkedInConnectContextValueEvent", { 
					detail: { message: "linkedInConnectContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
				);
				console.log("linkedInConnect context property initialised");
			}
			else if (context == "linkedInInfo"){
				instance.linkedInInfo = { linkedInInfo: "context" };
				instance.linkedInInfoContextValueEvent = new CustomEvent("linkedInInfoContextValueEvent", { 
					detail: { message: "linkedInInfoContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
				);
				console.log("linkedInInfo context property initialised");
			}
			else if (context.substring(0, 10) == "webService"){
				if (instance.wsCounter == 0){
					instance.webService1 = { webService1: "context" };
					instance.webService1ContextValueEvent = new CustomEvent("webService1ContextValueEvent", { 
					detail: { message: "webService1ContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
					);
					console.log("webService1 context property initialised");
					instance.wsCounter++;
				}
				else if (instance.wsCounter == 1){
					instance.webService2 = { webService2: "context" };
					instance.webService2ContextValueEvent = new CustomEvent("webService2ContextValueEvent", { 
					detail: { message: "webService2ContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
					);
					console.log("webService2 context property initialised");
					instance.wsCounter++;
				}
				else if (instance.wsCounter == 2){
					instance.webService3 = { webService3: "context" };
					instance.webService3ContextValueEvent = new CustomEvent("webService3ContextValueEvent", { 
					detail: { message: "webService3ContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
					);
					console.log("webService3 context property initialised");
					instance.wsCounter++;
				}
				else if (instance.wsCounter == 3){
					instance.webService4 = { webService4: "context" };
					instance.webService4ContextValueEvent = new CustomEvent("webService4ContextValueEvent", { 
					detail: { message: "webService4ContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
					);
					console.log("webService4 context property initialised");
					instance.wsCounter++;
				}
				else if (instance.wsCounter == 4){
					instance.webService5 = { webService5: "context" };
					instance.webService5ContextValueEvent = new CustomEvent("webService5ContextValueEvent", { 
					detail: { message: "webService5ContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
					);
					console.log("webService5 context property initialised");
					instance.wsCounter++;
				}
			}
			else if (context.substring(0, 14) == "restfulService"){
				if (instance.restfulCounter == 0){
					instance.restfulService1 = { restfulService1: "context" };
					instance.restfulService1ContextValueEvent = new CustomEvent("restfulService1ContextValueEvent", { 
					detail: { message: "restfulService1ContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
					);
					console.log("restfulService1 context property initialised");
					instance.restfulCounter++;
				}
				else if (instance.restfulCounter == 1){
					instance.restfulService2 = { restfulService2: "context" };
					instance.restfulService2ContextValueEvent = new CustomEvent("restfulService2ContextValueEvent", { 
					detail: { message: "restfulService2ContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
					);
					console.log("restfulService2 context property initialised");
					instance.restfulCounter++;
				}
				else if (instance.restfulCounter == 2){
					instance.restfulService3 = { restfulService3: "context" };
					instance.restfulService3ContextValueEvent = new CustomEvent("restfulService3ContextValueEvent", { 
					detail: { message: "restfulService3ContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
					);
					console.log("restfulService3 context property initialised");
					instance.restfulCounter++;
				}
				else if (instance.restfulCounter == 3){
					instance.restfulService4 = { restfulService4: "context" };
					instance.restfulService4ContextValueEvent = new CustomEvent("restfulService4ContextValueEvent", { 
					detail: { message: "restfulService4ContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
					);
					console.log("restfulService4 context property initialised");
					instance.restfulCounter++;
				}
				else if (instance.restfulCounter == 4){
					instance.restfulService5 = { restfulService5: "context" };
					instance.restfulService5ContextValueEvent = new CustomEvent("restfulService5ContextValueEvent", { 
					detail: { message: "restfulService5ContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
					);
					console.log("restfulService5 context property initialised");
					instance.restfulCounter++;
				}
			}
			else if (context == "facebookPosts"){
				instance.facebookPosts = { facebookPosts: "context" };
				instance.facebookPostsContextValueEvent = new CustomEvent("facebookPostsContextValueEvent", { 
					detail: { message: "facebookPostsContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
				);
				console.log("facebookPosts context property initialised");
			}
			else if (context == "batteryAnalyser"){
				instance.batteryAnalyser = { batteryAnalyser: "context" };
				instance.batteryAnalyserContextValueEvent = new CustomEvent("batteryAnalyserContextValueEvent", { 
					detail: { message: "batteryAnalyserContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
				);
				console.log("batteryAnalyser context property initialised");
			}
      else if (context == "activityRecognizer"){
				instance.activityRecognizer = { activityRecognizer: "context" };
				instance.activityRecognizerContextValueEvent = new CustomEvent("activityRecognizerContextValueEvent", { 
					detail: { message: "activityRecognizerContextValueEvent",time: new Date() },
						bubbles: true, cancelable: true }
				);
				console.log("ActivityRecognizer context property initialised");
			}
			else if (context == "application"){
				console.log("no action required. simply return singleton instance");
			}
			
			return instance;
        }
		
    };
	
})();