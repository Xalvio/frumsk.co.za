const plus = document.querySelector('#add');
const subtract = document.querySelector('#sub');
const multiply = document.querySelector('#multi');
const divide = document.querySelector('#divide');
const result = document.querySelector('#equate');

const display = document.querySelector('#GROGLER');
const liveDisplay = document.querySelector('#GRUMLER');

const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('#brawg');
const pop = document.querySelector('.backspace');

let displayArr = [];
let numberArr = [];





numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (liveDisplay.innerText == '0'){
            displayArr = [];
        }
        displayArr.push(number.innerText);
        console.log(displayArr);
        numberArr = displayArr.join('');
        liveDisplay.innerText = numberArr;
    })
})

clear.addEventListener('click', () => {
    displayArr = [];
    display.innerText = 0;
    liveDisplay.innerText = 0;
})

pop.addEventListener('click', () => {
    if(liveDisplay.innerText == 0){
        return
    }
    displayArr.pop();
    numberArr = displayArr.join('');
    liveDisplay.innerText = numberArr;
})




plus.addEventListener('click', () => {
    displayArr.push(' + ');
    displayArr = [displayArr.join('')]
    console.log(displayArr);
    numberArr = displayArr.join('');
    liveDisplay.innerText = numberArr;
})

subtract.addEventListener('click', () => {
    displayArr.push(' - ');
    displayArr = [displayArr.join('')]
    console.log(displayArr);
    numberArr = displayArr.join('');
    liveDisplay.innerText = numberArr;
})

multiply.addEventListener('click', () => {
    displayArr.push(' * ');
    displayArr = [displayArr.join('')]
    console.log(displayArr);
    numberArr = displayArr.join('');
    liveDisplay.innerText = numberArr;
})

divide.addEventListener('click', () => {
    displayArr.push(' / ');
    displayArr = [displayArr.join('')]
    console.log(displayArr);
    numberArr = displayArr.join('');
    liveDisplay.innerText = numberArr;
})


const shlawg = () => {
    document.querySelector("body").style.backgroundColor = 'white';
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = 'black';
    }, 500);
    
}


result.addEventListener('click', () => {
    displayArr = displayArr.join('');
    liveDisplay.innerText = displayArr;

    displayArr = displayArr.split(' ');
    console.log(displayArr);

    for (let q = 0; q < displayArr.length; q++) {
        if (displayArr[q] == '*'){
            let newVal = multiplication(displayArr[q - 1], displayArr[q + 1]);
            displayArr.splice(q - 1, 3, newVal);
            q -= 1;
        }
        if (displayArr[q] == '/'){
            let newVal = division(displayArr[q - 1], displayArr[q + 1]);
            displayArr.splice(q - 1, 3, newVal);
            q -= 1;
        }
    }

    for (let i = 0; i < displayArr.length; i++) {
        if (displayArr[i] == '+'){
            let newVal = addition(displayArr[i - 1], displayArr[i + 1]);
            displayArr.splice(i - 1, 3, newVal);
            i -= 1;
        }
        if (displayArr[i] == '-'){
            let newVal = subtraction(displayArr[i - 1], displayArr[i + 1]);
            displayArr.splice(i - 1, 3, newVal);
            i -= 1;
        }
    }

    console.log(displayArr);
    display.innerText = Number(displayArr)
    liveDisplay.innerText = '0';

    setInterval(shlawg, 95);
})




const addition = (num1, num2) => {
    return (Number(num1) + Number(num2)).toString()
}

const subtraction = (num1, num2) => {
    return (Number(num1) - Number(num2)).toString()
}

const multiplication = (num1, num2) => {
    return (Number(num1) * Number(num2)).toString()
}

const division = (num1, num2) => {
    return (Number(num1) / Number(num2)).toString()
}
