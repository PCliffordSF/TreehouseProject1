// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById("loadQuote").addEventListener("click", changeColor, false);

// Created array of quotes. Global variable.

var quote = [
	{
		quote: 'Where there is great power there is great responsibility',
		source: 'Sir Winston Churchill',
		citation: 'In the House of Commons',
		year: 1906,
		tags: 'inspiration',
		displayed: false
	},
	{
		quote: 'What is the use of living, if it be not to strive for noble' + 
		'causes and to make this muddled world a better place for those who will live in it after we are gone?',
		source: 'Sir Winston Churchill',
		citation: 'Speech at Kinnaird Hall, Dundee, Scotland ("Unemployment")',
		year: 1908,
		tags: 'inspiration',
		displayed: false
	},
	{
		quote: '[The] truth is incontrovertible. Panic may resent it, ignorance may deride it, malice may distort it, but there it is.',
		source: 'Sir Winston Churchill',
		citation: 'Speech in the House of Commons',
		year: 1916,
		tags: 'reality',
		displayed: false
	},
	{
		quote: 'Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.',
		source: 'Sir Winston Churchill',
		citation: 'Speech at Lord Mayor’s Luncheon, Mansion House, London',
		year: 1942,
		tags: 'reality',
		displayed: false
	},
	{
		quote: 'The inherent vice of capitalism is the unequal sharing of blessings. The inherent virtue of Socialism is the equal sharing of miseries',
		source: 'Sir Winston Churchill',
		citation: 'Speech in the House of Commons',
		year: 1945,
		tags: 'reality',
		displayed: false
	},
	{
		quote: 'When I was younger I made it a rule never to take strong drink before lunch. It is now my rule never to do so before breakfast',
		source: 'Sir Winston Churchill',
		tags: 'alcoholism',
		displayed: false
	},
];

// This function creates and HTML string for the innerHTML assignment

function printQuote(quote) {
	if (allDisplayed() === true) {
		var displayedQuote = getRandomQuote();
	} else {
		do {
			var displayedQuote = getRandomQuote();
		} 
		while (displayedQuote.displayed === true)
		displayedQuote.displayed = true;
	}
	
	
	html = '<p class="quote">' + displayedQuote['quote'] + '</p>'; 
	html += '<p class="source">' + displayedQuote['source'];
	// this feels a little weird testing for underfined in these two conditionals. I looked on Wc3 and they seem to endorse this
	if (displayedQuote['citation'] !== undefined) {
		html += '<span class="citation">' + displayedQuote['citation'] + '</span>'
	}
	if (displayedQuote['year'] !== undefined) {
		html += '<span class="citation">' + displayedQuote['year'] + '</span>'
	}
	html += '</p>';
	document.getElementById('quote-box').innerHTML = html;
	return html;
}

// This function gets the random quote and checks if they have all been displayed. 

 function getRandomQuote () {
	var i = Math.floor(Math.random()*quote.length)
	var displayedQuote = quote[i];
 	return displayedQuote;
}

// tests to see if all the quotes have been displayed. 

function allDisplayed() {
	var allDisplayed = true;
	for (var i = 0; i < quote.length && allDisplayed === true; i++){
		if (quote[i].displayed === false){
			allDisplayed = false;
		}
	}
	return allDisplayed;
}

// This function changes the background color. 

function changeColor() {
	var color = getRandomColor();
    document.body.style.backgroundColor = color;
    document.getElementById('loadQuote').style.backgroundColor = color;
} 

// Lifted this function from StackExchange to get the random color

function getRandomColor() {
    var chars = '0123456789ABCDEF'.split('');
    var hex = '#';
    for (var i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
 }

// Resets the quotes to false

function resetQuotes(quote){
	for (var i = 1; i < quote.length; i++) {
		quote[i].displayed = false;
	}
}









// this is the RGBA random color code I wrote, but it looks like I need hex to set the color. 
//  function getRBGColor() {
// 	var color = 'rgba(';
// 		color += Math.floor(Math.random() * 266) + ',';
// 		color += Math.floor(Math.random() * 266) + ',';
// 		color += Math.floor(Math.random() * 266) + ');';
//  	return color;
// }


//  function getRandomQuote () {
//  	if (allDispolayed(quote) !== true){
//  		return quote[Math.floor(Math.random()*quote.length)]
//  		console.log
//  	}
// }