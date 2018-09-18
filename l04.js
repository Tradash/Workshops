/*Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument.  
*/
const fs = require('fs');

if (!process.argv[2]) {
	console.log('No file name in argument');
} else {
	const fn = process.argv[2];
	fs.readFile(fn, 'utf8',(err, data)=> {
		if (err) { console.log('Error read file');
		} else {
			const rowCount=data.split('\n').length-1;
			console.log(rowCount);
		}
	});
}


