const power = (x, n) => x ** n;

console.log(power(2, 3)); 
console.log(power(5, 2));
console.log(power(3, 4)); 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
def is_prime(n):
if n > 1000:
return "Данные неверны"
elif n <= 1:
return "Нет"
else:
for i in range(2, n):
if n % i == 0:
return "Нет"
return "Да"

print(is_prime(13)) # Да
print(is_prime(15)) # Нет
print(is_prime(0)) # Нет
print(is_prime(1)) # Нет
print(is_prime(1001)) # Данные неверны
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
def outer_func(x):
def inner_func(y):
return x + y
return inner_func

result = outer_func(5)
print(result(10)) # Output: 15
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function printNumbers(start, end) {
  let current = start;
  let intervalId = setInterval(() => {
    console.log(current);
    current++;
    if (current > end) {
      clearInterval(intervalId);
    }
  }, 1000); // 1000ms = 1s
}

printNumbers(5, 15);
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

// Test the function
countEvenOddAndZero([1, 2, 3, 4, 5, 0, 'a', null, 7, 8, 9]);
