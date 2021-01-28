let numberInput = document.getElementById("number-Input");
let runButton = document.getElementById("run-button");
let output = document.getElementById("output");

function printMultiply() {
    let number = Number(numberInput.value); //ดึงค่า
    let outputHtml = "";

    if (number === 0); {
        output.innerHTML = "เฮลโล่วเหวอ";
    }

    for (let i = 1; i <= 12; i++) {
        outputHtml += "<p>";
        outputHtml += number + " x " + i + " = " + ( number * i );
        outputHtml += "</p>";
        //return; //เมื่อ code เจอคำสั่งนี้ จะไม่ทำข้างล่างต่อ เหมือนหลุดออกจากช่วงคำสั่งไปเลย
    }

    output.innerHTML = outputHtml;
}

runButton.addEventListener("click", printMultiply);
