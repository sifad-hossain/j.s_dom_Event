// Option 1: Directly set on the HTML element
// <button onclick="console.log(75);">Another button</button>

//Option 2: add onClick function(Most uses) on the html element{imp : we will use this}

// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// Option 3:
const makeBlueBtn = document.getElementById('make-blue');
// console.log(makeBlueBtn);
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor='blue' ;
}

//Option 3: another;

const purpleBtn = document.getElementById('make-purple');
// console.log(purpleBtn);
purpleBtn.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// Option 4:
const pinkButton = document.getElementById('make-pink')
// console.log(pinkButton);
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

//Option 4: another;
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// Option 4: Final{imp: we will use this sometimes}
document.getElementById('make-goldenrod').addEventListener('click', function () {
  document.body.style.backgroundColor = 'goldenrod';  
})














































































/////****** */
// function password(obj) {
//     if (obj.name && obj.birthYear >= 1000 && obj.birthYear <= 9999 && obj.siteName) {
//     obj.siteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();
//     return `${obj.siteName}#${obj.name}@${obj.birthYear} `;
//     }
//     else
//     return 'invalid';
//     }
  
  
//     console.log(password({ name: "rahat", birthYear: 2002, siteName: "facebook" }))



/////******* */

// function checkName(name){

//     if(typeof name!=="string"){
//         return 'invalid';
//     }
//     const word='a, y, u, i, e, o, u, w';
//     const letter=word.split(',');
//     const bd =name.toLocaleLowerCase().split('');
//     const bdlength=bd.length;
//     const lastbd=bdlength-1;

// if((letter).includes(bd[lastbd])){
//     return 'Good Name';
// }
// else{
//     return 'Bad Name';
// }

// }



/////****** */
// function monthlySavings(arr, livingCost){
//     if(!(Array.isArray(arr)) || (typeof livingCost!=="number")){
//         return "invalid input"
    
//     }
    
//         let sum=0;
//     for(let i=0; i<arr.length; i++){
    
//         if(arr[i]>=3000){
//           arr[i] = arr[i] - (arr[i] * 20) / 100;

//         } 
//             sum=sum+arr[i];
//     }
// const savings=sum-livingCost;
//                 if(savings>=0){
//                     return  `${savings}` ;
//                 }else{
//                     return "earn more"
//                 }
                
//     }


///**** */
// function monthlySavings(allPayment, livingCost) {
//     if (!Array.isArray(allPayment) || typeof livingCost !== "number") {
//     return "Invalid Input";
//     }
//     let totalPaymentAfterTax = 0;
//     for (let paymnet of allPayment) {
//     if (paymnet >= 3000) {
//     let tax = paymnet * 0.2;
//     let afterTax = paymnet - tax;
//     totalPaymentAfterTax += afterTax;
//     } else {
//     totalPaymentAfterTax += paymnet;
//     }
//     }
//     const totalSaving = totalPaymentAfterTax - livingCost;
//     if (totalSaving < 0) {
//     return "earn more";
//     }
//     return totalSaving;
//     }


////***** */
// function monthlySavings(arr, livingCost) {
//     if (Array.isArray(arr) && typeof livingCost === 'number') {
//     let sum = 0;
//     for (const money of arr) {
//     if (money >= 3000) {
//     const afterVat = money - (money * .2);
//     sum = sum + afterVat;
//     }
//     else {
//     sum = sum + money;
//     }
//     }
//     const saving = sum - livingCost;
//     if (saving >= 0) {
//     return saving;
//     }
//     else {
//     return 'earn More';
//     }
//     }
//     else{
//     return 'Invalid Input';
//     }
//     }