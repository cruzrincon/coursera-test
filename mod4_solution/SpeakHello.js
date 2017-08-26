(function (window) {

	var helloSpeaker = {}; //Init undefined helloSpeaker Object
	var speakWord = "Hello"; //Init speakWord String to "Hello"

	helloSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}; //Output "Hello {name of the person}"

	window.helloSpeaker = helloSpeaker; //Expose helloSpeaker Object to the Global Scope

})(window); //IIFE