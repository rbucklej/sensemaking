
var getScores = function(wordsFlat){
	var scores = wordsFlat.reduce(function(previous,current){
	    if (current in previous) {
	      previous[current] += 1;
	    }
	    else{
	        previous[current] = 1;      
	    }
    	return previous;
	},{});
	return scores;
} 	

module.exports = getScores;