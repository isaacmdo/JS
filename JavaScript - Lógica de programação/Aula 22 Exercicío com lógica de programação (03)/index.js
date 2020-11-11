function FizzBuzz(num){
  if(num % 3 === 0 && num % 5 === 0){
    return 'FizzBuzz'
  } else if (num % 5 === 0){
    return 'Buzz'
  } else if (num % 3 === 0){
    return 'Fizz'
  } else if (typeof num !== 'number'){
    return num;
  } else {
    return num;
  }
};

for(i = 0; i <= 100; i++){
  console.log(FizzBuzz(i));
};