/*
 ## TIME SERVER (Exercise 10 of 13)  
   
  Write a TCP time server!  
   
  Your server should listen to TCP connections on the port provided by the  
  first argument to your program. For each connection you must write the  
  current date & 24 hour time in the format:  
   
     "YYYY-MM-DD hh:mm"  
   
  followed by a newline character. Month, day, hour and minute must be  
  zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42"  
   
  After sending the string, close the connection.  

*/

const net = require('net');

const fillZero=(i)=> {
    return (i < 10 ? '0' : '') + i;
}

const createDate=()=>{
const d = new Date()
return  d.getFullYear()+'-'+
				fillZero(d.getMonth()+1)+'-'+
				fillZero(d.getDate())+' '+
				fillZero(d.getHours())+':'+
				fillZero(d.getMinutes());

}
var server = net.createServer(function(socket) {
    socket.end(createDate() + '\n');
});
server.listen(Number(process.argv[2]));
