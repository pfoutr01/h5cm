var singletonContextManager = ContextManagerSingleton.getInstance("facebookPosts");

    function FacebookPosts() {
		
		console.log('Welcome!  Fetching your information.... ');
		FB.api('/me', function(response) {
			console.log('Good to see you, ' + response.name + '.');
		});
		FB.api('/me?fields=posts.fields(id,message, place)', { limit: 3 }, reply);
			
	}
  
	function reply(data) {
	  
	  // how to parse multi-dimensional JSON object - example  
	  // var obj2 = JSON.parse('{"work":[{"employer":{"id":"185998961446429","name":"Pvt Ltd"}}]}');
	  // alert("Parsing with Json : " + JSON.stringify(obj2.work[0].employer.name));
	  var restaurants = new Array();
	  var j = 0; 
	  var result = JSON.stringify(data);
					console.log( 'Result: ' +  result);
					
					var obj1 = JSON.parse(result);
					
				  for (var i=0, l=obj1.posts.data.length; i<l; i++) {
					var post = obj1.posts.data[i];
					if (post.place != undefined){
					   // console.log( 'Restaurant: ' + post.place.name );
						restaurants[j] = post.place.name;
						j++;
					}
				  }
				  console.log( 'Restaurants length: ' + restaurants.length );
				  for (var i=0; i < restaurants.length; i++) {
					console.log( 'Restaurant: ' + restaurants[i] );
				  }
				  
				  singletonContextManager.facebookPosts.facebookPosts = restaurants.toString();	
				  document.dispatchEvent(singletonContextManager.facebookPostsContextValueEvent);
				  console.log( "FacebookPosts is fired -> Requested FacebookPosts is returned." );
	}
	
	function fbPermissions(permissions){
				FB.login(function(response) {
					if (response.authResponse) {
						// The person logged into your app
					} 
				}, {scope: permissions});
	}
	