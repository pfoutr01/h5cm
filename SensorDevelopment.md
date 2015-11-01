# Introduction #
In this section we will look at the development process for sensor plugins while illustrating examples with the existing **BatteryLevel** module.

# Basics #
For the development of the sensor and reasoner modules, we use HTML5 APIs to implement context-sensors plug-ins that enable access to device-specific hardware information, along with additional APIs that enable acquisition of network-specific information from RESTful and SOAP Web services. Moreover, we exploit APIs of social networks to define web-based context-sensor modules that allow retrieving the user profile and other data.

# Development Process #
The development of the **BatteryLevel** sensor module is described in the following steps, alongside its JavaScript code:

  1. Register the plugin to the Singleton ContextManager as an instance, which in turn attaches this context to the ContextListener (Line 3)
  1. Battery is assessed using one of the three web engines powering different browsers (Line 5)
  1. We use a conditional if else statement (line 7 & 20) to check that the function is supported on the device. If so we get the battery level (line 9) and return it to the instance we created in step 1. Otherwise we return an error if the function is not supported.
  1. As soon as the battery level change event is fired the updateBatteryStatus function is invoked (lines 24-32) that updates and distributes via the singleton ContextManager instance the new battery level to the application or reasoner depending on the application scenario.
  1. The script can then be invoked in the ContextAwareApplication.js scriptsURL array and loaded into the application.

![http://s30.postimg.org/8i72mafip/jscodesensor.jpg](http://s30.postimg.org/8i72mafip/jscodesensor.jpg)

## Development Guides ##
Refer to the following sections for development tutorials:
  * [Sensor Development](https://code.google.com/p/h5cm/wiki/SensorDevelopment)
  * [Reasoner Development](https://code.google.com/p/h5cm/wiki/ReasonerDevelopment)
  * [Application Development](https://code.google.com/p/h5cm/wiki/ApplicationDevelopment)