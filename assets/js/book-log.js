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
	if Rating, Book Genre, Reading Status are not provided, they will appear as " " in the file
*/
import Papa from 'papaparse';
import fs from 'fs';
const file = fs.createReadStream('log.csv');
let arrayOfBooks = [];

//const file = 'log.csv';

class Book {
	constructor(title, author, rating = " ", genre = " ", status = " ", partOfSeries = false, seriesName = " ", seriesNumber = " "){
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
	set seriesNumber(seriesNumber){
		this.seriesNumber = seriesNumber;
	}
	
}
Papa.parse(file, {
	complete: function(results) {
		header: false
		delimiter: ",",
		console.log("Finished:", results.data);
		arrayAssign(results.data);
	}
});
function createBooks(results) {
  
}