# HTML5 Context Middleware (H5CM) #
[![](https://h5cm.googlecode.com/svn/wiki/H5CM-2.png)](https://code.google.com/p/h5cm/)

---


Taking into consideration the necessity of providing cross-platform access to context information we have designed an HTML5 Context Middleware (H5CM) to allow developers to reuse existing sensor and reasoner modules making their code more compact. The implementation considers four basic requirements of modularity, extensibility, reusability and the "develop once deploy on any platform" approach.

Any technology should adapt to the end-users’ perspective and tailor applications to the context (i.e., location, situation, social data) using any smart device and platform. Realization of this smart vision demands mechanisms for ubiquitous and reliable acquisition, analysis and sharing of information to improve the experience of end-users, by anticipating user requirements while the end-user remains undisturbed by the underlying technology.

On a complementary dimension application developers should be supported by a transparent infrastructure and context modules that support and expedite cross-platform context-aware application development. For instance, context-acquisition from device components (e.g., device motion, battery level), information retrieved from social networks (e.g., Linkedin, Facebook), and network information (e.g., based on Cell ID, or Wi-Fi) must act as enablers of context-awareness, empowering applications to be adapted to end-user preferences and circumstances.

The H5CM was implemented using the HTML5 standard. The core middleware is based on the Context Manager object that manages the context sensor and reasoner plug-ins that were initially developed to provide access to various sources of context information. Developers are enabled via the modular architecture of the middleware to implement additional context sensor and/or reasoner plug-ins in order to extend the plug-ins repository of the middleware.

You can download and try H5CM from here: [H5CM v0.1](https://dl.dropboxusercontent.com/u/1861685/html5-context-middleware_v0.1.zip)

To provide a starting point for the use of H5CM we have defined an initial set of sensor and reasoner plugins. In terms of sensor modules:

1. Battery Level – it retrieves the battery level (e.g., 74%) and continues to monitor the level of the battery in case this is required by the application.

2. Device Motion – it tracks and returns acceleration data. When a device is being moved or rotated (i.e., accelerated), the “devicemotion” event is fired that provides acceleration data as a coordinate frame with three axes, x, y and z.

3. Geolocation – it allows detecting and continues monitoring the position of the user and returns the location in the form of GPS coordinates (i.e., latitude and longitude).

4. Restful Service – it allows connecting to Restful services. It requires passing as a parameter the URL of each service including any parameters the service may require.

5. Facebook Connect – it provides the means to request from the user to enter its credentials and to grant access for retrieving additional data (given in comma separated string values).

6. Facebook Information – it provides the means to acquire Facebook profile data of the user (i.e., public user data). As a prerequisite the user of the web application needs to provide Facebook credentials (Facebook Connect) to allow the application to access the requested data.

7. Linkedin Connect – it provides the means to request from the user to enter its credentials and to grant access for retrieving additional data (given in comma separated string values).

8. Linkedin Information – it provides the means to acquire Linkedin profile data of the user (i.e., public user data). As a prerequisite the user of the web application needs to provide Linkedin credentials (Linkedin Connect) to allow the application to access the requested data.

9. Facebook Posts – it provides the way to obtain Facebook wall posts of the user that refer only to restaurant places/locations that the user has visited in the past. Since the user is already authenticated with permissions for accessing posts information (see Facebook Connect) a list of restaurants is returned.

Reasoner examples of the H5CM include:

1. Battery Analyzer – it retrieves data from the existing Battery Level sensor and returns TRUE in case the application is able to handle computational intensive tasks based on a developer specified cutoff value (e.g., >60%) or FALSE otherwise.

2. Facebook Restaurants – it retrieves data from two sources: Google Places restaurants at a specific area and Facebook posts about restaurants a user has visited. It computes the intersection of the two sets in order to give user preferred restaurants employing also Facebook Connect and Facebook Posts.

## Getting Started with Development ##
Visit the wiki pages to learn how to start developing applications using H5CM.

  * [Getting Started](https://code.google.com/p/h5cm/wiki/GettingStarted)
  * [Sensor Development](https://code.google.com/p/h5cm/wiki/SensorDevelopment)
  * [Reasoner Development](https://code.google.com/p/h5cm/wiki/ReasonerDevelopment)
  * [Application Development](https://code.google.com/p/h5cm/wiki/ApplicationDevelopment)

### References ###
[“Enabling Cross-platform Mobile Application Development: A context-aware Middleware”](https://dl.dropboxusercontent.com/u/123935850/HTML5-Middleware.pdf)