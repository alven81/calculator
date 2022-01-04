let result = document.querySelector('.calc-rows--result');
let operation = document.querySelector('.calc-rows--math-sign');
let addString = document.querySelector('.calc-rows--add-string');
let setMemoryString = document.querySelector('.calc-rows--op-sign');

let buttoneOne = document.querySelector('.button_1');
let buttoneTwo = document.querySelector('.button_2');
let buttoneThree = document.querySelector('.button_3');
let buttoneFour = document.querySelector('.button_4');
let buttoneFive = document.querySelector('.button_5');
let buttoneSix = document.querySelector('.button_6');
let buttoneSeven = document.querySelector('.button_7');
let buttoneEight = document.querySelector('.button_8');
let buttoneNine = document.querySelector('.button_9');
let buttoneZero = document.querySelector('.button_0');
let buttoneC = document.querySelector('.button_c');
let buttonBck = document.querySelector('.button_bck');
let buttonPlMn = document.querySelector('.button_plmn');
let buttonOneX = document.querySelector('.button_1x');
let buttonXtwo = document.querySelector('.button_x2');
let buttonTwoSqrX = document.querySelector('.button_2sqrx');
let buttonDiv = document.querySelector('.button_divide');
let buttonMult = document.querySelector('.button_mult');
let buttonMinus = document.querySelector('.button_minus');
let buttonPlus = document.querySelector('.button_plus');
let buttonEq = document.querySelector('.button_eq');
let buttonComma = document.querySelector('.button_comma');
let buttonExt = document.querySelector('.button_ext');
let buttonMR = document.querySelector('.button_mr');
let buttonMC = document.querySelector('.button_mc');
let buttonMPlus = document.querySelector('.button_m_plus');
let buttonMMinus = document.querySelector('.button_m_minus');
let buttonProc = document.querySelector('.button_proc');

let anyDigit = '';
let tempForMathOperation = '';
let setMemory = '';

document.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'Digit1':
        case 'Numpad1':
            clickNumber('1')
            break;
        case 'Digit2':
        case 'Numpad2':
            clickNumber('2')
            break;
        case 'Digit3':
        case 'Numpad3':
            clickNumber('3')
            break;
        case 'Digit4':
        case 'Numpad4':
            clickNumber('4')
            break;
        case 'Digit5':
        case 'Numpad5':
            clickNumber('5')
            break;
        case 'Digit6':
        case 'Numpad6':
            clickNumber('6')
            break;
        case 'Digit7':
        case 'Numpad7':
            clickNumber('7')
            break;
        case 'Digit8':
        case 'Numpad8':
            clickNumber('8')
            break;
        case 'Digit9':
        case 'Numpad9':
            clickNumber('9')
            break;
        case 'Digit0':
        case 'Numpad0':
            clickNumber('0')
            break;
        case 'Backspace':
            bck()
            break;
        case 'NumpadAdd':
            plus()
            break;
        case 'NumpadSubtract':
            minus()
            break;
        case 'NumpadMultiply':
            mult()
            break;
        case 'NumpadDivide':
            divide()
            break;
        case 'NumpadEnter':
        case 'NumpadEqual':
        case 'Enter':
            eq()
            break;
        case 'NumpadDecimal':
            comma()
            break;
        case 'Escape':
            clear()
            break;
        case 'Space':
            transform()
            break;
        default:
            break;
    }
})

buttoneOne.onclick = () => clickNumber('1');
buttoneTwo.onclick = () => clickNumber('2');
buttoneThree.onclick = () => clickNumber('3');
buttoneFour.onclick = () => clickNumber('4');
buttoneFive.onclick = () => clickNumber('5');
buttoneSix.onclick = () => clickNumber('6');
buttoneSeven.onclick = () => clickNumber('7');
buttoneEight.onclick = () => clickNumber('8');
buttoneNine.onclick = () => clickNumber('9');
buttoneZero.onclick = () => clickNumber('0');
buttonBck.onclick = () => bck();
buttonPlus.onclick = () => plus();
buttonMinus.onclick = () => minus();
buttonMult.onclick = () => mult();
buttonDiv.onclick = () => divide();
buttonEq.onclick = () => eq();
buttonComma.onclick = () => comma();
buttoneC.onclick = () => clear();
buttonExt.onclick = () => transform();

function clickNumber(anyDigit) {
    if (addString.textContent === 'power off' || addString.textContent === 'the power is off!') {
        addString.textContent = 'power on'
    }
    let temp = result.textContent;
    if (+temp[0] === 0) {
        temp = result.textContent.replace(/./, "")
        result.textContent = temp + '' + anyDigit;
    } else {
        if (+result.textContent.length <= 11) {
            result.textContent = temp + '' + anyDigit;
        }
    }
}

function returnResult(resultToMax) {
    let maxValue = resultToMax.toString();
    let maxLen = resultToMax.toString().length;
    let i;
    let cycleNumber = [];
    if (maxValue >= 99999999999) {
        result.textContent = 'Overflow'
    } else {
        for (i = 0; i <= 11; i++) {
            cycleNumber[i] = maxValue[i]
        }
        result.textContent = +cycleNumber.join("");
    }
}

function addStringInfo(sign, digit) {
    let toAddString = (`${digit}  ${sign}`);
    addString.textContent = toAddString
}

