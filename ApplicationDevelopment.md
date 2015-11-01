# Introduction #
This section will demonstrate building a cross-platform mobile application using the H5CM framework. The development process is best illustrated with an example application. Specifically, we will be building an application which showcases the existing modules in an html table. Although this serves little practical purpose, it is useful for demonstrating the development process of invoking the plugin modules.

# Application Basics #
The example application will make use of the currently developed modules (refer to the [Project Home Summary](https://code.google.com/p/h5cm/) page for a comprehensive list).

# Example Application #
## Development ##
In the following steps, we will develop and deploy our example application.
  1. The front end application is stored within the ContextAwareApplication.html file located in the H5CM directory. This HTML file loads JavaScript code from the ContextAwareApplication.js file located within the same directory, which in turn makes use of the sensor and reasoner module scripts. All JavaScript are registered as single instances in the ContextManagerSinleton.js file located in the _'/context/ directory/'_. The data displayed is collected from various external factors (mobile device, environment, and so forth).  See the figure below for a diagram of the H5CM framework (three-tiered architecture).
    * ![http://s23.postimg.org/hyuq935fv/h5cmframework.jpg](http://s23.postimg.org/hyuq935fv/h5cmframework.jpg)
  1. Hence, in order to develop an application, we must first define the scripts to be loaded in the ContextAwareApplication.js file (assuming we have module plug-ins to work with). Open the ContextAwareApplication.js file with a text editor.
    * First register the application as an instance with the Singleton Context Manager. (Line 4)
    * Second define the scripts to be loaded within an array (lines 6-21)
    * Finally load the scriptsURL array using Promises with jQuery (line 24)
    * ![http://s29.postimg.org/bpcynqi8n/jscode1.jpg](http://s29.postimg.org/bpcynqi8n/jscode1.jpg)
  1. Once all promises are fulfilled and all dependencies have been loaded into the application, the initCAWapp(); function is invoked which initializes the module plug-ins.
  1. The initCAWapp(); function invokes specific module functions and adds event listeners to update the variables as they change. For example, in the code below calls the GPSCoordinates function and keeps track of changes in latitude and longitude. In a similar fashion, the batteryLevel module is called to return the battery level of the device. In addition to returning the battery level, the getBatteryLevelAnalysis function makes use of the BatteryAnalyser reasoner module which takes two parameters (battery level, predefined threshold) and returns a Boolean value depending on the battery level relative to the stated threshold. Note the use of the .innerHTML property, which will return the HTML content of the element it is attached to in both instances of these modules.
    * ![http://s9.postimg.org/5or7wonq7/jscode2.jpg](http://s9.postimg.org/5or7wonq7/jscode2.jpg)
  1. The remaining modules are invoked in similarly with the notable exception of Facebook and LinkedIn, which require login credentials to connect to user accounts and access profile information.
  1. The final step in development is writing the HTML file which will act as the front-end for the application. Once the required scripts are loaded in the `<head>` tags, the application’s functionality is developed within the `<body>` tags. In our case, we structure the information to be displayed in a table. Note the use of the `<output>` tags (a feature new in HTML5) which represents the result of a calculation, namely the scripts discussed in step 4. and 5. Once the HTML file is written, it is also possible to style the application using CSS. However, for the sake of simplicity we will forgo this step. Hence, we are ready for deployment.
    * ![http://s3.postimg.org/8ylf643xv/jscode3.jpg](http://s3.postimg.org/8ylf643xv/jscode3.jpg)
## Deployment ##
  1. Once the application scripts and front-end have been developed, paste the directory within the Dropbox public folder.
  1. With Dropbox connected and operational, right click on the HTML file created in step 6 of the previous section (in our case “ContextAwareApplication.html”) and select “Copy Public Link”. This link is the URL for the application.
  1. Note the HTML file contains three links to this file which are required to connect to Facebook. Replace these links with your own; otherwise the Facebook feature will not function as intended.
  1. In addition, locate the channel.html file within the /assets/fb/ directory and copy the public link for the channel.html file. Then located the FacebookConnect function in the ContextAwareApplication.html and ContextAwareApplication.js files and replace the link for the channel.html file with your own.
  1. The application can now be deployed. Copy the public link for the HTML file and open it on a mobile device. Note there may be compatibility issues with different devices and browsers. See below for a screenshot of our example application running in Firefox on a Samsung Tab 2.
![http://s27.postimg.org/42vv4m2oz/contextappexample.jpg](http://s27.postimg.org/42vv4m2oz/contextappexample.jpg)

## Development Guides ##
Refer to the following sections for development tutorials:
  * [Sensor Development](https://code.google.com/p/h5cm/wiki/SensorDevelopment)
  * [Reasoner Development](https://code.google.com/p/h5cm/wiki/ReasonerDevelopment)
  * [Application Development](https://code.google.com/p/h5cm/wiki/ApplicationDevelopment)