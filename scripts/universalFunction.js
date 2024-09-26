function getInputValueById(InputField){
    const inputField=document.getElementById(InputField)
    const inputValue=inputField.value;
    const value=parseFloat(inputValue);
    return value;
}

function setInnerTextById(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}