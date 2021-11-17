/* 1000 e kadar olan asal sayıları bul */

function findPrime() {
  let counter = 0;
  for (let i = 0; i <= 1000; i++) {
    let control = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        control = 1;
        break;
      }
    }
    if (i>1 && control == 0) {
      
        console.log(i + ` is a prime number`);
        counter++;
      
    }
  }
}

findPrime()