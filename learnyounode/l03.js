/*Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument (i.e., process.argv[2]). You do not need to make  
  your own test file.  
.  
*/
const fs = require('fs');

if (!process.argv[2]) {
	console.log('No file name in argument');
} else {
	const fn = process.argv[2];
	const data=fs.readFileSync(fn,'utf8');
	//console.log(data);
	const rowCount=data.split('\n').length-1;
	console.log(rowCount);
	};



