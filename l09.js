/*
## HTTP COLLECT (Exercise 8 of 13)  
## JUGGLING ASYNC (Exercise 9 of 13)  
   
  This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments.  
*/

const bl = require('bl');
const http = require('http')
let arr=[];
if (!process.argv[2]) {console.log('No input parameter');}
else {
	for (let i=2;i<5;i+=1){
		http.get(process.argv[i], function (response) {
		response.setEncoding('utf8');
		response.pipe(bl((err, data)=>{
			if (err) {console.log(err);}
			else {
				arr[i-2] = data.toString();
				if (i === 4) {
					arr.reduce((s,e)=>{console.log(e)},[]);
				}
			}
		})) 
	});
}}
