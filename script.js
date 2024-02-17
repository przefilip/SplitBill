document.addEventListener('DOMContentLoaded', () => {
    const billAmount = document.getElementById('billAmount');
    const tipRange = document.getElementById('tipRange');
    const peopleCount = document.getElementById('peopleCount');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    let selectedTip = parseFloat(tipRange.value) / 100; // default tip is set by the range input value

    tipRange.addEventListener('input', (e) => {
        selectedTip = parseFloat(e.target.value) / 100;
    });

    calculateBtn.addEventListener('click', () => {
        const bill = parseFloat(billAmount.value);
        const people = parseInt(peopleCount.value);
        const totalTip = bill * selectedTip;
        const totalAmount = bill + totalTip;
        const splitAmount = totalAmount / people;

        resultDiv.innerText = `Each person should pay: $${splitAmount.toFixed(2)}`;
    });
});


function updateTipValue(value) {
    // Update the display of the tip percentage
    document.getElementById('tipPercentDisplay').textContent = value + '%';

    // Assuming you have a function to update the actual tip calculation
    // updateTipCalculation(value);
}
