(function () {

	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]; //Declare and populate array "names"

	for (var i = 0; i < names.length; i++) { //For Loop, parsing through "names" array
		var firstLetter = names[i].charAt(0).toLowerCase(); //Convert the first letter of every name to lowercase

		if (firstLetter === 'j') {
			byeSpeaker.speak(names[i]); //If first letter of name is 'j' execute byeSpeaker.speak({name of the person})
		} else {
			helloSpeaker.speak(names[i]); //If not, execute helloSpeaker.speak({name of the person})
		}
	}

})(); //IIFE
