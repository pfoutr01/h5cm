function FacebookInformation(data) {
	
		var singletonContextManager = ContextManagerSingleton.getInstance("facebookInfo");
		
		  // Here we run the Graph API after login is successful. 
		  // This testAPI() function is only called in those cases. 
			//console.log('Welcome!  Fetching your information.... ');
			FB.api('/me', function(response) {
			
			 for (i=0;i<data.length;i++){
				 var data_next = data[i];
				 if (profile){
					var profile = profile + "@%@" + response[data_next];
				 }
				 else{
					var profile = response[data_next];
				 }
			 }
			  singletonContextManager.facebookInfo.facebookInfo = profile;	
			  document.dispatchEvent(singletonContextManager.facebookInfoContextValueEvent);
			  console.log( "FacebookInformation is fired -> Requested FacebookInformation is returned." );
			});
			
	}
