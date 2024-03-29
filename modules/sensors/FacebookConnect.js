var perms;

function FacebookConnect(permissions, channelFile){
	
	var singletonContextManager = ContextManagerSingleton.getInstance("facebookConnect");
	var flag = true;
	perms = permissions;
	 window.fbAsyncInit = function() {
		  FB.init({
			appId      : '393965014059845', // App ID
			channelUrl : channelFile, // Channel File
			status     : true, // check login status
			cookie     : true, // enable cookies to allow the server to access the session
			xfbml      : true  // parse XFBML
		  });
	
	
		  // Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired
		  // for any authentication related change, such as login, logout or session refresh. This means that
		  // whenever someone who was previously logged out tries to log in again, the correct case below 
		  // will be handled. 
		  FB.Event.subscribe('auth.authResponseChange', function(response) {
			// Here we specify what we do with the response anytime this event occurs. 
			if (response.status === 'connected') {
			  // The response object is returned with a status field that lets the app know the current
			  // login status of the person. In this case, we're handling the situation where they 
			  // have logged in to the app.
			  if (flag){
				singletonContextManager.facebookConnect.facebookConnect = "user_connected";
				document.dispatchEvent(singletonContextManager.facebookConnectContextValueEvent);
				console.log( "FacebookConnect is fired -> Requested FacebookConnect is returned." );
								
				FacebookPermissions(permissions);
				flag = false;
			  }
			  //window.location.replace('https://dl.dropboxusercontent.com/u/1861685/H5M/ContextAwareApplication.html');
			} 
		  });

		  FB.Event.subscribe('auth.logout', function(response) {
			// The person cancelled the login dialog
			singletonContextManager.facebookConnect.facebookConnect = "user_logout";
			document.dispatchEvent(singletonContextManager.facebookConnectContextValueEvent);
			//window.location.reload();
		  });
		
		};
	 
	// Load the SDK asynchronously
	  (function(d){
		   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		   if (d.getElementById(id)) {return;}
		   js = d.createElement('script'); js.id = id; js.async = true;
		   js.src = "//connect.facebook.net/en_US/all.js";
		   ref.parentNode.insertBefore(js, ref);
	  }(document));
	  
	  
 }


function FacebookLogin(redirectURI){
	
	var loginURI = 'https://www.facebook.com/login.php?skip_api_login=1&api_key=393965014059845&signed_next=1' + 
				'&next=https://www.facebook.com/dialog/oauth?redirect_uri=' + 
				 redirectURI + '%26client_id%3D393965014059845&scope=' + perms;

	window.location.replace(loginURI);
}

function FacebookLogout(redirectURI){
		
		FB.logout();
	
}

	
	function FacebookPermissions(permissions){
				FB.login(function(response) {
					if (response.authResponse) {
						// The person logged into your app
					} 
				}, {scope: permissions});
	}