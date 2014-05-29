function RestfulService(RestfulServiceURL, context){
	
		var singletonContextManager = ContextManagerSingleton.getInstance(context);

		$.ajax({ 
		   type: "GET",
		   dataType: "jsonp",
		   url: RestfulServiceURL,
		   success: function(data){
			 console.log(data);
			 
			 if (context == 'restfulService1'){
					singletonContextManager.restfulService1.restfulService1 = data;
					document.dispatchEvent(singletonContextManager.restfulService1ContextValueEvent);
					console.log( "RestfulService is fired -> Requested RestfulService is returned: restfulService1." );
				}
				else if (context == 'restfulService2'){
					singletonContextManager.restfulService2.restfulService2 = data;
					document.dispatchEvent(singletonContextManager.restfulService2ContextValueEvent);
					console.log( "RestfulService is fired -> Requested RestfulService is returned: restfulService2." );
				}
				else if (context == 'restfulService3'){
					singletonContextManager.restfulService3.restfulService3 = data;
					document.dispatchEvent(singletonContextManager.restfulService3ContextValueEvent);
					console.log( "RestfulService is fired -> Requested RestfulService is returned: restfulService3." );
				}
				else if (context == 'restfulService4'){
					singletonContextManager.restfulService4.restfulService4 = data;
					document.dispatchEvent(singletonContextManager.restfulService4ContextValueEvent);
					console.log( "RestfulService is fired -> Requested RestfulService is returned: restfulService4." );
				}
				else if (context == 'restfulService5'){
					singletonContextManager.restfulService5.restfulService5 = data;
					document.dispatchEvent(singletonContextManager.restfulService5ContextValueEvent);
					console.log( "RestfulService is fired -> Requested RestfulService is returned: restfulService5." );
				}
			 
		   }
		});
		
}




