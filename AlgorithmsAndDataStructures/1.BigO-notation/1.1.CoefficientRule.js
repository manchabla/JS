// If f(n) is O(g(n)) then kf(n) is O(g(n)) for any constant k > 0

function coefficientRule(n) {
  var count = 0;
  for (let i = 0; i < n; i++) {
    count++;
  }
  count += 3;
  return count;
}

console.log(coefficientRule(5));
