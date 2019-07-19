
//selectors

const firstNum = document.querySelector('#secondTens');
const secondNum = document.querySelector('#secondOnes');
const colon = document.querySelector('#colon');
const thirdNum = document.querySelector('#msHundreds');
const forthNum = document.querySelector('#msTens');
const div = document.querySelector('.digits');

//Initalizing time
let initTime = 0;
let intervalTimer;


//**********Code for full timer***********


// Start Button

// const startBtn = document.createElement('button');
// startBtn.style.padding = '10px 20px 10px 20px';
// startBtn.style.marginLeft = '20px';
// startBtn.textContent = 'Start!';
// div.appendChild(startBtn);


// // Reset Button

// const resetBtn = document.createElement('button');
// resetBtn.style.padding = '10px 20px 10px 20px';
// resetBtn.style.marginLeft = '20px';
// resetBtn.textContent  = 'Reset!';
// div.appendChild(resetBtn);


// resetBtn.addEventListener('click', () => {
//     clearInterval(intervalTimer);
//     initTime = 0;
//     forthNum.textContent = '-';
//     thirdNum.textContent = '-';
//     startBtn.style.visibility = 'visible';
//     thirdNum.style.color = 'black';
//     forthNum.style.color  = 'black';
// })

// startBtn.addEventListener('click', () => {
//     intervalTimer = setInterval(timer, 1000);
//     startBtn.style.visibility  = 'hidden';
// })



// let firstHand = 1;
// const timer = () => {
//     initTime++;
//     forthNum.textContent = initTime;        

//     if (initTime >= 10) {
//         let timeArr = initTime.toString().split("");
//         forthNum.textContent = timeArr[1]
//         thirdNum.textContent = timeArr[0];

//         if (initTime === 60) {
//         secondNum.textContent = firstHand;
//         firstHand++;
//         initTime= 0;
//         thirdNum.textContent = '-';
//         }

//         if (firstHand >= 10) {
//             let minArr = firstHand.toString().split('');
//             firstNum.textContent = minArr[0];
//             secondNum.textContent = minArr[1];
//         }
//     }

// }

// const intervalTimer = setInterval(timer, 1000);




// **********Code for 10 second timer***********


//Start Button

const startBtn = document.createElement('button');
startBtn.style.padding = '10px 20px 10px 20px';
startBtn.style.marginLeft = '20px';
startBtn.textContent = 'Start!';
div.appendChild(startBtn);


// // Reset Button
const resetBtn = document.createElement('button');
resetBtn.style.padding = '10px 20px 10px 20px';
resetBtn.style.marginLeft = '20px';
resetBtn.textContent  = 'Reset!';
div.appendChild(resetBtn);


resetBtn.addEventListener('click', () => {
    clearInterval(intervalTimer);
    initTime = 0;
    forthNum.textContent = '-';
    thirdNum.textContent = '-';
    startBtn.style.visibility = 'visible';
    thirdNum.style.color = 'black';
    forthNum.style.color  = 'black';
})

startBtn.addEventListener('click', () => {
    intervalTimer = setInterval(tenSecondTimer, 1000);
    startBtn.style.visibility  = 'hidden';
})



const tenSecondTimer = () => {
    initTime++
    forthNum.textContent = initTime;
    if (initTime === 10) {
        let timeArr = initTime.toString().split("");
        forthNum.textContent = timeArr[1]
        thirdNum.textContent = timeArr[0];
        clearInterval(intervalTimer);
        forthNum.style.color = 'red';
        thirdNum.style.color = 'red';
    }
}


//******starting on page load******

// const intervalTimer = setInterval(tenSecondTimer, 1000);
