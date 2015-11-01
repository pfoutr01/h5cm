# Getting Started #
## Introduction ##
This section will illustrate the prerequisites required for the development of a context-aware application using the H5CM framework, as well as the folder structure for the source code.
  * Download the H5CM source code [here](https://dl.dropboxusercontent.com/u/1861685/html5-context-middleware_v0.1.zip).
  * For more information refer to “Enabling Cross-platform Mobile Application Development: A context-aware Middleware”. Download the paper [here](https://dl.dropboxusercontent.com/u/123935850/HTML5-Middleware.pdf).
## Prerequisites ##
In order to develop context-aware application using the H5CM framework you will need the following:
  * An understanding of modern web development technologies (JavaScript, HTML5, CSS3) and web services (SOAP, RESTful).
  * A sophisticated text editor such as Notepad++ or Sublime for development
  * A Dropbox account with access to the Public folder feature. Note: the Public folder is available to any “Basic” accounts created before July 31, 2012. Due to feature alterations in the Dropbox software, the Public folder is only available to “Pro” or “Business” accounts if the account was created after July 31, 2012
  * Latest build of the [H5CM software](https://dl.dropboxusercontent.com/u/1861685/html5-context-middleware_v0.1.zip)
  * (OPTIONAL) Reading the [paper](https://dl.dropboxusercontent.com/u/1861685/html5-context-middleware_v0.1.zip) is highly recommended, as it will afford the developer a more comprehensive understanding of the software’s architecture and framework
## Main Directory / Folder Structure ##
The H5CM project is designed for implementation and execution on HTML5 standard compatible browsers and makes use of a number of JavaScript plug-ins and files. As such, the main folders necessary to utilize the H5CM framework are listed below:
  * /Assets – Contains resources such as images and JS scripts, as well as a CSS file.
  * /Context – Contains JavaScript singleton and utilities.
  * /Modules – Contains reasoner and sensor module plug-ins
  * ContextAwareApplication.html – HTML file used to run application
  * ContextAwareApplication.js – JavaScript file which loads module/plug-in scripts
## Development Guides ##
Refer to the following sections for development tutorials:
  * [Sensor Development](https://code.google.com/p/h5cm/wiki/SensorDevelopment)
  * [Reasoner Development](https://code.google.com/p/h5cm/wiki/ReasonerDevelopment)
  * [Application Development](https://code.google.com/p/h5cm/wiki/ApplicationDevelopment)