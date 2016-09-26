
/*
Задача 1
Число 125874 и результат умножения его на 2 — 251748
 можно получить друг из друга перестановкой цифр.

Найдите наименьшее положительное натуральное x такое,
 что числа 3*x, 4*x можно получить друг из друга перестановкой цифр. 

*/

function removeChar(string, symbol){
  var str = "";

  for(var i = 0; i < string.length; i++) {
    if(string[i] != symbol){
      str += string[i];
    }
  }
  return str;
};


function getResult(multiplyNumber, firstNumber = 0) {

var a = Date.now(), //Для замера времени выполнения скрипта
    first = firstNumber,  //Начало отсчета
    last = 0, //результат перемножения firstNumber и multiplyNumber
    falseNumber = 0,  // Счетчик отсутствия цифры из числа firstNumber в multiplyNumber
    firstStr = "",
    lastStr = "",
    b = 0,  //Для замера времени выполнения скрипта
    res = 0;  //Для замера времени выполнения скрипта

do{
  falseNumber = 0;

  first++;
  last = first*multiplyNumber;
  
  firstStr = String(first);
  lastStr = String(last);

  if( firstStr.length !== lastStr.length ) {
    continue;
  }

  for( var i = 0; i < firstStr.length; i++ ) {
    if( lastStr.indexOf(firstStr[i]) != -1 ) {
      lastStr = removeChar(lastStr, firstStr[i]); 
    } else {
      falseNumber++;
    }
  }

  if(falseNumber == 0) {
    break;
  }

} while (first < last);

console.log(first);
console.log(last);

b = Date.now();
res = b - a; 

console.log("скрипт выполнялся " + res + " ms");

}

getResult(2);