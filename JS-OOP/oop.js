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

    deposit(inputAmount){
        let currentBalance = this.getBalance()
        const totalBalance = currentBalance += inputAmount
        localStorage.setItem(`${this.owner.toLowerCase()}BankBalance`, totalBalance);
        // document.querySelector('.js-balance').innerHTML = totalBalance;
        this.updateBalanceDisplay(totalBalance);

    }
    withdraw(inputAmount){
        let currentBalance = this.getBalance()
        const updatedAmount = currentBalance -= inputAmount
        localStorage.setItem(`${this.owner.toLowerCase()}BankBalance`, updatedAmount);
        // document.querySelector('.js-balance').innerHTML = updatedAmount;
        this.updateBalanceDisplay(updatedAmount);

    }
    getBalance(){
        let currentBalance = localStorage.getItem(`${this.owner.toLowerCase()}BankBalance`) || this.initialBalance;
        return Number(currentBalance)
    }
    initialization(){
        let currentBalance = this.getBalance();
        this.updateBalanceDisplay(currentBalance);
        

    }
    addInterestAmount(interest){
        let currentBalance = this.getBalance()
        const InterestAmount = currentBalance * (interest/100)

        const totalAmount = currentBalance + InterestAmount

        localStorage.setItem(`${this.owner.toLowerCase()}BankBalance`, totalAmount)
        // document.querySelector('.js-balance').innerHTML = totalAmount
        this.updateBalanceDisplay(totalAmount);

    }
    setUpEventListeners(){
        const cardElement = document.querySelector(`#${this.owner.toLowerCase()}-card`)
        const depositButton = cardElement.querySelector('.js-deposit')
        const withdrawButton = cardElement.querySelector('.js-withdraw')
        const interestButton = cardElement.querySelector('.js-interest')
        const inputAmountField = cardElement.querySelector('.input-amount');

        depositButton.addEventListener('click',() => {
            const inputValue = Number(inputAmountField.value);
            this.deposit(inputValue);

        })
        withdrawButton.addEventListener('click', () => {
            const inputValue = Number(inputAmountField.value);
            this.withdraw(inputValue);

        })
        interestButton.addEventListener('click', () =>{
            const inputValue = Number(inputAmountField.value);
            this.addInterestAmount(inputValue);

        })
        // depositButton.forEach((button) => {
        //     button.addEventListener('click',() => {
        //         const inputValue = Number(document.querySelector('.input-amount').value);
        //         this.deposit(inputValue)

        //     })

        // })
        // withdrawButton.forEach((button) =>{
        //     button.addEventListener('click', () =>{
        //         const inputValue = Number(document.querySelector('.input-amount').value);
        //         this.withdraw(inputValue)

        //     })
        // })
        
        // interestButton.forEach((button) => {
        //     if(button) {
        //         button.addEventListener('click',() => {
        //             const interestRate = Number(document.querySelector('.input-amount').value);
        //             this.addInterestAmount(interestRate)
                    

        //         })
        //     }
        // })
    }
    updateBalanceDisplay(balance) {
        const cardElement = document.querySelector(`#${this.owner.toLowerCase()}-card`);
        cardElement.querySelector('.js-balance').innerHTML = balance;
    }
        

}



const AliceAccount = new BankAccount('Alice', 1000); // Initial balance for Alice
const BobAccount = new BankAccount('Bob', 2000);   


