/* 
- ให้เขียน Function ที่ชื่อว่า exponentialNumber ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers
        1. numbers เป็น Array ที่บรรจุตัวเลข
    - Function นี้จะนำตัวเลขทุกตัวใน numbers มายกกำลังสอง แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
// const exponentialNumber = (array) => {
//   return array.map((e) => {
//     return e * e;
//   });
// };
//Refactor
const exponentialNumber = (numArray) => numArray.map((e)=>e*e)

const numbers1 = [3, 5, 10, 12];
console.log(exponentialNumber(numbers1)); // [ 9, 25, 100, 144 ]

const number2 = [0, -1, -4, -8];
console.log(exponentialNumber(number2)); // [ 0, 1, 16, 64 ]
