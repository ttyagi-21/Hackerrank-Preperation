'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    const length = arr.length
   const positiveIntegers = arr.filter(x => x>0).length
   const negativeIntegers = arr.filter(x => x<0).length
   const zeroes = arr.filter(x => x == 0).length
   console.log((positiveIntegers/length).toFixed(6))
   console.log((negativeIntegers/length).toFixed(6))
   console.log((zeroes/length).toFixed(6))
   
   

}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
