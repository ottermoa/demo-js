//Var of JS
let x = 5;
let y = 5.5;

let z = x+y;
let mya = 5.5;
let myb = "1";

let o = 11;

//magic command make this to Number or String
let m = Number("16");
let a = String(16);

console.log(z)
console.log(mya+myb);
console.log(o+a);

//Operators --- plus minus mutiply divide 
plus = 1 + 2;
minus = 2 - 1;
mutiply = 2 * 3;
divide = 3 / 2;
doublemutiply = 2 ** 4;
fraction = 2 % 3;

//Key of JS --- ++
//can use + - * /
key = 4;
key += 2;
console.log(key);

//compare use = <= >= === !==
let k = 7;
let t = 5;
// show boolean true or false
let me = k >= t;
console.log(me);

// logic ตรรกศาสตร์ --- show true or  false
let p = true;
let q = false;

let first = p && q; //and
let second = p || q; //or
let third = !p; //not
console.log(third);

// Conditions ตรวจสอบเงื่อนไข (เงื่อนไข) {คำสั่งต่างๆ}
let score = 69;

if (score >= 80) { //คืนค่า boolean
    console.log("Grade A");
}
else if (score >= 70) { // ถ้า if ไม่ถูก จะมาตรวจสอบเงื่อนไขนี้ต่อ
    console.log("Grade B");
}
else { // ไม่มีการตรวจสอบ แต่ถ้าไม่ตรงกับเงือนไขข้างบนจะโชว์อันนี้แทน
    console.log("Grade F");
}

// loop ( ค่าเริ่มต้น; เงื่อนไข; การเปลี่ยนแปลง ) ใช้รอบเดียวในการเข้า loop
// { คำสั่งต่างๆ }
for (let i = 1; i <= 12; i ++) { 
    console.log(i);
}

// Example program calculator the power of number
for (let i = 1; i <= 12; i ++) { 
    let answer = i ** 2;
    console.log(answer);
}

// command that can use in loop !!ONLY LOOP!!
for (let i = 1; i <= 12; i ++) { 
    if (i % 2 === 0 ) {
    continue; //จะไม่ทำcommandข้างล่างต่อ
    }
    let answer = i ** 2;
    console.log(answer);
}
for (let i = 1; i <= 12; i ++) { 
    if (i % 10 === 0 ) {
    break; //จะออกจากคำสั่งนั้นทันที
    }
    let answerb = i ** 2;
    console.log(answerb);
}

// Functions ทรงพีระมิด ถ้าไม่เรียกใช้งานก็จะไม่ออกมา
function getPyramidArea() {
    let lenght = 2;
    let widht = 2;
    let height = 3;
    let baseArea = lenght * widht;
    let pyramidVolume = 1/3 * baseArea * height
    console.log(pyramidVolume);    
}

getPyramidArea();

// use parameter (parameter1, ...) { คำสั่งต่างๆ }
function getPyramidArea0( lenght, widht, height) {
    let baseArea = lenght * widht;
    let pyramidVolume = 1/3 * baseArea * height
    //console.log(pyramidVolume);    
    return pyramidVolume; // คืนค่าที่ได้จากการคำนวณ
}

let Area0 = getPyramidArea0(2, 2, 3);
let Area1 = getPyramidArea0(4, 4, 3);
console.log("area1 = " + Area0 +  ", area 2 = " +  Area1 );


