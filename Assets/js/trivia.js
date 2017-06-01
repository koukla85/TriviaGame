/* Populate Questions*/

function populate() {
	if (quiz.isEnded ()){
		showScores();

	}
	
	else {
		//show question	

		var element= documents.getElementbyId("question");
		element.innerHtml=quiz.getQuestionIndex().text;

		//show choices
			var choices = quiz.getQuestionIndex().choices;
			for(var i=0; i< choices.length; i +++){

			var element = document.getElementbyId("choice" + i);
		}
	}
};

function guess(id, guess) {
	var button = document.getElementbyId();
	$("button").on("click",function()){
		quiz.guess(guess);
		populate();
	}
};


function showScores(){
		var gameOverHtml= "<h1>Results</h1>";
			gameOverHtml += "<h2 id='score'>Your scores:" + quiz.score + "</h2>";
		var element = document.getElementbyId("quiz");
		element.innerHTML= gameOverHtml;
		guess ("btn" + i, choices[i]);
	}

		showProgress();

	}
};


	var questions = [
	new Question ("What does Abu try to steal from the Cave of Wonders?",["A hat","A carpet","A ruby","A crown"] "A ruby");
	new Question ("What does Ariel collect?", ["Eels", "Shells", "Coins", "Human Items"] "Human Items");
	new Question ("What is the name of the mouse Cinderella rescues?",["Gus", "Vinny", "Tootie", "Chad"] "Gus");
	new Question ("What is name of Simba's mother?", ["Nala", "Zazu", "Sarabi", "Sarafina"] "Sarabi");
	new Question ("Who is Buzz Lightyear's arch-memesis?"["Supreme Leader Snort", "Emperor Zorg", "King Darkness", "Voldermort",] "Emperor Zorg");

	];	

	var quiz= new Quiz(questions);