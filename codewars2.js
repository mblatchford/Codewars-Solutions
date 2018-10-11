let numbers = [ 12, 19, 22, 5, 8 ];


  function sumTwoSmallestNumbers(numbers) { 
    // sorted
    numbers.sort(function(a, b) {
        return a - b;
      });
    // filtered
    let positive = numbers.filter(num => num >= 0);
    // summation
    return positive[0] + positive[1];
    };
  
//   function isPositive(num){
//     return num >= 0;
//   }
  
  sumTwoSmallestNumbers(numbers);

  