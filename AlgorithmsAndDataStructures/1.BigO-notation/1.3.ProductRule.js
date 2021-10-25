// The product rule simply states how Big-Os can be multiplied.

// If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n)).

// The following code block demonstrates a function with two nested for loops for
// which the product rule is applied

function productRule(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count++;
    for (let i = 0; i < 5 * n; i++) {
      count++;
    }
  }
  return count;
}

console.log(productRule(5));
