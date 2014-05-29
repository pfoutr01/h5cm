function LinkedinConnect() {
	var singletonContextManager = ContextManagerSingleton.getInstance("linkedInConnect");
	IN.Event.on(IN, "auth", function() {onLinkedInLogin();});
	IN.Event.on(IN, "logout", function() {onLinkedInLogout();});

	function onLinkedInLogout() {
	  singletonContextManager.linkedInConnect.linkedInConnect = "user_logout";
	  document.dispatchEvent(singletonContextManager.linkedInConnectContextValueEvent);
	  console.log( "LinkedinConnect is fired -> Requested LinkedinConnect is returned: user_logout." );
	}

	function onLinkedInLogin() {
	  singletonContextManager.linkedInConnect.linkedInConnect = "user_connected";
	  document.dispatchEvent(singletonContextManager.linkedInConnectContextValueEvent);
	  console.log( "LinkedinConnect is fired -> Requested LinkedinConnect is returned: user_connected." );
	  // we pass field selectors as a single parameter (array of strings)
	}
}

