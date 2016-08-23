// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById("loadQuote").addEventListener("click", printQuote, false);
document.getElementById("loadQuote").addEventListener("click", changeColor, false);
document.getElementById("autoQuote").addEventListener("click", startAutoQuote, false);
document.getElementById("autoQuote").addEventListener("click", changeColor, false);

// Global variables
// Created array of quotes. 

var quote = [
	{
		quote: 'Where there is great power there is great responsibility',
		source: 'Sir Winston Churchill',
		citation: 'In the House of Commons',
		year: 1906,
		tags: 'Inspiration'
	},
	{
		quote: 'What is the use of living, if it be not to strive for noble' + 
		'causes and to make this muddled world a better place for those who will live in it after we are gone?',
		source: 'Sir Winston Churchill',
		citation: 'Speech at Kinnaird Hall, Dundee, Scotland',
		year: 1908,
		tags: 'Inspiration'
	},
	{
		quote: '[The] truth is incontrovertible. Panic may resent it, ignorance may deride it, malice may distort it, but there it is.',
		source: 'Sir Winston Churchill',
		citation: 'Speech in the House of Commons',
		year: 1916,
		tags: 'Reality Check'
	},
	{
		quote: 'Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.',
		source: 'Sir Winston Churchill',
		citation: 'Speech at Lord Mayor’s Luncheon, Mansion House, London',
		year: 1942,
		tags: 'Reality Check'
	},
	{
		quote: 'The inherent vice of capitalism is the unequal sharing of blessings. The inherent virtue of Socialism is the equal sharing of miseries',
		source: 'Sir Winston Churchill',
		citation: 'Speech in the House of Commons',
		year: 1945,
		tags: 'Reality Check'
	},
	{
		quote: 'When I was younger I made it a rule never to take strong drink before lunch. It is now my rule never to do so before breakfast',
		source: 'Sir Winston Churchill',
		tags: 'Alcoholism'
	},
];

// set a global variable here, so the all quotes displayed function isn't required in printQuote()
var usedQuotes = [];
var autoQuoteOn = false;
var cancelInterval;

// functions
// This function creates and HTML string for the innerHTML assignment
function printQuote() {
	displayedQuote = getRandomQuote();
	setHTML(displayedQuote);
}

// This function gets the random quote. Using a little recurururursion :-) 
 function getRandomQuote () {
 	var i = Math.floor(Math.random()*quote.length);
 	if (usedQuotes.length !== quote.length) {
 		var returnedQuote = quote[i];
 		if (usedQuotes.indexOf(i) === -1){
 		usedQuotes.push(i);	
 	} else {
 		return getRandomQuote();
 	}
 	} else {
 		usedQuotes = [];
 		return getRandomQuote();
 	}
 	return returnedQuote;
}

// autoquote section 
function setAutoQuote(){
	setHTML(getRandomQuote());
	changeColor();
}

// set it to 3 seconds so the for a greater level of quote generating action. 
function startAutoQuote() {
	if (!autoQuoteOn) {
		console.log('in here');
		printQuote();
		cancelInterval = setInterval(setAutoQuote, 3000);
		document.getElementById("autoQuote").innerHTML = "Turn off Autoquote";
		autoQuoteOn = true;
	} else {
		console.log("in there");
		clearInterval(cancelInterval);
		document.getElementById("autoQuote").innerHTML = "Turn on Autoquote";
		autoQuoteOn = false;
	}
}


// This function changes the background color. 
function changeColor() {
	var color = getRandomColor();
    document.body.style.backgroundColor = color;
    document.getElementById('loadQuote').style.backgroundColor = color;
    document.getElementById('autoQuote').style.backgroundColor = color;
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

// sets the html 
function setHTML(displayedQuote) {
	html = '<p class="quote">' + displayedQuote.quote + '</p>'; 
	html += '<p class="source">' + displayedQuote.source;
	// this feels a little weird testing for underfined in these two conditionals. I looked on Wc3 and they seem to endorse this
	if (displayedQuote['citation'] !== undefined) {
		html += '<span class="citation">' + displayedQuote.citation + '</span>';
	}
	if (displayedQuote['year'] !== undefined) {
		html += '<span class="citation">' + displayedQuote.year + '</span>';
	}
	html += '<span class="citation">' + displayedQuote.tags + '</span></p>';
	document.getElementById('quote-box').innerHTML = html;
}

