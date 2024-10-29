function BankAccount(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;

    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log('${amount} deposited successfully. New balance: ${this.balance}');
        } else {
            console.log("Invalid deposit amount.");
        }
    };

    this.withdraw = function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log('${amount} withdrawn successfully. Remaining balance: ${this.balance}');
        } else if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            console.log("Invalid withdrawal amount.");
        }
    };

    this.checkBalance = function() {
        console.log('Current balance: ${this.balance}');
    };
}

// Creating a new bank account
const myAccount = new BankAccount(1234567890, "John Doe", 1000);

// Test the BankAccount object
myAccount.checkBalance(1000);
myAccount.deposit(500);  
myAccount.withdraw(300);  
myAccount.checkBalance();  
myAccount.withdraw(1500); 