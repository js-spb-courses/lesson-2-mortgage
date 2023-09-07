/**
 * Вычисляет ежемесячный платёж по сроку ипотеки
 *
 * @param {float} sum - сумма кредита
 * @param {integer} period - срок в годах
 * @param {float} rate - годовая ставка в процентах
 * @return {integer} или Nan
 */


function getPayment() {
    let price = Number(document.querySelector('.price').value);
    let firstPayment = Number(document.querySelector('.first-payment').value);
    let period = Number(document.querySelector('.period').value);
    let sum = price - firstPayment;
    let rate = Number(document.querySelector('.rate').value);
    const i = (rate / 12) / 100;
    const coefficient = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);
    const result = sum * coefficient;
    document.querySelector('.sum-outer').innerHTML = sum;
    document.querySelector('.payment-outer').innerHTML = result.toFixed();
    document.querySelector('.rate-outer').innerHTML = rate;
    
    let outerNumbers = document.querySelector('.outerNumbers');
    if(result>50000){
        outerNumbers.style.color = 'red';
    }

     else outerNumbers.style.color = 'black';

    console.log (Number(result.toFixed()));
    return Number(result.toFixed());
};



let elements = document.querySelectorAll('form');

for(i=0; i<elements.length; i++){
 elements[i].addEventListener("input", getPayment)

  }


 
