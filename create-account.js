function createAccount(pin, amount=0) {
  let accountPin = pin;
  let balance = amount;
  return {
    checkBalance: function (pin) {
      if (pin === accountPin) {
        return `$${balance}`;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit: function (pin, amount) {
      if (pin === accountPin) {
        balance += amount;
        return `Successfully deposited $${amount}. Current balance: $${balance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw: function (pin, amount) {
      if (pin === accountPin) {
        if (amount <= balance) {
          balance -= amount;
          return `Successfully withdrew $${amount}. Current balance: $${balance}.`
        } else {
          return "Withdrawal amount exceeds account balance. Transaction cancelled."
        }
      } else {
        return "Invalid PIN.";
      }
    },
    changePin: function (currentPin, newPin) {
      if (currentPin === accountPin) {
        accountPin = newPin;
        return "PIN successfully changed!"
      } else {
        return "Invalid PIN.";
      }
    }
  }
}

module.exports = { createAccount };
