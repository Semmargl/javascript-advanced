// ------------------------
// Задача 3.2
// ------------------------
// Написать функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.

// Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

// Например:

// // Применить Math.max к аргументам 2, -2, 3
// console.log( applyAll(Math.max, 2, -2, 3) ); // 3

// // Применить Math.min к аргументам 2, -2, 3
// alert( applyAll(Math.min, 2, -2, 3) ); // -2
// Область применения applyAll, конечно, шире, можно вызывать её и со своими функциями:



// console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
// console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}


function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function applyAll(func){
    var arr = [...arguments].slice(1);
    return func.apply(null, arr);
}

console.log( applyAll(Math.max, 2, -2, 3) )
console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24

