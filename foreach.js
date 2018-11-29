function findWaldo(arr, found) {
  arr.forEach(function(arr1){
    if (arr1 === "Waldo") {
      found(arr.indexOf(arr1));   // execute callback
    }
  })
}

function actionWhenFound(j) {
  console.log("Found Waldo at index " + j + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);





