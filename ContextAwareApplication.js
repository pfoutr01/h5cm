// main class ContextAwareApplication

// first thing is to get the Singleton instance of the ContextManager
var cms = ContextManagerSingleton.getInstance("application");

// define the scripts to be loaded
var scriptsURL = new Array("modules/sensors/GPSCoordinates.js", 
						   "modules/sensors/BatteryLevel.js",
						   "modules/sensors/BatteryIsCharging.js",
						   "modules/sensors/DeviceMotion.js",
						   "modules/sensors/DeviceOrientation.js",
						   "modules/sensors/NetworkStatus.js",
						   "modules/sensors/RestfulService.js",
						   "modules/sensors/WebService.js",
						   "modules/sensors/FacebookConnect.js",
						   "modules/sensors/FacebookInformation.js",
						   "modules/sensors/LinkedinConnect.js",
						   "modules/sensors/LinkedinInformation.js",
						   "modules/reasoners/FacebookPosts.js",
						   "modules/reasoners/BatteryAnalyser.js");

// Load scripts using Promises with jQuery getScript() 
// and wait until all dependencies are loaded
 loadDependencies(scriptsURL);

// this function will be called when the
// promises (all dependencies) are done loading 
function dependenciesLoaded(){
	initCAWApp();
};

	 function initCAWApp(){

		// to to call the GPSCoordinates module 
		GPSCoordinates();
		
		// Listen for the gpsContextValueEvent
		document.addEventListener('gpsContextValueEvent', function (e1) { 
			document.getElementById("gpsCoordinates").innerHTML = 
							"Latitude: " + cms.gpsLatitude.gpsLatitude + 
							" Longitude: " + cms.gpsLongitude.gpsLongitude;
		}, false);
		
		
		// to call the BatteryLevel module
		BatteryLevel();
	
		// Listen for the batteryLevelContextValueEvent
		document.addEventListener('batteryLevelContextValueEvent', function (e2) { 
		
		var bLevel = cms.batteryLevel.batteryLevel;
			document.getElementById("batteryLevel").innerHTML = 
							"Battery Level: " + bLevel;
							
			getBatteryLevelAnalysis(bLevel, 60);
		}, false);
		
		// to call the BatteryIsCharging module
		BatteryIsCharging();
	
		// Listen for the isBatteryChargingContextValueEvent
		document.addEventListener('isBatteryChargingContextValueEvent', function (e3) { 
			document.getElementById("isBatteryCharging").innerHTML = 
							"Is Battery Charging? : " + cms.isBatteryCharging.isBatteryCharging;
		}, false);
		
		// to call the DeviceMotion module
		DeviceMotion();
	
		// Listen for the deviceMotionContextValueEvent
		document.addEventListener('deviceMotionContextValueEvent', function (e4) { 
			document.getElementById("dm_rawAcceleration").innerHTML = 
							"dm_rawAcceleration: " + cms.dm_rawAcceleration.dm_rawAcceleration;
			document.getElementById("dm_tiltLR").innerHTML = 
							"dm_tiltLR: " + cms.dm_tiltLR.dm_tiltLR;
			document.getElementById("dm_tiltFB").innerHTML = 
							"dm_tiltFB: " + cms.dm_tiltFB.dm_tiltFB;
		}, false);
		
		// to call the DeviceOrientation module
		DeviceOrientation();
	
		// Listen for the deviceOrientationContextValueEvent
		document.addEventListener('deviceOrientationContextValueEvent', function (e5) { 
			document.getElementById("do_tiltLR").innerHTML = 
							"do_tiltLR: " + cms.do_tiltLR.do_tiltLR;
			document.getElementById("do_tiltFB").innerHTML = 
							"do_tiltFB: " + cms.do_tiltFB.do_tiltFB;
			document.getElementById("do_direction").innerHTML = 
							"do_direction: " + cms.do_direction.do_direction;
		}, false);
		
		
		FacebookConnect('email, user_birthday', 
		'https://dl.dropboxusercontent.com/u/1861685/H5M-QPromises-CustomEvent/assets/fb/channel.html');
		showstuff('fbLogin');
			
		document.addEventListener('facebookConnectContextValueEvent', function (e6) { 
				var fbStatus = cms.facebookConnect.facebookConnect;
				if (fbStatus == "user_connected"){
					hidestuff('fbLogin');
					FacebookIsConnected();
					showstuff('fbLogout');
				}
				else if (fbStatus == "login_cancelled"){
					alert('Login to use the application.');
				}
				else if (fbStatus == "user_logout"){
					hidestuff('fbLogout');
					showstuff('fbLogin');
				}
		}, false);

		
		LinkedinConnect();
			
		document.addEventListener('linkedInConnectContextValueEvent', function (e7) { 
				var liStatus = cms.linkedInConnect.linkedInConnect;
				
				if (liStatus == "user_connected"){
					LinkedinIsConnected();
				}
				else if (liStatus == "login_cancelled"){
					alert('Login to use the application.');
				}
				else if (liStatus == "user_logout"){
					hidestuff('liInfo');
				}
		}, false);
		
		
		NetworkStatus();
		document.getElementById("networkStatus").innerHTML = cms.networkStatus.networkStatus;
		
		
		// to get the initial value of the WebService response
		var wsURL = ['http://www.webservicex.net/globalweather.asmx/GetWeather', // web service function URL
						"CityName", "Barcelona", "CountryName", "Spain"]; // web service function parameters
		WebService(wsURL, 'webService1');

		// to handle events when the WebService value changes
		document.addEventListener('webService1ContextValueEvent', function (e8) { 
				var weather = cms.webService1.webService1;
				document.getElementById("webService1").innerHTML = weather;
		}, false);
		
		
		// freegeoip.net is a public RESTful web service API for searching geolocation of IP addresses and host names.
		var restfulURL1 = 'http://freegeoip.net/json/';
		RestfulService(restfulURL1, 'restfulService1');
		
		// to handle events when the RESTfulService value changes
		document.addEventListener('restfulService1ContextValueEvent', function (e8) { 
				var location = cms.restfulService1.restfulService1;
				document.getElementById("restfulService1").innerHTML = 'Country Name: ' + location.country_name + ', IP: ' + location.ip;
				
				callRestfulService2(location.latitude,location.longitude);
		}, false);
		
		
		
		
	}
	
	function FacebookIsConnected(){
	
		var fbData =new Array("name","email","gender","username","birthday");
		// to get the initial value of the FacebookInfo
		FacebookInformation(fbData);
		
		document.addEventListener('facebookInfoContextValueEvent', function (e9) { 
			var fbInfo = cms.facebookInfo.facebookInfo; 
			console.log("fbInformation: " + fbInfo);
			var fbInfoData = fbInfo.split("@%@");
			var fb_data = 'Good to see you, ' + fbInfoData[0] + '.' + 
			' Email: ' + fbInfoData[1] + '.' + ' Gender: ' + fbInfoData[2] + '.' +
			' Username: ' + fbInfoData[3] + '.' + ' Birthday: ' + fbInfoData[4] + '.';
			
			var picture = 'https://graph.facebook.com/' + fbInfoData[3] + '/picture?type=large'
			
			appendImageToElement('fbInfo', picture, 200, 200, 'FB Profile Picture');
			
			if (fbInfo)
				document.getElementById("fbInfo").style.display = "block";
			
			document.getElementById("facebookInfo").innerHTML = fb_data;
		}, false);
		
		
		// to call the FacebookPosts reasoner module
		FacebookPosts();
	
		// Listen for the facebookPostsContextValueEvent
		document.addEventListener('facebookPostsContextValueEvent', function (e10) { 
			document.getElementById("facebookPosts").innerHTML = 
							"FacebookPosts: " + cms.facebookPosts.facebookPosts;
		}, false);
	
	}
	
	function LinkedinIsConnected(){
	
	
		var inData = new Array("id", "firstName", "lastName", "pictureUrl", "positions", "skills", "industry");
		LinkedinInformation(inData);
		
		
		document.addEventListener('linkedInInfoContextValueEvent', function (e11) { 
			var liInfo = cms.linkedInInfo.linkedInInfo; 
			console.log("liInformation: " + liInfo);
			var liInfoData = liInfo.split("@%@");
			var li_data = 'Good to see you, ' + liInfoData[0] + '.' + 
			' Employement Status: ' + liInfoData[1] + '.' + ' Field: ' + liInfoData[2] + '.' +
			' Expertise: ' + liInfoData[3] + '.';
			
			if (liInfo)
				document.getElementById("liInfo").style.display = "block";
				
			document.getElementById("linkedInInfo").innerHTML = li_data;
		}, false);
	
	}
	
	function callRestfulService2(latitude,longitude){
	
		// freegeoip.net is a public RESTful web service API for searching geolocation of IP addresses and host names.
		var restfulURL2 = 'https://api.forecast.io/forecast/cb62a7d0d848ee5b56245de83d1013d6/' + latitude + ',' + longitude;
		RestfulService(restfulURL2, 'restfulService2');
		
		// to handle events when the RESTfulService value changes
		document.addEventListener('restfulService2ContextValueEvent', function (e12) { 
				var weather = cms.restfulService2.restfulService2;
				document.getElementById("restfulService2").innerHTML = 'Current Weather: ' + weather.currently.summary + ', ' + 
																		'Current Temperature: ' + weather.currently.temperature + 'F';
		}, false);
	
	}
	
	function getBatteryLevelAnalysis(batteryLevel, cutOff){
		// to call the batteryLevel analysis module
		BatteryAnalyser(batteryLevel, cutOff);		
		
		// to handle events when the batteryLevel analysis is received
		document.addEventListener('batteryAnalyserContextValueEvent', function (e13) { 
				var reasoning = cms.batteryAnalyser.batteryAnalyser;
				document.getElementById("batteryAnalyser").innerHTML = '(>=' + cutOff + '): ' +reasoning;
		}, false);
	
	
	}