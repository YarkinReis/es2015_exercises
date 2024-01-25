
// 1
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
// 1 Answer
  const filterOutOdds = (...args) => args.filter(num => num % 2 === 0);


// 2

  findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
// 2 Asnwer
const findMin = (...args) => Math.min(...args);

// 3
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
// 3 Answer

const mergeObjects = (obj1 , obj2) => ({...obj1,...obj2})

// 4
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
// 4 Answer
const doubleAndReturnArgs = (arr,...args) => [...arr,...args.map(v => v*2)];


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {

}
// Answer
const removeRandom = (items) => {
    let val = Math.floor(Math.random() * items.length);
    return [...items.slice(0,val),...items.slice(val+1)]
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
}
// Answer
const extend = (array1, array2) => { return [...array1,...array2];}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {

}
// Answer
const addKeyVal = (obj,key,val) => {
let newObject = {...obj};
newObject[key] = val;
return newObject; }

/** Return a new object with a key removed. */

function removeKey(obj, key) {
}
// Answer 
 const removeKey = (obj,key) => {
    let newObject = {...obj};
    delete newObject[key];
    return newObject;}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
}
// Answer 
const combine = (obj1,obj2) =>{
 return {...obj1,...obj2}
}
/** Return a new object with a modified key and value. */

function update(obj, key, val) {
}
const update = (obj,key,val) => {
    let newObject = {...obj};
    newObject[key] = val;
    return newObject;
}