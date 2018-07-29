## Node Sudoku Checker (WIP)

The beginnings of a Node script to check if a Soduko board has been solved.

Works for any square sizes boards eg 2x2, 3x3...

---

Example output 1 - Solved board

```
block size: 2:
┌─────────┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │
├─────────┼───┼───┼───┼───┤
│    0    │ 1 │ 2 │ 3 │ 4 │
│    1    │ 4 │ 3 │ 2 │ 1 │
│    2    │ 3 │ 4 │ 1 │ 2 │
│    3    │ 2 │ 1 │ 4 │ 3 │
└─────────┴───┴───┴───┴───┘
Are all blocks good? true
Are all rows good? true
Are all cols good? true
Is Sodoku solved? true
```

Example output 2

```
checking incompleteState:
block size: 2:
┌─────────┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │
├─────────┼───┼───┼───┼───┤
│    0    │   │   │   │ 2 │
│    1    │   │ 2 │   │   │
│    2    │   │   │ 4 │   │
│    3    │ 1 │   │   │   │
└─────────┴───┴───┴───┴───┘
Are all blocks good? false
Are all rows good? false
Are all cols good? false
Is Sodoku solved? false
```

```
checking completeErrorState 9x9:
block size: 3:
┌─────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │
├─────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
│    0    │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
│    1    │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
│    2    │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
│    3    │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
│    4    │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
│    5    │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
│    6    │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
│    7    │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
│    8    │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
└─────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
Are all blocks good? false
Are all rows good? true
Are all cols good? false
Is Sodoku solved? false


```

---

## Background:

I discovered Node has a method called`console.table()`that can nicely log tabular data (see the output above).

I'd just learned how to do Sudoku so thought it would be fun to write a program that lets you play
Soduko in ther terminal using Node, and I could use console.table() to print out the state of the game.

And all the array manipulation I was doing looked like it would give me a chance to get more familiar
with lodash.

I got some of the way there, in that I ended up with some code that can chcek if a given Sudoku board has been solved.

## Outcome

Turns out dealing with 2D arrays in Javascript, even with Lodash, is pretty painful.

Checking that all the rows and columns contain all the right numbers was pretty simple to achieve, but checking the individual Soduko blocks was not.

I'm not very happy with some of the code I had to write to create the subarrays (Sudoku blocks)
that I needed to validate.

I've been using Matlab recently and manipulting 2D arrays (matrices) was such a better experience than
I had trying to do the same thing in JavaScript.
