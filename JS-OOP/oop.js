// const depositButton = document.querySelector('.js-deposit')
// console.log(depositButton)


// function getBalance(){
//     let  currentBalance = localStorage.getItem('bankBalance') || 1000
//     currentBalance = Number(currentBalance)

//     return currentBalance;
// }


// function deposit(){
// depositButton.addEventListener('click',() => {
//     const inputValue = Number(document.querySelector('.input-amount').value)
   

//     let currentBalance = getBalance()


//     const totalBalance = inputValue + currentBalance
//     localStorage.setItem('bankBalance',totalBalance)

//     document.querySelector('.js-balance') .innerHTML = totalBalance;
   

    
// })
// }
// function initializeBalance() {

//     let currentBalance = getBalance()

    
//     document.querySelector('.js-balance').innerHTML = currentBalance;
// }


// initializeBalance();


// deposit();


// function withdraw(){
//     const withdrawButton = document.querySelector('.js-withdraw')

//     withdrawButton.addEventListener('click',()=>{
//         const withdrawalAmount = Number(document.querySelector('.input-amount').value)

//         let currentBalance = getBalance()
        
//         const updatedAmount = currentBalance - withdrawalAmount;
//         localStorage.setItem('bankBalance',updatedAmount)

//         document.querySelector('.js-balance') .innerHTML = updatedAmount;
       


//     })
// }

// withdraw()





class BankAccount{
    constructor(owner,initialBalance = 1000){
        this.owner = owner;
        this.initialBalance = initialBalance;
        
        this.initialization();
        this.setUpEventListeners()
    }

    deposit(amount){
        let currentBalance = getBalance()
        const totalBalance = currentBalance += this.inputAmount
        localStorage.setItem('bankBalance',totalBalance)
        document.querySelector('.js-balance').innerHTML = totalBalance;

    }
    withdraw(amount){
        let currentBalance = getBalance()
        const updatedAmount = currentBalance -= this.inputAmount
        localStorage.setItem('bankBalance',updatedAmount)
        document.querySelector('.js-balance').innerHTML = updatedAmount;

    }
    getBalance(){
        let currentBalance = localStorage.getItem('bankBalance') || this.initialBalance
        return Number(currentBalance)
    }
    initialization(){
        let currentBalance = getBalance()
       
        document.querySelector('.js-balance').innerHTML = currentBalance
        

    }
    addInterestAmount(interest){
        let currentBalance = getBalance()
        const InterestAmount = currentBalance * (interest/100)

        const totalAmount = currentBalance + InterestAmount

        localStorage.setItem('bankBalance',totalAmount)
        document.querySelector('.js-balance').innerHTML = totalAmount

    }
    setUpEventListeners(){
        const depositButton = document.querySelectorAll('.js-deposit')
        const withdrawButton = document.querySelectorAll('.js-withdraw')
        const interestButton = document.querySelectorAll('.js-interest')

        depositButton.addEventListener('click', () => {
            const inputValue = Number(document.querySelector('.input-amount').value);
            this.deposit(inputValue)

        })
        withdrawButton.addEventListener('click', () => {
            const inputValue = Number(document.querySelector('.input-amount').value);
            this.withdraw(inputValue)

        })
        interestButton.addEventListener('click', () => {
            if(interestButton){
                interestButton.addEventListener('click',() => {
                    const interestRate = Number(document.querySelector('.input-amount').value);
                    this.addInterestAmount(interestRate)
                })
            }

        })
    }
        

}



const balance = Number(document.querySelector('.js-balance').innerHTML)

const AliceAccount = new BankAccount('Alice',balance)
const BobAccount = new BankAccount('Bob',balance)


