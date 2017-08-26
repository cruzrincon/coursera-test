(function (window) {

	var byeSpeaker = {}; //Init undefined bySpeaker Object
	var speakWord = "Good Bye"; //Init speakWord String to "Good Bye"

	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}; //Output "Good Bye {name of the person}"

	window.byeSpeaker = byeSpeaker; //Expose byeSpeaker Object to the Global Scope

})(window); //IIFE