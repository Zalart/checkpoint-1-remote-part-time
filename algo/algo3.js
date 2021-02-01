/*
A theater employee wants to display every seat in the main room.
In said room, seats are arranged like this:
- There are 26 columns of seats, labelled from "1" to "26"
- Every column contains 100 seats, labelled from "1" to "100"
Your final list should like this:
  1-1
  1-2
  1-3
  .
  .
  .
  26-98
  26-99
  26-100
*/

function theaterSieges() {
  for (let row = 1; row <= 26; row++) {
    for (let seat = 1; seat <= 100; seat++) {
      console.log(`${row}-${seat}`);
    }
  }
  // Your code here !
}

console.log(theaterSieges());