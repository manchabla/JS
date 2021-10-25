function linear(n) {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    counter++;
  }
  console.log("linear", counter);
}
linear(10);

function quadratic(n) {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      counter++;
    }
  }
  console.log("quadratic", counter);
}
quadratic(10);

function cubic(n) {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        counter++;
      }
    }
  }
  console.log("cubic", counter);
}
cubic(10);


