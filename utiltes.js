function getInputElemnentIdValue (inputValueId){
    const inputFiled = document.getElementById(inputValueId);
    const inputFiledValueString = inputFiled.value;
    const inputValueFiled = parseFloat(inputFiledValueString);
    return inputValueFiled;
 
 };
 
 function getElementIdValue(elementId){
     const depositElement = document.getElementById(elementId);
     const depositElementString = depositElement.innerText;
     const depositElementValue = parseFloat(depositElementString);
     return depositElementValue;
 };
 
 function setElementValue(elementId, newElement){
     const setNewText = document.getElementById(elementId);
     setNewText.innerText = newElement;
 
 };