function getPin()
{
    const pin = generateRandomPin();
    const pinString = pin + '';
    if(pinString.length ===4)
    {
        return pin;
    }
    else{
        return getPin();
    }
}
function generateRandomPin()
{
    const random = Math.floor(Math.random()*10000) 
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pinNumber = getPin();

    //display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pinNumber;
})

document.getElementById('calculator').addEventListener('click',function(event){
   const number = event.target.innerText;
   const typeNumberField = document.getElementById('type-numbers'); 
   const previousTypeNumbers = typeNumberField.value;

   if(isNaN(number))
   {
    if(number === 'C')
    {
        typeNumberField.value = '';
    }
    else if(number === '<')
    {
        const digit = previousTypeNumbers.split('');
        digit.pop();
        const remainDigits = digit.join('');
        typeNumberField.value = remainDigits;
    }
   }
   else{

    const newTypeNumbers = previousTypeNumbers + number;
    typeNumberField.value = newTypeNumbers;
   }

})

document.getElementById('btn-submit').addEventListener('click', function(){
      const displayPinField = document.getElementById('display-pin');
      const currentPin = displayPinField.value;

      const pinSuccesMessage = document.getElementById('pin-success');
      const pinFailureMessage = document.getElementById('pin-failed');
      const typedNumberField = document.getElementById('type-numbers');

      const typeNumber = typedNumberField.value;

      if(typeNumber === currentPin)
      {
        
        pinSuccesMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
      }
      else
      {
        
        pinFailureMessage.style.display = 'block';
        pinSuccesMessage.style.display = 'none';
      }
})