
  /* Vikipedi, özgür ansiklopedi
 İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.

Örnek: 220 ve 284

 220 : 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284 
 284 : 1 + 2 + 4 + 71 + 142 = 220 1636 yılında 
 Fermat 17296 ve 18416 nın arkadaş sayı olduklarını keşfetti.Üçüncü çifti Descartes keşfetti.
Leonhard Euler ise, kendi bulduğu 59 çift ile birlikte 62 çiftten oluşan bir liste hazırladı.
1866'da 16 yaşındaki İtalyan Nicolo Paganini 1184 ve 1210 sayılarının da böyle bir çift olduğunu gösterdi.*/


let number1,
number2,
amount1 = 0,
amount2 = 0

function friendNumbers(number1, number2) 
{
  for (let i = 0; i < number1; i++) {
      if (number1 % i == 0) {
          amount1 += i;
      }
    }
      
    for (let j = 0; j < number2; j++) {
      if (number2 % j == 0) {
          amount2 += j;
      }
    }
    if (amount1 == number2 && amount2 == number1) {
      console.log(number1, ` and ` ,number2, ` Friend numbers`);
    } else {
      console.log(number1,` and ` , number2, `Not a Friend numbers`);
    }
  
}
friendNumbers(220, 284);