// Truthy / Falsey Check

// javascript evaluate as FALSE the following values

// false
// 0                      // empty          // NaN
// string '' && ""        // undefined      // null

// javascript evaluate as TRUE the following values
// true                     // Any nmber other than 0
// Non-empty strings        // Non-empty Objects

"condition" ? true : false; //  True
"" ? true : false; //  False

//                     === vs ==                    //
// === is used to check equality more strictly than ==
// the === evaluator checks for value and type
// the == evaluator checks only for value

"5" === 5; // False
"5" == 5; // True

// OBJECTS

var o1 = {};
var o2 = {};

o1 == o2; // False
o1 == o2; // False

// Although these objects are equivalent (same properties and values), they are not
// equal. Namely, the variables have different addresses in memory.