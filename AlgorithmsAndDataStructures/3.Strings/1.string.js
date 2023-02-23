// Access
"dog".charAt(1); // 'o'
"Yotube".substring(1); // 'outube'

// Compare
var a = "a";
var b = "b";
console.log(a < b); //true
var a = "aa";
var b = "bbbb";
console.log(a < b); //true

// Search

"Red dragon".indexOf("Red"); // 0
"Red dragon".indexOf("DD"); // -1
"Red dragon".startsWith("Red"); // true
"Red dragon".endsWith("Dragon"); // true

// Decomposition
var text1 = "Chicken.wings";
text1.split("."); // ['Chicken','wings']
var text1 = "Chicken.wings";
text1.split(""); // ['C','h','i','c','k','e','n','.','w,','i,','n,','g','s']


// Replace
'Wizzard of Oz'.replace('Wizzard', 'witch') //'Witch of Oz'