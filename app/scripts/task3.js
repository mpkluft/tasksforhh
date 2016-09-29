/*
Задача 3
Определим функцию P(n,k) следующим образом: P(n,k) = 1, 
если n может быть представлено в виде суммы k простых 
чисел (простые числа в записи могут повторяться, 
1 не является простым числом) и P(n,k) = 0 в обратном случае.
К примеру, P(10,2) = 1, т.к. 10 может быть представлено в виде
 суммы 3 + 7 или 5 + 5, а P(11,2) = 0, так как никакие 
 два простых числа не могут дать в сумме 11.
Определим функцию S(n) как сумму значений функции P(i,k) 
для всех i и k, таких что 1≤i≤n, 1≤k≤n. Таким образом,
 S(2) = P(1,1) + P(2,1) + P(1,2) + P(2,2) = 1, S(10) = 20,
  S(1000) = 248838.

Найдите S(11556). 
*/


function findNumber(number){

	var result = 0,
			sumN = 0,
			k = 0,
			arraySimpleNum = [],
			iter = 0;

	// Создаем массив протсых чисел до number
	for(var k = 2; k <= number; k++)
	{
		
		for(var i = 2; i < k; i++) 
		{
			if( k % i === 0 )
			{
				iter++;
				break;
			} 
		}
		if(iter == 0) {
			arraySimpleNum.push(k);
		}
		iter = 0;
	}

	return arraySimpleNum;
}


var x = findNumber(1155);
//console.log("Кол-во эл-тов в массиве: " + x.length);


function cntK(k, sum, nowSum){
	if(k == 0){
		//console.log("Произошло вхождение в " + k + " цикл, произошел return ");
		return 0;
	} else {
		for(var j=0; j < x.length; j++) {
			//console.log("Произошло вхождение в " + k + " цикл - значение x[j] " + x[j]);
			nowSum = nowSum + x[j];
			//console.log("проверяемая сумма " + nowSum);
			var curSum = cntK(k-1, sum, nowSum);
			if(curSum === false) {
				if(x[j] >= sum) {
					//console.log("Происходит пиздец");
					nowSum = sum + 1;
				} 
			} if(curSum === true) {
				return true;
			}

			//console.log("сумма цифр на данный момент " + nowSum);
			if(nowSum == sum) {
				//console.log("Произошло совпадение: " + nowSum);
				//console.log("---------------------")
				return true;
			} if(nowSum > sum) {
				//console.log("--текущая сумма больше " + sum );
				return false;
			}
			//console.log("--текущая сумма меньше " + sum);
			nowSum -= x[j];
		}
	}
}

function P(numN){

	var lastN = numN,
			nowSum = 0,
			curSum = 0,
			sum = 0,
			result = 0,
			a = Date.now(), //Для замера времени выполнения скрипта
			b = 0,  //Для замера времени выполнения скрипта
    	time = 0;  //Для замера времени выполнения скрипта

	//переход к текущему n
	for( var n = 1; n <= lastN; n++) {
		//console.log("новая итерация = n: " + n);
		//текущая сумма k должна быть ровна sum = n
		sum = n;

		//переход к текущему k
		// в условии убираем все значения k, которые k <= n/2
		if(sum/2 < 1){
			//console.log("---------------------")
		}
		for(var k = 1; k <= 2; k++) {
			//console.log("новая итерация =k: " + k);
			//подбираем такое k чтобы (sum === curSum) === true
			//перебираем созданный массив из простых чисел x
			// и каждый раз сравниваем с текущей суммой sum
			for(var j = 0; j < x.length; j++) {
				
				// присваеваем "curSum" по порядку все простые числа
				// массива "x"
				//console.log("Значение  x[j] до входа в цикл " + x[j]);
				nowSum = x[j];
				curSum = cntK(k-1, sum, nowSum);
				if(curSum === false){
					if(x[j] >= sum) {
						nowSum = sum + 1;
						//console.log("Опять попадает в пизду");
					}else {
						nowSum -= x[j];
					}
				}if(curSum === true) {
					nowSum = sum;
				} 
				//console.log("сумма равна " + nowSum);
				
				//сравниваем число "n" с суммой "k" простых чисел "curSum"
				if(nowSum == sum) {
					//console.log("Произошло совпадение: " + nowSum);
					result++;
					nowSum = 0;
					//console.log("текущий результат "+ result);
					//console.log("---------------------")
					break;
				} if (nowSum > sum) {
					nowSum = 0;
					//console.log("--текущая сумма больше " + sum);
					//console.log("---------------------")
					break;
				}
				//console.log("--текущая сумма меньше " + sum);
				nowSum = 0;
			}
			if (nowSum > sum) {
				//console.log("число "+nowSum+" больше числа "+sum + " переход на др ячейку");
				//console.log("---------------------")
				break;
			}
		}
		//console.log("result до вхождения в ветвление " +result);
		if(sum - 3 > 0){
			if(sum % 2 == 0){
				//console.log("result вошло sum % 2 == 0 " +result);
				result += (sum/2 - 2);
				//console.log("значение " + result + " прибавив " + (sum/2 - 2));
				//console.log("---------------------");
			} else {
				//console.log("result вошло sum % 2 != 0 " +result);
				result += ((sum-1)/2 - 2);
				//console.log("значение " + result + " прибавив " + ((sum-1)/2 - 2));
				//console.log("---------------------");
			}
		}
		//console.log("без вхождение в ветвление " +result);
		//console.log("---------------------");

	}
	
	
	//console.log("кол-во совпадений: " + result);
	
	b = Date.now();
	time = b - a;


	return [result, time];
}

//P(11556);




//console.log("значение j: " + j);
			//console.log("значение curSum: " + curSum);
			//console.log("значение n: " + (curSum == n));