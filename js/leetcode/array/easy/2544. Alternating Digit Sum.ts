//  1-usul;
// 1.1-sonlarni umumiy miqdorini aniqlab olamiz.
// 1.2-agar sonlar juft bo'lsa ohirgi raqam - bilan boshlanadi , agar toq bo'lsa + bilan.
// 1.3-o'sha sonlarni sum o'zgaruvchisiga yig'ib chiqamiz.
//  2-usul;
// 2.1-n ni stringa o'girib olamiz.
// 2.2-string lengthini olamiz va juft bo'lsa sign - agar toq bo'lsa + qiymat yuklaymiz.
// 2.3-har bir raqam yig'indisini olamiz.

function alternateDigitSum(n: number): number {
  const str = String(n);
  let sign  = 1;
  let sum = 0;

  for(let i = 0; i<str.length; i++) {
    sum += Number(str[i]) * sign;
    sign *= -1;
  }

  return sum;
}

// function alternateDigitSum(n: number): number {
//     let count = 0;
//     let copy = n;
//     while(copy > 0) {
//         copy = Math.floor(copy / 10);
//         count++;
//     }

//     let sum = 0;
//     let sign = 1;

//     if(count % 2 === 0) sign = -1;

//     while(n>0) {
//         const num = n % 10;
//         n = Math.floor(n / 10);
//         sum  = sum + sign * num;
//         sign *= -1;
//     }

//     return sum;
// };

