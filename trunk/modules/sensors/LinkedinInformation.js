function LinkedinInformation(data) {
	var singletonContextManager = ContextManagerSingleton.getInstance("linkedInInfo");
	  
	IN.API.Profile("me")
		.fields(data)
		.result(function(result) {
			if (result.values.length > 0) {
				// for each position if no end date then employed else not employed
				// field we'll see
				// expertise 2-3 skills
				var profile = result.values[0].firstName + " " + result.values[0].lastName;
				
				var eStatus = "Unemployed";
				if (result.values[0].positions) {
				if (result.values[0].positions.values.length > 0)
					for (var p in result.values[0].positions.values)
					{
						if (!p.endDate)
							eStatus = "Employed";
					}
				}

				profile = profile + "@%@" + eStatus;
				profile = profile + "@%@" + result.values[0].industry;
				if (result.values[0].skills) {
				profile = profile + "@%@" + result.values[0].skills.values[0].skill.name 
						+ ", " + result.values[0].skills.values[1].skill.name 
						+ ", " + result.values[0].skills.values[2].skill.name;
				}
				singletonContextManager.linkedInInfo.linkedInInfo = profile;
				document.dispatchEvent(singletonContextManager.linkedInInfoContextValueEvent);
				console.log( "LinkedinInformation is fired -> Requested LinkedinInformation is returned: profile." );
			} else {
				singletonContextManager.linkedInInfo.linkedInInfo = null;
				document.dispatchEvent(singletonContextManager.linkedInInfoContextValueEvent);
				console.log( "LinkedinInformation is fired -> Requested LinkedinInformation is returned: null." );
			}
			  
			console.log(result);
		})
		.error(function(err) {
			alert(err);
		});
  
/*   if (!profile) {
    profHTML = "<p>You are not logged in</p>";
  }
  else {

  }
  document.getElementById("loginbadge").innerHTML = profHTML; */
}