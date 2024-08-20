const textInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");
const resultText = document.getElementById("result-text");
const check = () => {  
    const input = textInput.value.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').toLowerCase();
    const reverseInput = input.split('').reverse().join('');
    console.log(input)
    if (input.length === 0 ){
        alert("Please input a value")
    } else if (input.length === 1){
        resultText.innerText = `${textInput.value} is a palindrome`
    } else if (reverseInput === input){
        resultText.innerText = `${textInput.value} is a palindrome`
    }
}
button.addEventListener("click", check)