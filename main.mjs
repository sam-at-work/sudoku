// import _ from 'lodash';
const _ = require("lodash");

console.table([{ 0: 1, 1: 2 }, { 0: 45, 2: 12 }, { 0: 111, 1: 93 }]);

console.table([[1, 2], [45, , 12], [111, 93]]);

const blockHeight = 2;
const blockWidth = 2;

const blockSize = 2;

// prettier-ignore
const startState = [
  [, , , 2,],
  [, 2, , ,],
  [, , 4, ,],
  [1, , , ,]
];

// prettier-ignore
const tempState = [
  [1,2,3,4,],
  [4,3,2,1,],
  [3,4,1,2,],
  [2,1,4,3,]
];

const completeLine = _.range(1, startState.length + 1);

console.table(startState);

function isFinished(state) {
  if (typeof state === "object") return state.every(x => isFinished(x));
  else return state;
}

console.log(isFinished([[1, 2]]));
console.log(isFinished(startState));
//
// function rows(state) {
//   return state.values()
// }

for (let row of tempState) {
  console.log(row);
}

console.log();

for (let col of _.unzip(tempState)) {
  console.log(col);
}

function* rows(state) {
  for (let row of state) {
    yield row;
  }
}

for (let row of rows(tempState)) {
  const x = _.difference(row, completeLine).length === 0;
  console.log(x);
}

function isComplete(row) {
  console.log("is comp", row);
  // return _.isEmpty(_.xor(row, completeLine));
  return _(row)
    .xor(completeLine)
    .isEmpty();
}

function transpose(array) {
  return _.unzip(array);
}

// let areRowsGood = _.every(tempState, isComplete);
// let areColsGood = _.every(transpose(tempState), isComplete);
// console.log(areRowsGood, 'temp state');
// console.log(areColsGood, 'temp state');
//
// areRowsGood = _.every(startState, isComplete);
// areColsGood = _.every(transpose(startState), isComplete);
// console.log(areRowsGood, 'start state');
// console.log(areColsGood, 'start state');

console.log(_.every([1, 2, 3]), 12321);

for (let row of tempState) {
  console.log(_.chunk(row, 2));
}

// for (const [i, row] of tempState.entries()) {
//   console.log("%d: %s", i, row);
//   console.log(_.chunk(row, 2));
// }

function areBlocksGood(rows) {
  let i = 0;
  const flattenedRowChunks = _.chain(rows)
    .map(row => _.chunk(row, blockSize))
    .flatten()
    .value();

  const nthPartitionedRowChunks = multiSplit(flattenedRowChunks, blockSize)
  const flattened = _.flatten(nthPartitionedRowChunks)

  const blocks = [];
  while (!_(flattened).isEmpty()) {
    blocks.push(
      _(flattened)
        .pullAt(_.range(0, blockSize))
        .flatten()
        .value()
    );
  }

  return blocks;
}

for (let ss of areBlocksGood(tempState)) {
  console.log(ss);
}

for (let ss of areBlocksGood(tempState)) {
  console.log(ss);
}

const asd = _.every(areBlocksGood(tempState), isComplete);
console.log(asd);


function multiSplit(arr, n) {
  const arrays = Array(n).fill().map(() => Array())

  for (var i = 0; i < n; i++) {
    for (var index = i; index < arr.length; index+=n) {
      arrays[i].push(arr[index]);
    }
  }

  console.log('rrewrew', arrays)

  return arrays;
}