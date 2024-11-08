'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
      let time
    const array = s.split(':')
    if(array[2]?.includes('PM') || array[2]?.includes('pm')){
          if(array[0] == "12"){
        time = array.join(':').replace('PM','') 
          } 
          else {
              array[0] = parseInt(array[0]) + 12
              time = array.join(':').replace('PM','')
              
          }  
         
}
else {
    if(array[2]?.includes('AM') || array[2]?.includes('am')){
        
          if(array[0] == "12"){
              array[0] = '00'
        time = array.join(':').replace('AM','') 
          } 
          else {
              time = array.join(':').replace('AM','')
              
          }
         

    
}
}
 return time        
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
