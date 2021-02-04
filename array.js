let fruits = ['Apple', 'Banana', 'Orange'];

fruits[4] = 'Melon' //index เปลี่ยนค่า
console.log(fruits);

// unshift ใส่เป็นตัวแรก push ใส่เป็นตัวสุท้าย
// shift ลบข้อมูลตัวแรก pop ลบข้อมูลตัวสุดท้าย
fruits.push('Watermelon');

fruits.pop();

// splice (ตำแหน่ง, จำนวนตัวที่จะลบ, ข้อมูลที่จะใส่เพิ่ม)
fruits.splice(1, 1, 'Pineapple');

console.log(fruits);

// การนับmember
console.log(fruits.length);
