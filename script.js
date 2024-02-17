document.addEventListener('DOMContentLoaded', () => {
    const billAmount = document.getElementById('billAmount');
    const tipPercentage = document.getElementById('tipPercentage');
    const peopleCount = document.getElementById('peopleCount');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        const bill = parseFloat(billAmount.value);
        const tip = parseFloat(tipPercentage.value);
        const people = parseInt(peopleCount.value);
        const totalTip = bill * tip;
        const totalAmount = bill + totalTip;
        const splitAmount = totalAmount / people;

        resultDiv.innerText = `Each person should pay: $${splitAmount.toFixed(2)}`;
    });
});
