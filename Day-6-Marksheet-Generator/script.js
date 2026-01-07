const myMarksheet = document.getElementById('myMarksheet');
let isDisplay = false;

const name = document.getElementById('name');
const rollno = document.getElementById('rollno');
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m3 = document.getElementById('m3');
const m4 = document.getElementById('m4');
const m5 = document.getElementById('m5');
const m6 = document.getElementById('m6');
const m7 = document.getElementById('m7');



//display variables
const nameDisplay = document.getElementById('name-display');
const rollnoDisplay = document.getElementById('rollno-display');
const m1Display = document.getElementById('m1-display');
const m2Display = document.getElementById('m2-display');
const m3Display = document.getElementById('m3-display');
const m4Display = document.getElementById('m4-display');
const m5Display = document.getElementById('m5-display');
const m6Display = document.getElementById('m6-display');
const m7Display = document.getElementById('m7-display');
const totalDisplay = document.getElementById('total-display');
const gradeDisplay = document.getElementById('grade-display');
const percentageDisplay = document.getElementById('percentage-display');
const resultDisplay = document.getElementById('result-display');


function handleMyMarksheet(){
    if(isDisplay){
        myMarksheet.classList.add('d-none');
        isDisplay = false;
    }else{
        myMarksheet.classList.remove('d-none');
        isDisplay = true;
    }
}

function handleSubmit(){
nameDisplay.innerText = name.value;
rollnoDisplay.innerText = rollno.value;
m1Display.innerText = m1.value;
m2Display.innerText = m2.value;
m3Display.innerText = m3.value;
m4Display.innerText = m4.value;
m5Display.innerText = m5.value;
m6Display.innerText = m6.value;
m7Display.innerText = m7.value;
total.innerText = Number(m1Display.innerText) + Number(m2Display.innerText) + Number(m3Display.innerText) + Number(m4Display.innerText) + Number(m5Display.innerText)
                            Number(m6Display.innerText) + Number(m7Display.innerText);

    let percentage = (total.innerText) / 700 * 100;
    percentageDisplay.innerText = per.toFixed(2) + '%';

    let grade = "";

    if (percentage >= 80) {
        grade = 'A';
    }else if(percentage >= 60 && per<=80){
        grade = 'B';
    }else if(percentage >= 40 && per<=60){
        grade = 'C';
    }else{
        grade = 'D';
    }

    gradeDisplay.innerText = grade;

    let result = "";

    if(percentage >= 40){
        result = "PASS";
    }else{
        result = "FAIL";
    }

    resultDisplay.innerText = result;
    
}
  