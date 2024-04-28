const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const output = document.getElementById("output");
const textInput = document.getElementById("text-input");

const filterText = (text) => {
    console.log("filterText method called");
};

const checkPalindrome = (text) => {
    console.log("checkPalindrome method called");
};



const isValidInput = (text) => {
    if(text === "") {
        alert("Please input a value");
    }
};

const cleanInputString = (text) => {
    console.log(text);

    const regex =  /[\W-\s]/g;
    const cleanText = text.toLowerCase().replace(regex, "");
    console.log(cleanText);
};

checkButton.addEventListener("click", () => {

    console.log(`${textInput.value} was entered.`);
    const input = textInput.value;
    isValidInput(input);
    cleanInputString(input);
    
});
