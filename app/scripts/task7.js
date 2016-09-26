/*
Задача 5
Рассмотрим спираль, в которой, начиная с 1 в центре, 
последовательно расставим числа по часовой стрелке,
пока не получится спираль 5 на 5

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

Можно проверить, что сумма всех чисел на диагоналях равна 101.

Чему будет равна сумма чисел на диагоналях, для спирали 
размером 1091 на 1091? 

*/

function findSumTask7(x, y) {
	var numRightUp = 1,
			result = 0,
			count = 8,
			iter = 0,
			timeBegin = Date.now(), //Для замера времени выполнения скрипта
			timeEnd = 0,  //Для замера времени выполнения скрипта
    	allTime = 0;  //Для замера времени выполнения скрипта

  while (numRightUp < x*y) {

  	iter +=2;
  	numRightUp += count;
		result += numRightUp + (numRightUp-iter) + (numRightUp-iter*2) + (numRightUp-iter*3);
		count +=8;
  }
  result += 1;

	console.log(result);

	timeEnd = Date.now();
	allTime = timeEnd - timeBegin;

	console.log("скрипт выполнялся " + allTime + " ms");
}


//findSumTask7(1091,1091);




/*

866327641task7.js:46:2
скрипт выполнялся 441 ms

866327641task7.js:46:2
скрипт выполнялся 2 ms
*/