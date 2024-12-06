function createBankAccount() {
    // Private variables
    let balance = 0;
    let transactionHistory = [];

    return {
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                transactionHistory.push({ type: 'deposit', amount });
                console.log(`Deposited: ${amount}`);
            } else {
                console.log("Invalid deposit amount");
            }
        },
        withdraw: function (amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                transactionHistory.push({ type: 'withdrawal', amount });
                console.log(`Withdrawn: ${amount}`);
            } else if (amount > balance) {
                console.log("Insufficient balance");
            } else {
                console.log("Invalid withdrawal amount");
            }
        },
        checkBalance: function () {
            console.log(`Current balance: ${balance}`);
        },
        getTransactionHistory: function () {
            return [...transactionHistory];
        }
    };
}


