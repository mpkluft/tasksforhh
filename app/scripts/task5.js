/*
Если мы возьмем 47, перевернем его и сложим,
 получится 47 + 74 = 121 — число-палиндром.

Если взять 349 и проделать над ним эту операцию 
три раза, то тоже получится палиндром:

349 + 943 = 1292
1292 + 2921 = 4213
4213 + 3124 = 7337

Найдите количество положительных натуральных
 чисел меньших 13332 таких, что из них нельзя 
 получить палиндром за 50 или менее применений 
 описанной операции (операция должна быть применена 
 хотя бы один раз).

*/

function reverseNumber(n){
	return Number(String(n).split("").reverse().join(""));
}


function findPolindrom(num){
	var reverse = 0,
			result = 0,
			sum = 0,
			chekNum = 0,
			reverseSum = 0,
			timeBegin = Date.now(), //Для замера времени выполнения скрипта
			timeEnd = 0,  //Для замера времени выполнения скрипта
    	allTime = 0;  //Для замера времени выполнения скрипта

	for(var i = 1; i < num; i++) {

			chekNum = i;
			//console.log("Проверяемое число " + chekNum);

		for(var j = 0; j <= 50; j++) {

			reverse = reverseNumber(chekNum);
			//console.log("Реверс проверяемого числа " + reverse);
			sum = chekNum + reverse;
			//console.log("Сумма реверса и проверяемого числа " + sum);
			reverseSum = reverseNumber(sum);
			//console.log("Реверс суммы " + reverseSum);

			if(sum === reverseSum){
				//console.log("sum " + sum + " равна " + reverseSum);
				//console.log("полиндром найден");
				//console.log("-------------------");
				result++;
				break;
			} 
			else {
				//console.log("sum " + sum + " не ровна " + reverseSum);
				chekNum = sum;
				//console.log("Следующее число на проверку" + chekNum);
			}
		}

	}

	timeEnd = Date.now();
	allTime = timeEnd - timeBegin;

	console.log("скрипт выполнялся " + allTime + " ms");

	console.log("Кол-во чисел,  можно получить полиндром " + result);
	console.log("Кол-во чисел,  нельзя получить полиндром " + (num - 1 - result));
}

//findPolindrom(13332);

//13332
