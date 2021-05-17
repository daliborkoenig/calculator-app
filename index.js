let currOperator
let valueArr =[]
let firstValue
let secondValue
let miniDisplay = []
let result


function btnPressed(x){
  if(x === 1 || x === 2 || x === 3 || x === 4 || x === 5 || x === 6 || x === 7 || x === 8 || x === 9 || x === 0 || x === '.'){
    numberKey(x)
  }
  else if(x === '+' || x === '-' || x === '*' || x === '/'){
    operatorKey(x)
  }
  else if(x === '=' || x === '%' ||x === 'DEL' || x === 'C'){
    functionKey(x)
  }
}

function numberKey(key){
  valueArr.push(key)
  miniDisplay.push(key)
  switch(key){
    case 1:
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;
    case 2:
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;
    case 3:
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;
    case 4:
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;
    case 5:
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;
    case 6:
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;
    case 7:
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;
    case 8:
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;
    case 9:
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;
    case 0:
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;
    case '.':
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;
  }
}

function operatorKey(key){
  console.log(valueArr);
  console.log(firstValue);
  if(currOperator === undefined){
    console.log("first",valueArr, currOperator);
    firstValue = Number(valueArr.join(""))
    valueArr = []
    currOperator = key
    valueArr.push(firstValue)
    valueArr.push(currOperator)
    miniDisplay = []
    miniDisplay.push(valueArr.join(""))
    document.getElementById("mini-display").innerHTML = miniDisplay
    document.getElementById("display").innerHTML = firstValue
  }
  else if(currOperator !== undefined && typeof valueArr[1] === 'number'){
    console.log("third",valueArr, currOperator);
    firstValue = Number(valueArr.join(""))
    valueArr = []
    currOperator = key
    valueArr.push(firstValue)
    valueArr.push(currOperator)
    miniDisplay = []
    miniDisplay.push(valueArr.join(""))
    document.getElementById("mini-display").innerHTML = miniDisplay
    document.getElementById("display").innerHTML = firstValue
  }
  else if(currOperator !== undefined && typeof valueArr[1] !== 'number'){
    console.log("second",valueArr, currOperator);
    console.log(miniDisplay);
    valueArr.splice(0,2)
    secondValue = Number(valueArr.join(""))
    valueArr = [firstValue, currOperator, secondValue]
    switch (valueArr[1]) {
      case '+':
        firstValue = firstValue + secondValue
        break;
      case '-':
        firstValue = firstValue - secondValue
        break;  
      case '*':
        firstValue = firstValue * secondValue
        break;
      case '/':
        firstValue = firstValue / secondValue
        break;
    }
    valueArr = []
    valueArr.push(firstValue)
    currOperator = key
    valueArr.push(currOperator)
    miniDisplay.push(currOperator)
    miniDisplay[0] = miniDisplay.join("")
    miniDisplay.splice(1)
    document.getElementById("mini-display").innerHTML = miniDisplay
    document.getElementById("display").innerHTML = firstValue
  }
}

function functionKey(key){
  switch(key){
    case '=':
      calculate();
      break;
    case '%':
      // console.log("Function pressed: PERCENTAGE");
      let x = valueArr[0]
      valueArr.splice(0,2)
      let y = Number(valueArr.join(""))
      result = x/100*y
      currOperator = ""
      miniDisplay.push("%")
      miniDisplay[0] = miniDisplay.join("")
      miniDisplay.splice(1)
      document.getElementById("mini-display").innerHTML = miniDisplay
      break;    
    case 'DEL':
      valueArr.pop()
      miniDisplay.pop()
      document.getElementById("mini-display").innerHTML = miniDisplay.join("")
      break;    
    case 'C':
      location.reload()
      break;
  }
}

function calculate(firstValue, secondValue, currOperator){
  firstValue = valueArr[0]
  currOperator = valueArr[1]
  valueArr.splice(0,2)
  secondValue = Number(valueArr.join(""))
  valueArr = [firstValue, currOperator, secondValue]
  switch (currOperator) {
    case '+':
      result = firstValue + secondValue
      break;
    case '-':
      result = firstValue - secondValue
      break;  
    case '*':
      result = firstValue * secondValue
      break;
    case '/':
      result = firstValue / secondValue
      break;
    default:
      valueArr.pop()
      break
  }
  miniDisplay.push("=")
  miniDisplay[0] = miniDisplay.join("")
  miniDisplay.splice(1)
  document.getElementById("mini-display").innerHTML = miniDisplay
  document.getElementById("display").innerHTML = result
  miniDisplay.push(result)
  miniDisplay.splice(0,1)
}