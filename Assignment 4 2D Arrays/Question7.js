{
  /* <aside>
💡 You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

**Example 1:**

![q4.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d0890d0-7bc7-4f59-be8e-352d9f3c1c52/q4.jpg)

**Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

**Output:** 4

**Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.

</aside> */
}

function maxCount(m, n, ops) {
  let minRow = m;
  let minCol = n;

  for (const [row, col] of ops) {
    minRow = Math.min(minRow, row);
    minCol = Math.min(minCol, col);
  }

  return minRow * minCol;
}

// Example usage
const m = 3;
const n = 3;
const ops = [
  [2, 2],
  [3, 3],
];
const result = maxCount(m, n, ops);
console.log(result); // Output: 4