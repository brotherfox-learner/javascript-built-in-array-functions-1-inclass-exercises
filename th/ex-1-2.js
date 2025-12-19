/* 
- ให้เขียน Function ที่ชื่อว่า sumNegativeNumbers ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers
        1. numbers เป็น Array ที่บรรจุตัวเลข
    - Function นี้จะนำเฉพาะตัวเลขที่มีค่าน้อยกว่าศูนย์มารวมกัน แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
// // Reduce only
// const sumNegativeNumbers = (numArray) => {
//   return numArray.reduce((acc, cur) => {
//     if (cur < 0) {
//       acc += cur;
//     }
//     return acc;
//   }, 0);
// };

// Filter + Reduce
// const sumNegativeNumbers = (numArray) =>{
//     let negativeNum = numArray.filter((e)=>e<0)
//     let totalNegativeNum = negativeNum.reduce((acc,cur)=>acc+cur)
//     return totalNegativeNum
// }

//Refactor
const sumNegativeNumbers = (numArray) => numArray.reduce((acc, cur) => cur < 0 ? acc += cur : acc,0);

const numbers1 = [3, -5, 10, 12, -7, 0, 8, 2];
console.log(sumNegativeNumbers(numbers1)); // -12

const number2 = [0, -4, -1, -5, 6, 5, 0];
console.log(sumNegativeNumbers(number2)); // -10
