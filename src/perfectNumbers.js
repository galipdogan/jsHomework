
/* Kaynak : http://bilimist.com/blog-41/mukemmel-sayilar-nedir-.html ---__----
Kendisi hariç bütün pozitif bölenlerinin toplamı kendisine eşit olan sayılara mükemmel sayı denir.
6 bir mükemmel sayıdır. 
Çünkü 6'nın pozitif bölenleri 1,2,3 ve 6'dır. 
Kendisi hariç diğer bölenlerini toplarsak 1+2+3=6 eder. 
Bunun gibi 28 de mükemmel sayıdır. 28 = 1 + 2 + 4 + 7 + 14

MÜKEMMEL SAYILAR ÜZERİNE BİR ALGORİTMA Nikomakus'un bahsettiği ancak Öklid'in 
ispat ettiği bir algoritma bazı çift mükemmel sayıları bulmamıza yardımcı oluyor. 
Bu algoritma şu şekildedir. 
2'nin bir asal kuvvetinin 1 eksiği asal ise (bunlara Mersenne Asalları diyoruz) 
bu sayı ile 2'nin bir önceki kuvvetinin çarpımı mükemmel sayıdır.

Mükemmel sayı bulma formülü = 2p−1(2p−1) Formüldeki p ve (2p−1) sayıları asal sayı olmalıdır. 
Buna göre ilk dört mükemmel sayı şunlardır: 
p = 2 için: 21(22−1) = 6 
p = 3 için: 22(23−1) = 28 
p = 5 için: 24(25−1) = 496 
p = 7 için: 26(27−1) = 8128
e\\???jhjslkfhlsfhlkjksklfs

*/

function perfectNumbers(){
    var sayi=1;
  for (var sayi=1; sayi<=1000; sayi++)
  {
      var toplam = 0;
      for (var j = 1 ; j < sayi ; j++) {
        if(sayi %j == 0)  
          toplam += j;
      }
  
      if (toplam == sayi) 
        console.log(sayi + "  is a perfect number");
      
  }
  }
  perfectNumbers()