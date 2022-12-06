// MAP

function map(array, func){
  let newArr = [];
  for(let i = 0 ; i < array.length ; i++){
    newArr.push(func(array[i]));
  }
  return newArr;
}

let testArr = [1,2,3,4,5,6,7,8,9,10]
let funcTest = function(number){
  return number*number;
}
let arr = map(testArr, funcTest)
console.log(arr);

// FOR EACH

function forEach(array, func){
  for(let i = 0 ; i < array.length ; i++){
    array[i] = func(array[i]);
  }
  return array;
}

console.log(forEach(testArr, funcTest));

// FILTER

function filter(array, func){
  let newArray = [];
  for(let i = 0 ; i < array.length ; i++){
    if(func(array[i])){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const funcTest1 = function(number){
  return number > 5;
}

console.log(filter(testArr, funcTest1));