function clear() {
    result.textContent = 0;
    if (addString.textContent === 'power off' || addString.textContent === 'the power is off!') {
        addString.textContent = 'power on';
    } else {
        addString.textContent = 'clear';
        operation.textContent = ''
    }
}
//есть баг - таймер переключит 'power off' если нажать сразу после
//нажатия backspase, пока надпись 'power off' - backspase будет вызывать ifPwOn()
//если addString = power off
function ifPwOn(addStringBut) {
    if (addString.textContent === 'power off' || addString.textContent === 'the power is off!') {
        addString.textContent = 'the power is off!'
        setTimeout("addString.textContent = 'power off'", 2000)
    } else {
        if (result.textContent != '') {
            addString.textContent = addStringBut
        } else {
            addString.textContent = 'nothing to delete'
            setTimeout("addString.textContent = ''", 3000)
        }
    }
}

function bck() {
    ifPwOn('backspace');
    result.textContent = result.textContent.replace(/.$/g, "") //оставить 0 когда всё удалено
}

buttonPlMn.onclick = function plmn() {
    result.textContent = result.textContent * -1;
}

buttonOneX.onclick = function onex() {
    addStringInfo(result.textContent, '1/x =');
    result.textContent = (1 / result.textContent).toFixed(10); //необходимо сделать функцию для рассчёта знаков после запятой
    returnResult(+result.textContent);
    operation.textContent = ''
}

buttonXtwo.onclick = function xtwo() {
    addStringInfo('exp 2', result.textContent);
    result.textContent = result.textContent ** 2;
    returnResult(+result.textContent);
    operation.textContent = ''
}

buttonTwoSqrX.onclick = function twosqrx() {
    addStringInfo(result.textContent, '2 sqr');
    result.textContent = Math.sqrt(result.textContent);
    returnResult(+result.textContent);
    operation.textContent = ''
}

function divide() {
    eq();
    tempForMathOperation = result.textContent;
    operation.textContent = '/';
    addStringInfo('/', tempForMathOperation);
    result.textContent = '0';
}

function mult() {
    eq();
    tempForMathOperation = result.textContent;
    operation.textContent = '*';
    addStringInfo('*', tempForMathOperation);
    result.textContent = '0';
}

function minus() {
    eq();
    tempForMathOperation = result.textContent;
    operation.textContent = '-';
    addStringInfo('-', tempForMathOperation);
    result.textContent = '0';
}

function plus() {
    eq();
    tempForMathOperation = result.textContent;
    operation.textContent = '+';
    addStringInfo('+', tempForMathOperation);
    result.textContent = '0';
}

buttonProc.onclick = function proc() {
    tempForMathOperation = result.textContent;
    operation.textContent = '%';
    addStringInfo('%', tempForMathOperation);
    result.textContent = '0';
}

function comma() {
    if (result.textContent.toString().length <= 11) {
        if (Number.isInteger(+result.textContent) && result.textContent[result.textContent.toString().length - 1] !== ".") {
            result.textContent = result.textContent + '.';
        } else {
            let tempComma = addString.textContent;
            addString.textContent = "number already float!";
            setTimeout(function () { addString.textContent = tempComma }, 2000)
        }
    }
    else {
        let tempComma = addString.textContent;
        addString.textContent = "number can't be more than 12 digits!";
        setTimeout(function () { addString.textContent = tempComma }, 2000)
    }
}

function transform() {
    let extend = document.querySelector('.calc-rows__ext');
    extend.classList.toggle('calc-rows__close');
    let tempComma = addString.textContent;
    addString.textContent = "transforming!";
    setTimeout(function () { addString.textContent = tempComma }, 500)
}

function eq() {
    switch (operation.textContent) {
        case "/":
            addString.textContent = `${tempForMathOperation} / ${result.textContent}`;
            result.textContent = +tempForMathOperation / +result.textContent;
            returnResult(+result.textContent);
            operation.textContent = '';
            break;
        case "*":
            addString.textContent = `${tempForMathOperation} * ${result.textContent}`;
            result.textContent = +tempForMathOperation * +result.textContent;
            returnResult(+result.textContent);
            operation.textContent = '';
            break;
        case "-":
            addString.textContent = `${tempForMathOperation} - ${result.textContent}`;
            result.textContent = +tempForMathOperation - +result.textContent;
            returnResult(+result.textContent);
            operation.textContent = '';
            break;
        case "+":
            addString.textContent = `${tempForMathOperation} + ${result.textContent}`;
            result.textContent = +tempForMathOperation + +result.textContent;
            returnResult(+result.textContent);
            operation.textContent = '';
            break;
        case "%":
            addString.textContent = `${result.textContent} % from ${tempForMathOperation}`;
            result.textContent = +tempForMathOperation * +result.textContent / 100;
            returnResult(+result.textContent);
            operation.textContent = '';
            break;
    }
}

buttonMC.onclick = function memclean() {
    setMemory = '';
    setMemoryString.textContent = 'MC';
    let tempComma = addString.textContent;
    addString.textContent = "clearing memory in process...";
    setTimeout(function () { addString.textContent = tempComma }, 1000);
    setTimeout(function () { setMemoryString.textContent = '' }, 1000);
}

buttonMPlus.onclick = function memplus() {
    setMemory = +setMemory + +result.textContent;
    setMemoryString.textContent = 'M';
    addString.textContent = `memory =  ${setMemory}`;
    result.textContent = '0'
}

buttonMMinus.onclick = function memminus() {
    setMemory = +setMemory - +result.textContent;
    setMemoryString.textContent = 'M';
    addString.textContent = `memory =  ${setMemory}`;
    result.textContent = '0'
}

buttonMR.onclick = function memread() {
    result.textContent = setMemory;
    setMemoryString.textContent = 'M'
    addString.textContent = `memory =  ${setMemory}`;
}