const depositButton = document.querySelector('.js-deposit')
console.log(depositButton)

// console.log(typeof inputValue)
// const balance = Number(document.querySelector('.js-balance').innerHTML = inputValue.value);
// console.log(balance)


function deposit(){
depositButton.addEventListener('click',() => {
    const inputValue = Number(document.querySelector('.input-amount').value)
    // console.log(inputValue)

    let  currentBalance = localStorage.getItem('bankBalance') || 1000
    currentBalance = Number(currentBalance)
    // Number(document.querySelector('.js-balance').innerHTML) 
    // console.log(balance)

    const totalBalance = inputValue + currentBalance
    localStorage.setItem('bankBalance',totalBalance)
    // localStorage.setItem('newBalance',totalBalance)

    document.querySelector('.js-balance') .innerHTML = totalBalance;
   

    
})
}
function initializeBalance() {
    // Get current balance from local storage or default to 1000
    let currentBalance = localStorage.getItem('bankBalance') || 1000;
    currentBalance = Number(currentBalance);

    // Update balance display in HTML
    document.querySelector('.js-balance').innerHTML = currentBalance;
}

// Initialize balance on page load
initializeBalance();

// Call deposit function to handle depositing money
deposit();


function withdraw(){
    const withdrawButton = document.querySelector('.js-withdraw')

    withdrawButton.addEventListener('click',()=>{
        const withdrawalAmount = Number(document.querySelector('.input-amount').value)
        console.log(withdrawalAmount)
        const balance = Number(document.querySelector('.js-balance').innerHTML) 
        const updatedAmount = balance - withdrawalAmount;
        document.querySelector('.js-balance') .innerHTML = updatedAmount;
       


    })
}

withdraw()