// Time complexities can be added. A MASTER algorithm that involves two other algorithms.
// The BIG O NOTATION of that MASTER algorithm is simply the sum of the other 2 Big-O n

// If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n) + p(n))

function sumRule(n) {
  var count = 0;
  for (let i = 0; i < n; i++) {
    count++;
  }
  for (let i = 0; i < 5 * n; i++) {
    count++;
  }
  return count;
}
console.log(sumRule(5));
