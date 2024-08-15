const power = (x, n) => x ** n;

console.log(power(2, 3)); 
console.log(power(5, 2));
console.log(power(3, 4)); 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function printNumbers(start, end) {
  let current = start;
  let intervalId = setInterval(() => {
    console.log(current);
    current++;
    if (current > end) {
      clearInterval(intervalId);
    }
  }, 1000); 
}

printNumbers(5, 15);
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function outer_func(x) {
  return function(y) {
    return x + y;
  }
}

const result = outer_func(5);
console.log(result(10)); // Output: 15
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function is_prime(n) {
  if (n > 1000) {
    return "Данные неверны";
  } else if (n <= 1) {
    return "Нет";
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return "Нет";
      }
    }
    return "Да";
  }
}

console.log(is_prime(13)); // Да
console.log(is_prime(15)); // Нет
console.log(is_prime(0)); // Нет
console.log(is_prime(1)); // Нет
console.log(is_prime(1001)); 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function countEvenOddAndZero(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  arr.forEach((element) => {
    if (typeof element === 'number') {
      if (element === 0) {
        zeroCount++;
      } else if (element % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  });

  console.log(`Even count: ${evenCount}`);
  console.log(`Odd count: ${oddCount}`);
  console.log(`Zero count: ${zeroCount}`);
}


countEvenOddAndZero([1, 2, 3, 4, 5, 0, 'a', null, 7, 8, 9]);
