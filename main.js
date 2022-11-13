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
  // //alert("hello world")
  // console.log("testing sampleFunc")
  // let value = sampleFunc(5, 5)
  // //value should be 25
  // console.assert(25 == value, value)
  // let data = generateData()
  // console.log("data size " + data.length)
  // console.timeLog("generate time", data)
  // console.log("before sort first 10 values")
  // printFirstTenValues(data)
  // bubble(data)
  // console.log("after sort"
  // console.log("after sort first 10 values")
  // printFirstTenValues(data)
  // //try heap
  // let data2 = generateData()
  // printFirstTenValues(data2)
  // console.log("after sort")
  // const heap = new Heap()
  // for (var i = 0; i < data2.length; i++) {
  //   heap.insert(data2[i])
  // }
  // console.log("heap size " + heap.heapSize())
  // for(var j = 0; j < 500; j++) {
  //   console.log("pop heap " + heap.pop())
  // }
  // console.log("heap after size " + heap.heapSize())
  
  // mergeTwoLists()
  // const triangle = generatePascalTriangle(8);
  // console.log(triangle);
  //console.log(isValid("(]"));
  //console.log(isValid("([}}])"));
  console.log(canConstruct("a", "b"));
}

var canConstruct = function(ransomNote, magazine) {
  let charBank = new Map();

  let magArr = magazine.split("")
  //fill character bank with all letters in magazine
  for(i in magArr) {
      //add if there is no previous key for this char
      if(charBank.has(i)) {
          let val = charBank.get(i);
          val++;
          charBank.set(i, val);
      }else{
          charBank.set(i, 1);
      }
  }
  console.log(magArr)
  let ransArr = ransomNote.split("")
  //now we should have map with number of characters used in magazine
  for (c in ransArr) {
      if (charBank.has(c)) {
          //remove one or delete if there is one occurance of letter
          let value = charBank.get(c);
          if(value > 1) {
              //remove 1
              value--;
              charBank.set(c,value);
          } else {
              //remove from bank
              charBank.delete(c);
          }
      } else {
          return false;
      }
  }
  return true;
};

var reverseList = function(head) {
  //with help of two nodes we can essentially swap ref pointers between nodes one at a time

  let prev = null;
  let next = null;

  while(head != null) {
    //set a pointer reference to i+1 element of list
    next = head.next;
    //remove reference pointer from i -> i+1
    head.next = prev;
    //set a reference pointer to i element
    prev = head;
    //change pointer of head to i+1 element
    head = next;
  }

  head = prev;
  return head;
};

var isValid = function(s) {
  let arrType = s.split("");
  let stack = [];
  let index = 0;

  while(index < arrType.length) {
    console.log("at index " + arrType[index]);
    if (arrType[index] === "(") {
      stack.push("(")
    }else if(arrType[index] === "{") {
      stack.push("{")
    }else if(arrType[index] === "[") {
      stack.push("[")
    }else if((arrType[index] === ")") && (stack[stack.length - 1] === "(")) {
      stack.pop();
      console.log("closing )")
    } else if((arrType[index] === "}") && (stack[stack.length -1] === "{")) {
      stack.pop();
      console.log("closing }")
    } else if((arrType[index] === "]") && (stack[stack.length -1] === "[")) {
      stack.pop();
      console.log("closing ]")
    }else {
      return false;
    }
    console.log(stack)
    index++;
  }

  return stack.length === 0;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generatePascalTriangle = function(numRows) {
  let result = [];
  for(let i = 0; i < numRows; i++) {
      let rowArr = [];
      for(let j = 0; j <= i; j++) {
          let row = i;
          let col = j;
          
          if (col == 0) {
              rowArr.push(1);
          }else if (col == i) {
              rowArr.push(1);
          } else {
              //get previous values
              let previousRow = result[row - 1];
              let sum = previousRow[col - 1] + previousRow[col];
              rowArr.push(sum);
          }
          
      }
      result.push(rowArr);
  }
  return result;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function mergeTwoLists(l1, l2) {
  var mergedHead = { val : -1, next : null },
  crt = mergedHead;
  while(l1 && l2) {
    if (l1.val > l2.val) {
        crt.next = l2;
        l2 = l2.next;
    } else {
        crt.next = l1;
        l1 = l1.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;

  return mergedHead.next;
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

