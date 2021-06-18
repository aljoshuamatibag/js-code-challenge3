// 48 dollar meal

function calculateTip(waiterTip) {
    return 20 / 100 * waiterTip;
}

var theTip = calculateTip(48);
console.log(theTip + ' is the tip for $48 meal');

// 124 dollar meal

function calculateAnotherTip(_waiterTipAnother) {
    return 15 / 100 * _waiterTipAnother;
}

var theTipAnother = calculateAnotherTip(124);
console.log(theTipAnother + ' is the tip for $124 meal');

// 268 dollar meal

function calculateAnotherTipAgain(_waiterTipAnotherAgain) {
    return 10 / 100 * _waiterTipAnotherAgain
}

var theTipAnotherAgain = calculateAnotherTipAgain(268);
console.log(theTipAnotherAgain + ' is the tip for $268 meal')

// array of tips

var tips = [theTip, theTipAnother, theTipAnotherAgain];
console.log(tips);

// final bill plus tip
// $48 bill plus tip
function tipFinal(finalBillAndTip) {
    return theTip + finalBillAndTip
}

var yourFinalBillAndTip = tipFinal(48);
console.log('$' + yourFinalBillAndTip + ' is your final bill plus tip');

// $124 bill plus tip

function tipFinalAnother(_finalBillAndTipAnother) {
    return theTipAnother + _finalBillAndTipAnother
}

var yourFinalBillAndTipAnother = tipFinalAnother(124);
console.log('$' + yourFinalBillAndTipAnother + ' is your final bill plus tip');

// $268 bill plus tip

function tipFinalAnotherAgain(_finalBillAndTipAnotherAgain) {
    return theTipAnotherAgain + _finalBillAndTipAnotherAgain
}

var yourFinalBillAndTipAnotherAgain = tipFinalAnotherAgain(268);
console.log('$' + yourFinalBillAndTipAnotherAgain + ' is your final bill plus tip');

var billsAndTips = [yourFinalBillAndTip, yourFinalBillAndTipAnother, yourFinalBillAndTipAnotherAgain];
console.log(billsAndTips);