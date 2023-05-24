document.getElementById('btn-withdraw').addEventListener('click', function(){
const newWithdrawBalance = getInputElemnentIdValue('withdraw-filed');
const previusWithdrawBalance = getElementIdValue('withdraw-total');

const totalWithdrowBalance = previusWithdrawBalance + newWithdrawBalance;

setElementValue('withdraw-total',totalWithdrowBalance);

const previusTotalBalance = getElementIdValue('total-balance');
const totalBalance = previusTotalBalance - newWithdrawBalance;

setElementValue('total-balance', totalBalance);

})