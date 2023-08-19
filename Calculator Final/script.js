let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}
function Clear(){
    outputScreen.value ="";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
function Percentage(){
    outputScreen.value = eval(outputScreen.value)/100;
}
function reverse_num(){
    outputScreen.value = eval(outputScreen.value)*-1;
}

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}
