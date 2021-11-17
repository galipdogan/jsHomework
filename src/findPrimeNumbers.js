/*Asal sayılar, sadece iki pozitif tam sayı böleni olan doğal sayılardır. 
Sadece kendisine ve 1 sayısına kalansız bölünebilen 1'den büyük tam sayılardır. 
P ile gösterilir.En küçük asal sayı 2'dir.[1] */

function findPrime(...numbers) {
    let counter = 0;
    for (let i = 0; i < numbers.length; i++) {
      let control = 0;
      for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j == 0) {
          control = 1;
          break;
        }
      }
      if (numbers[i] != 1) {
        if (control == 0) {
          console.log(numbers[i] +` is a prime number.`) ;
          counter++;
        }
      }
    }
  }
  
  findPrime(2,5,8,21,13,35,45,12,1,4,11);