
var getWords = function(titles){
	words=[]
	titles.forEach(word=> {
		word=word.toLowerCase()
		word = word.replace(/[0-9]/g, '')
		word=word.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
		//getting rid of pollutants
		word=word.replace(/and|the|their|your|that|many|big|large|small|new|iii|fast|about|more|out|its|than|good|with|for|very/gi, ' ')
		word=word.replace(/\W/g, ' ')
		word=word.replace(/\s+/g, ' ')
		//getting rid of 1 and 2 letter words
		word=word.replace(/(\b(\w{1,2})\b(\s|$))/g,'')
		word=word.trim()
		word=word.split(' ')
		words.push(word)	
	});
	return words;
}

module.exports = getWords;