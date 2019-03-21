var cheerio=require('cheerio')
var getTitles = function(mitcourses){
	const $ = cheerio.load(mitcourses)
	var titles=[]
	$('h3').each(function(i,element){
		titles.push($(element).text())
	})
	return titles;
}

module.exports = getTitles;