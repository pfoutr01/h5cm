
function NetworkStatus() {
	   var singletonContextManager = ContextManagerSingleton.getInstance("networkStatus");
		
	   if (navigator.onLine) {
			singletonContextManager.networkStatus.networkStatus = "ONLINE";
			document.dispatchEvent(singletonContextManager.networkStatusContextValueEvent);
			console.log( "NetworkStatus is fired -> Requested NetworkStatus is returned: ONLINE." );
           return "ONLINE";
	   }
	   else if (navigator.onLine == undefined){
			singletonContextManager.networkStatus.networkStatus = "Network API not available!";
			document.dispatchEvent(singletonContextManager.networkStatusContextValueEvent);
			console.log( "NetworkStatus is fired -> Requested NetworkStatus is returned: Network API not available!" );
 
	   }	   
	    else {
			singletonContextManager.networkStatus.networkStatus = "OFFLINE";
			document.dispatchEvent(singletonContextManager.networkStatusContextValueEvent);
			console.log( "NetworkStatus is fired -> Requested NetworkStatus is returned: OFFLINE." );
	   }

}