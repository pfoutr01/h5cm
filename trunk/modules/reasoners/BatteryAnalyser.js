// cut off value for the battery (e.g., if higher show information via gui (e.g., map), 
// otherwise display text (e.g., text based navigation instructions))
// status = TRUE OR FALSE
	
function BatteryAnalyser(batteryLevel, batteryLevelCutoff) {
	
	var singletonContextManager = ContextManagerSingleton.getInstance("batteryAnalyser");
	
	var level = parseInt(batteryLevel);
	
	if (batteryLevel>=batteryLevelCutoff) {
		var timer = setTimeout(function () {
			singletonContextManager.batteryAnalyser.batteryAnalyser = "TRUE";	
			document.dispatchEvent(singletonContextManager.batteryAnalyserContextValueEvent);
			console.log( "BatteryAnalyser is fired -> Requested BatteryAnalyser is returned: TRUE." );
		}, 100);
	}
	else if (batteryLevel<batteryLevelCutoff) {
		var timer = setTimeout(function () {
			singletonContextManager.batteryAnalyser.batteryAnalyser = "FALSE";	
			document.dispatchEvent(singletonContextManager.batteryAnalyserContextValueEvent);
			console.log( "BatteryAnalyser is fired -> Requested BatteryAnalyser is returned: FALSE." );
		}, 100);
	}

}