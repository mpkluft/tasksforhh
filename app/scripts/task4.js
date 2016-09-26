/*

Задача 1
Рассмотрим все возможные числа ab для 1<a<6 и 1<b<6:
22=4, 23=8, 24=16, 25=32 32=9, 33=27, 34=81, 35=243 42=16,
 43=64, 44=256, 45=1024, 52=25, 53=125, 54=625, 55=3125
Если убрать повторения, то получим 15 различных чисел.

Сколько различных чисел ab для 2<a<100 и 2<b<126? 

*/

function matchArray(array, number) {

	if(array.length === 0) {
		return true;
	}
	for(var i = 0; i < array.length; i++) {
	 if(array[i] === number) {
	 	return false;
	 }
	}
	return true;
}


function getAB(fromA, toA, fromB, toB) {

	var resArray = [],// массив, куда складываются цифры непповт
			reviseNumber = 0,
			matchResult = true,
			timeBegin = Date.now(), //Для замера времени выполнения скрипта
			timeEnd = 0,  //Для замера времени выполнения скрипта
    	allTime = 0;  //Для замера времени выполнения скрипта

	for(var a = fromA; a < toA; a++){

		for(var b = fromB; b < toB; b++){

			reviseNumber = Math.pow(a, b);

			// функция проверки числа в массиве
			matchResult = matchArray(resArray, reviseNumber);

			// если такое число есть, то не добавлять в массив
			if(matchResult) {
				resArray.push(reviseNumber);
			}

		}
	}

	console.log("длинна массива  resArray " + resArray.length);

	timeEnd = Date.now();
	allTime = timeEnd - timeBegin;

	console.log("скрипт выполнялся " + allTime + " ms");

}


//getAB(3,100,3,126);