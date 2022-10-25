//import {Heap} from './Heap.js';

function hello() {
  //alert("hello world")
  console.log("testing sampleFunc")
  let value = sampleFunc(5, 5)
  //value should be 25
  console.assert(25 == value, value)
  let data = generateData()
  console.log("data size " + data.length)
  console.timeLog("generate time", data)
  console.log("before sort first 10 values")
  printFirstTenValues(data)
  bubble(data)
  console.log("after sort")
  console.log("after sort first 10 values")
  printFirstTenValues(data)
  //try heap
  let data2 = generateData()
  printFirstTenValues(data2)
  console.log("after sort")
  const heap = new Heap()
  for (var i = 0; i < data2.length; i++) {
    heap.insert(data2[i])
  }
  console.log("heap size " + heap.heapSize())
  for(var j = 0; j < 500; j++) {
    console.log("pop heap " + heap.pop())
  }
  console.log("heap after size " + heap.heapSize())
  
}

function sampleFunc(number1, number2) {
  return number1 * number2
}

function printFirstTenValues(data) {
  for(var i = 0; i< 10; i++) {
    console.log(data[i])
  }
}

function generateData() {
  let arr = []
  var min = Math.ceil(1);
  var max = Math.floor(1000);
  for (i = 0; i<10000; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min
  }
  return arr
}

//n*2 sort
function bubble(data) {
  for(var i = 0; i < data.length; i++) {
    for(var j = 0; j < data.length - i; j++) {
      if (data[j] > data[j+1]) {
        swap(data, j, j+1)
      }
    }
  }
}

function swap(arr, val1, val2) {
  var temp = arr[val1]
  arr[val1] = arr[val2]
  arr[val2] = temp
}

