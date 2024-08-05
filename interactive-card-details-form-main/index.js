
function sendCard(){

const cardHolder = document.getElementById('card-holder').value
const cardNumber = document.getElementById('card-number').value
const cardMonth = document.getElementById('card-month').value
const cardYear = document.getElementById('card-year').value
const cardCvc = document.getElementById('card-cvc').value

const formattedDigits = cardNumber.match(/.{1,4}/g).join(' ')

document.querySelector('.card-front').innerHTML = `
    <div class="Column">
    <h1>${formattedDigits}</h1>
    <div class="row">
    <h2>${cardHolder}</h2><h2>${cardMonth}/${cardYear}</h2>
    </div>
    </div>
`   


document.querySelector('.card-back').innerHTML = `
    <span>${cardCvc}</span>
    `

const regexCardNumber =/\d{16}/
const cardNumberEl = document.getElementById('cardNum')
const dateymEl = document.getElementById('dateEl')
const cvcEl = document.getElementById('cvcEl')
const success = document.getElementById('success')
const containerEl = document.getElementById('container')

if(!regexCardNumber.test(cardNumber)){
    cardNumberEl.classList = 'cardNum-rejected'
}

else{
    cardNumberEl.classList = 'cardNum-confirm'
}

if(cardYear == "" || cardMonth == ""){
    dateymEl.classList = 'date-reject'
}

else if (!cardYear == "" && cardMonth == ""){
    dateymEl.classList = 'date-reject'
}

else if (cardYear == "" && !cardMonth == ""){
    dateymEl.classList = 'date-reject'
}

else{
    dateymEl.classList = 'date-confirm'
}

if(cardCvc == ""){
    cvcEl.classList = 'cvcElerr'
}

else{
    cvcEl.classList = 'cvcEl'
}

if(
    cardCvc!="" && 
    cardYear !="" &&
    cardMonth!="" && 
    regexCardNumber.test(cardNumber) 
){
    success.innerHTML = 
       `
        <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
        <h1>Thank you!</h1>
        <p>We've added your card details</p>
        <button onclick="location.reload()"
        >Continue</button>
       
       `
       containerEl.classList = 'container-hide'
}



//else{
//    containerEl.style.display = none;
//    successEl.innerHTML = 
//        `<div>
//        Thank you!
//        We've added your card details
//        Continue
//        </div>
//        `
//    }
}
