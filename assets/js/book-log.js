/* Code to implement the logger functionality for the book log. 
Needs to pull from a .CSV file that contains the book log data and display it in a readable format on the webpage.
Using PapaParse to parse the .CSV file and create Book objects for each entry in the file.
*/

/* File Data Structure is as follows:
	Book Title, Book Author, Rating, Book Genre, Reading Status, Part Of Series, Series Name, Series Number
	Book Title, Book Author are required
	Rating, Book Genre, Reading Status, Part Of Series, Series Name, Series Number are optional
	   Rating = 1-5 stars
	   Book Genre = Fiction, Non-Fiction, Mystery, Fantasy, Science Fiction, Biography, etc.
	   Reading Status = Not Started, In Progress, Completed
	   Part Of Series = true/false
	   Series Name = name of the series if Part Of Series is true
	   Series Number = number in the series if Part Of Series is true
	if Rating, Book Genre, Reading Status are not provided, they will appear as "" in the file
*/
import Papa from 'papaparse';
import fs from 'fs';
let arrayOfBooks = [];
const bookContainer = document.getElementById('bookList');
//const file = 'log.csv';

class Book {
	constructor(title, author, rating = "", genre = "", status = "", partOfSeries = "FALSE", seriesName = "", seriesNumber = ""){
		this.title = title;
		this.author = author;
		this.rating = rating;
		this.genre = genre;
		this.status = status;
		this.partOfSeries = partOfSeries;
		this.seriesName = seriesName;
		this.seriesNumber = seriesNumber;
	}
	//Getters
	getTitle(){
		return this.title;
	}
	getAuthor(){
		return this.author;
	}
	getRating(){
		return this.rating;
	}
	getGenre(){
		return this.genre;
	}
	getStatus(){
		return this.status;
	}
	getPartOfSeries(){
		return this.partOfSeries;
	}
	getSeriesName(){
		return this.seriesName;
	}
	getSeriesNumber(){
		return this.seriesNumber;
	}
	//Setters
	setRating(rating){
		this.rating = rating;
	}
	setGenre(genre){
		this.genre = genre;
	}
	setStatus(status){
		this.status = status;
	}
	setPartOfSeries(partOfSeries){
		this.partOfSeries = partOfSeries;
	}
	setSeriesName(seriesName){
		this.seriesName = seriesName;
	}
	setSeriesNumber(seriesNumber){
		this.seriesNumber = seriesNumber;
	}
	//Create string from book data for sake of appending to CSV file
	bookString(){
		return `${this.title},${this.author},${this.rating},${this.genre},${this.status},${this.partOfSeries},${this.seriesName},${this.seriesNumber}`;
	}
	//Print book for test
	printBook(){
		console.log("Title: " + this.title);
		console.log("Author: " + this.author);
		if(this.rating != ""){
			console.log("Rating: " + this.rating);
		}
		if(this.genre != ""){
			console.log("Genre: " + this.genre);
		}
		if(this.status != ""){
			console.log("Status: " + this.status);
		}
		if(this.partOfSeries != "FALSE"){
			console.log("Part Of Series: " + this.partOfSeries);
			console.log("Series Name: " + this.seriesName);
			console.log("Series Number: " + this.seriesNumber);
		}
	}
}
//Function to pull data from csv file
function parseCSVFile(){
	const file = fs.createReadStream('log.csv');
	Papa.parse(file, { // Parameters for CSV file: , delimiter, \n newline
		header: false,
		delimiter: ",",
		newline: '\n',
		complete: function(results) {
			// Pass the parsed CSV data into the display books function
			displayBooks(results.data);
		}
	});
}
//Function to write a book to CSV file
function writeBookToCSV(book) {
	fs.appendFile('log.csv','\n'+book.bookString(),'utf8', (err) => {
		if (err) {
			console.error('Error writing to CSV file', err);
		} else {
			console.log('Book added to CSV file');
		}
	});
}

//Function to delete a book from CSV file
function deleteBookFromCSV(book) {
	fs.readFile('log.csv', 'utf8', (err, data) => {
		if (err) {
			console.error('Error reading CSV file', err);
			return;
		}
		const lines = data.split('\n');
		const filteredLines = lines.filter(line => line.trim() !== book.bookString());
		fs.writeFile('log.csv', filteredLines.join('\n'), (err) => {
			if (err) {
				console.error('Error writing to CSV file', err);
			} else {
				console.log('Book deleted from CSV file');
			}
		});
	});
}

// //Function to edit CSV file in accordance with editing a book on the site
// function editCSVFile(){

// }

//Function to assign data from csv file to Book objects and store them in an array, as well as display them
function displayBooks(results) {
	//Create Book Array for ease of use
	for(let i=0; i<results.length; i++){
		let book = new Book(results[i][0], results[i][1], results[i][2], results[i][3], results[i][4], results[i][5], results[i][6], results[i][7]);
		arrayOfBooks.push(book);
		//Print statements for testing purposes
		// book.printBook();
		// console.log(book.bookString());
	}
	// Use book array + Bootstrap5 Accordion to Display books on HTML page
	// Use a loop function to create Accordions for each book to display in
	let newHTML = ''
	let bookNum = arrayOfBooks.length;
    const parentId = `accordionExample`;
	for(let i =0; i<bookNum; i++){
		let collapseId = `collapse${arrayOfBooks[i]}`;
    	let headingId = `heading${arrayOfBooks[i]}`;
		newHTML +=	`
			<div class="accordion-item">
		        <h2 class="accordion-header" id="${headingId}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                        ${arrayOfBooks[i].getTitle()}
                    </button>
                </h2>
                <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" data-bs-parent="#${parentId}">
                    <div class="accordion-body">
                        <strong>Title: </strong> ${arrayOfBooks[i].getTitle()} <strong>Author: </strong> ${arrayOfBooks[i].getAuthor()}
						<strong>Genre: </strong> ${arrayOfBooks[i].getGenre()} <strong>Reading Status: </strong> ${arrayOfBooks[i].getStatus()}`;
		if(arrayOfBooks[i].getRating !== ''){
			newHTML+=	`
						<strong>Rating: </strong> ${arrayOfBooks[i].getRating()}`;
		}if(arrayOfBooks[i].getPartOfSeries()==="TRUE"){
			newHTML+=	`
						<strong>Series: </strong> ${arrayOfBooks[i].getSeriesName()} <strong>Series Number: </strong> ${arrayOfBooks[i].getSeriesNumber()}`;
		}
		newHTML +=`
                    </div>
                </div>
			</div>`;
	}
	console.log(newHTML);
	//bookContainer.insertAdjacentHTML('beforeend', newHTML);
}