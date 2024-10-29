let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function sumOfEvenNum(numbers) {
  let sum = 0; 
  for (let i = 0; i< numbers.length; i++) { 
    if (numbers[i] % 2 == 0) { 
      sum += numbers[i];
    }
  }
  return sum;
};

let sum = sumOfEvenNum(numbers);

console.log(sum);
 
