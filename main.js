const _ = require("lodash");

const blockSize = 2;

// prettier-ignore
const incompleteState = [
  [, , , 2,],
  [, 2, , ,],
  [, , 4, ,],
  [1, , , ,]
];

// prettier-ignore
const completePerfectState = [
  [1,2,3,4,],
  [4,3,2,1,],
  [3,4,1,2,],
  [2,1,4,3,]
];

// prettier-ignore
const completeErrorState = [
  [4,2,3,4,],
  [1,3,2,1,],
  [3,4,1,2,],
  [2,1,4,3,]
];

// prettier-ignore
const completeErrorState9x9 = [
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],

];

function multiSplit(arr, n) {
  const arrays = Array(n)
    .fill()
    .map(() => Array());

  for (var i = 0; i < n; i++) {
    for (var index = i; index < arr.length; index += n) {
      arrays[i].push(arr[index]);
    }
  }

  return arrays;
}

function getBlocks(rows, blockSize) {
  let i = 0;
  const flattenedRowChunks = _.chain(rows)
    .map(row => _.chunk(row, blockSize))
    .flatten()
    .value();

  const nthPartitionedRowChunks = multiSplit(flattenedRowChunks, blockSize);
  const flattened = _.flatten(nthPartitionedRowChunks);

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

function check(state, blockSize, label) {
  const completeLine = _.range(1, Math.pow(blockSize, 2) + 1);

  function isComplete(row) {
    return _(row)
      .xor(completeLine)
      .isEmpty();
  }

  function transpose(array) {
    return _.unzip(array);
  }

  console.log(`checking ${label}:`);
  console.log(`block size: ${blockSize}:`);
  console.table(state);

  const doBlocksValidate = _.every(getBlocks(state, blockSize), isComplete);
  const doRowsValidate = _.every(state, isComplete);
  const doColsValidate = _.every(transpose(state), isComplete);
  const isValidSudoku = _.every([
    doBlocksValidate,
    doRowsValidate,
    doColsValidate
  ]);

  console.log("Are all blocks good?", doBlocksValidate);
  console.log("Are all rows good?", doRowsValidate);
  console.log("Are all cols good?", doColsValidate);
  console.log("Is Sodoku solved?", isValidSudoku);
  console.log();
}

check(incompleteState, blockSize, "incompleteState");
check(completePerfectState, blockSize, "completePerfectState");
check(completeErrorState, blockSize, "completeErrorState");
check(completeErrorState9x9, 3, "completeErrorState 9x9");
