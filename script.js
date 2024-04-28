const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const textInput = document.getElementById("text-input");

const filterText = (text) => {
    console.log("filterText method called");
};

const isValidInput = (text) => {
    if(text === "") {
        alert("Please input a value");
        return null;
    }
};

const cleanInputString = (text) => {
    console.log(text);

    const regex =  /[\W-_\s]/g;
    const cleanText = text.toLowerCase().replace(regex, "");
    console.log(cleanText);
    return cleanText;
};

const isValidPalindrome = (cleanText) => {
    if (cleanText.length === 1 || cleanText.length === 0) {
        return true;
    }
    const half = Math.floor(cleanText.length/2);
    let j = cleanText.length - 1;
    for(let i = 0; i < half; i++) {
        if (cleanText[i] !== cleanText[j]) {
            return false;
        } else {
            j--;
        }
    }
    return true;
};


checkButton.addEventListener("click", () => {
    if(textInput.value === "") {
        alert("Please input a value");
        return null;
    }
    const input = textInput.value;
    isValidInput(input);
    
    result.innerText = isValidPalindrome(cleanInputString(input)) ? `${input} is a palindrome` : `${input} is not a palindrome`;
    
});
