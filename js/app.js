const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const sybolSet = "~!@#$%^&*()_+/";

const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData =(dataSet) => {
       return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const truncketString = (str, num) => {
    if(str.length > num) {
        return str.substring(0, num);
    } else {
        return str;
    }
}
let  s=0;

const generatePassword = (password = "") =>{
    s++;
    if(upperInput.checked){
        password += getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password += getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password += getRandomData(sybolSet);
        
    }
    if(password.length < totalChar.value){
       return generatePassword(password);
    }
    
    passBox.innerText = truncketString(password, totalChar.value);
    

}

generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function(){
        console.log("button clicked");
        generatePassword();
    }
);


