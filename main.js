/********************
 * OPTIONAL HELPERS *
 ********************/

/*

These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.

They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!

*/

const map = function(array,callBack) {
  const newArr = []

   for(i of array){
     newArr.push(callBack(i))
      
   }

   return newArr

}

const filter = function(element, callBack) {
  const newArr = []

  for(i of element){
    if(callBack(i)){
      newArr.push(i)
    }
  }

  return newArr


}

const twoPileSort = function(arr,func) {
  const pass = []
  const fail = []
  arr.forEach(function(arr){
    if (func(arr)) {
      pass.push(arr)
    } else {
      fail.push(arr)
    }
  })
  return [...pass, ...fail]
  
}



/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(elem) {
  return elem.text

}

const getCompleteness = function (elem) {
  return elem.complete
  
}

const getPriority = function (elem) {
  return elem.priority
  
}

const isComplete = function(elem) {
  return getCompleteness(elem)
  
}

const isHighPriority = function(elem) {
  return getPriority(elem) === 2

  
}



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function(todos) {
   return map(todos,getTodoName)

  


}

const namesAndPriorities = function(todos) {
  const textAndPriorites = function(array){
    if(getPriority(array)=== 2){
      return `${getTodoName(array)} - High`
    }else return`${getTodoName(array)} - Low`
  }

  return map(todos,textAndPriorites)

}

const justNotComplete = function(todos) {
  return filter(todos,(arr)=> arr.complete===false)

  
  
}

const justComplete = function(todos) {
  return filter(todos,isComplete)
  
}

const priority2Only = function(todos) {
  return filter(todos,isHighPriority)
  
}

const priority1Only = function(todos) {
  return filter(todos,(arr)=>arr.priority===1)
  
}

const notCompleteFirst = function(todos) {
  return twoPileSort(todos, (arr)=> arr.complete === false)
  
}

const priority2First = function(todos) {
  return twoPileSort(todos, (arr)=> arr.priority ===2)
  
}



module.exports = {
  map,
  filter,
  twoPileSort,
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}