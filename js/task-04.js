const refs = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    valueElement: document.querySelector('#value'),
};

refs.btnDecrement.addEventListener('click', onButtonDecrementClick);
refs.btnIncrement.addEventListener('click', onButtonIncrementClick);

let counterValue = 0;

function onButtonDecrementClick() {
    counterValue -= 1;
    console.log(counterValue);
    refs.valueElement = counterValue;
    document.getElementById('value').textContent = counterValue;
}

function onButtonIncrementClick() {
    counterValue += 1;
    console.log(counterValue);
    refs.valueElement = counterValue;
    document.getElementById('value').textContent = counterValue;
}