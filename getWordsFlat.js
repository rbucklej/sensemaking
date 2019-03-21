
var getWordsFlat = function(words){
	var wordsFlat = [].concat.apply([], words);	
	return wordsFlat;
}

module.exports = getWordsFlat;