/*
## HTTP COLLECT (Exercise 8 of 13)  
   
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout).  
   
  The first line you write should just be an integer representing the number  
  of characters received from the server. The second line should contain the  
  complete String of characters sent by the server.  

*/

const bl = require('bl');
const http = require('http')
if (!process.argv[2]) {console.log('No input parameter');}
else {
	http.get(process.argv[2], function (response) {  
	response.setEncoding('utf8') 
	response.pipe(bl((err, data)=>{
		if (err) {console.log(err);}
		else {
			console.log(data.toString().length);
			console.log(data.toString()); 
		}
	})) 
});
}
