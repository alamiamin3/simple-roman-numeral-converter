const inputText = document.getElementById("number")
const convertButton = document.getElementById("convert-btn")

const output = document.getElementById("output")

const printValue = (value) =>{
    output.classList.add("value-message")
    output.innerHTML = `<h3>${value}</h3>`
}
const getRomanValue = (input) => {

    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
      ];
      let romanValue = "";
      for(const {value, symbol} of romanNumerals){
          
          while(input >= value)
            {
                romanValue += symbol;
                input -= value;
            }
      }
      printValue(romanValue)

}
const alert = (message) => {
    output.classList.add("alert")
    output.innerHTML = `<h3>${message}</h3>`
}
const parseInputAndgetNumericValue = () =>{
    const inputValue = parseInt(inputText.value)
    inputValue >= 4000  ?  alert("Please enter a number less than or equal to 3999") : inputValue < 1 ?  alert("Please enter a number greater than or equal to 1") : getRomanValue(inputValue)
        
}

convertButton.addEventListener("click" , () => {
    if (!inputText.value)
        alert("Please enter a valid number")
    else
        parseInputAndgetNumericValue()
    
})

inputText.addEventListener("focus", ()=>{
    output.innerHTML = ""
    output.classList.remove("alert", "value-message")
})

  
