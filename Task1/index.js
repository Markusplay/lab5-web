function insertionSort(arr) {
  for (let index = 1; index < arr.length; index++) {
    let j = index;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr
}
function onSumbit() {
  const size = document.getElementById("size").value;

  let array=Array.from({ length: size }, () => Math.floor(Math.random() * 20));
  let max = array[0];
  let min = array[0];
  let indexOfMax = 0;
  let indexOfMin = 0;

  console.log("Array:" + array);

  for (let index = 1; index < array.length; index+=2) {
    if (array[index]>= max) {
      max=array[index];
      indexOfMax=index;
    }
  }

  for (let index = 0; index < array.length; index+=2) {
    if (array[index]<= min) {
      min=array[index];
      indexOfMin=index;
    }
  }

  [array[indexOfMax], array[indexOfMin]] = [array[indexOfMin], array[indexOfMax]];

  console.log("Maximum value of even elements:",max);
  console.log("Index:",indexOfMax);
  console.log("Minimum value of even index elements:",min);
  console.log("Index:",indexOfMin);
  console.log("Result array:"+ array);
  const sortedArr = insertionSort(array);
  console.log("Insertion sorted array:"+ sortedArr);
}

document.getElementById("submit-button").onclick=onSumbit
