   document.getElementById('btn-deposit').addEventListener('click', function(){

   const  newDepositValue = getInputElemnentIdValue('deposit-filed');

   const previusDepositValue = getElementIdValue('deposit-ammount');

   //    console.log(previusDepositValue);

   const totalDeposit = previusDepositValue + newDepositValue;

   setElementValue('deposit-ammount', totalDeposit);


   const previusBalanceTotal = getElementIdValue('total-balance');
   const totalBalance = previusBalanceTotal + newDepositValue;

   setElementValue('total-balance', totalBalance);

   
});