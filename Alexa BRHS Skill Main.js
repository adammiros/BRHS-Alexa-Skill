"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  "PrincipleIntent": function () {
    this.response.speak("The current principle of Bordentown Regional Highschool is Robert Walder, as of 2017. ");
    this.emit(':responseReady');
  },
  "LaunchRequest": function () {
    this.response.speak("Hello, Welcome to the Bordentown Regional High School Alexa Skill. You can ask me who the principle is, what time does the school open, or even what the school's add is.").listen("What would you like to know?");
    this.emit(':responseReady');
  },
    'AMAZON.StopIntent': function() {
      this.response.speak('Thanks for stoping by, have a nice day!');
      this.emit(':responseReady');
  },

  // Cancel
  'AMAZON.CancelIntent': function() {
      this.response.speak('Ok, thanks for asking!');
      this.emit(':responseReady');
  },

  "PhoneIntent": function () {
      this.response.speak("Bordentown Regional High School's Phone number is 609-298-0025, again their phone number is 609-298-0025");
      this.emit(':responseReady');
  },

  "OpenAndCloseIntent": function () {
      this.response.speak("Bordentown Regional High School is open Monday through Friday, from 7 AM to 5 PM Eastern Standard time.");
      this.emit(':responseReady');
  },

  "AddressIntent": function () {
      this.response.speak("Bordentown Regional High School's address is 318 Ward Avenue, Bordentown, New Jersey, 08505");
      this.emit(':responseReady');
  }

};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
