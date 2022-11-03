//import {Heap} from './Heap.js';
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  var numberValue = 0;
  var arr = Array.from(s)

  //iterate over arr of strings
  for(var i = 0; i < arr.length; i++) {
      var j = i + 1
      console.log(i+ " " + j)
      //special conditions
      if (arr[i] === "I" && arr[j] === "V") {
          numberValue += 4
          i++
      }else if (arr[i] === "I" && arr[j] === "X") {
          numberValue += 9
          i++
      } else if (arr[i] === "X" && arr[j] === "L") {
          numberValue += 40
          i++
      } else if (arr[i] === "X" && arr[j] === "C") {
          numberValue += 90
          i++
      } else if (arr[i] === "C" && arr[j] === "D") {
          numberValue += 400
          i++
      } else if (arr[i] === "C" && arr[j] === "M") {
          numberValue += 900
          i++
      } else {

        switch (arr[i]) {
          case "I":
              numberValue += 1
          break;
          case "V":
              numberValue += 5
          break;
          case "X":
              numberValue += 10
          break;
          case "L":
              numberValue += 50
          break;
          case "C":
              numberValue += 100
          break;
          case "D":
              numberValue += 500
          break;
          case "M":
              numberValue += 1000
          break;
      }
      }

      
  }

  return numberValue
};
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
  
  var num = romanToInt("MCMXCIV")
  console.log(num)
}

function testLinkedList() {
  let data = generateData();
  let mLinkedList = new LinkedList();
  mLinkedList.append('a')
  mLinkedList.append('bb')
  mLinkedList.append('ccc')
  mLinkedList.append('dddd')

  console.log("removing first " + mLinkedList.remove().data)
  console.log("removing second " + mLinkedList.remove().data)
  console.log("removing 3rd " + mLinkedList.remove().data)
  console.log("removing 4th " + mLinkedList.remove().data)
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

