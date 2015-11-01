# Introduction #
In this section we will look at the development process for reasoner plug-ins while illustrating an example with the existing **BatteryAnalyser** module.

# Basics #
For the development of the sensor and reasoner modules, we use HTML5 APIs to implement context-sensors plug-ins that enable access to device-specific hardware information, along with additional APIs that enable acquisition of network-specific information from RESTful and SOAP Web services. Moreover, we exploit APIs of social networks to define web-based context-sensor modules that allow retrieving the user profile and other data.
# Development Process #
The Battery Analyser allows the application to adapt its functionality should the battery drop below a predefine cut-off point. In the example in Section 2 (link to it), this is accomplished by displaying results in a tabular format, a less hardware intensive alternative to Google maps, should the battery level drop below 30%. The development process for the Battery Analyser plugin is illustrated in the following steps:
  1. The Battery Analyzer  function takes two parameters; battery level and developer defined cut-off (line 1)
  1. As with all the modules, we first register the plugin to the Singleton ContextManager as an instance (line 3)
  1. We use a conditional if-statement to compare the batteryLevel and batterylevelCutoff parameters. If true (line 7) we assign the value “TRUE” to the instance we created and return the value (Line 9-13).
  1. Otherwise if false (line 15) we return “FALSE”.
![http://s29.postimg.org/lzfvtw1jr/jscodereasoner.jpg](http://s29.postimg.org/lzfvtw1jr/jscodereasoner.jpg)

## Development Guides ##
Refer to the following sections for development tutorials:
  * [Sensor Development](https://code.google.com/p/h5cm/wiki/SensorDevelopment)
  * [Reasoner Development](https://code.google.com/p/h5cm/wiki/ReasonerDevelopment)
  * [Application Development](https://code.google.com/p/h5cm/wiki/ApplicationDevelopment)