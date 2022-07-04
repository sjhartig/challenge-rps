# challenge-rps
TOP: Rock Paper Scissors

//PSUEDO

declare userAnswer variable

ask for user input, either rock, paper, or scissors

generate a random computerAnswer
	declare a random integer variable between 0 and 2
	if the variable is 0
		return rock
	else if the variable is 1
		return paper
	otherwise if the variable is 2
		return scissors

get both answers and compare userAnswer to computerAnswer
	if userAnswer is rock AND computerAnswer is rock
		return that the game was a draw
	else if userAnswer is rock AND computerAnswer is paper
		return that the user lost
	otherwise if the userAnswer is rock AND the computerAnswer is scissors
		return that the user won
		
