class Loan {
    constructor(loanAmount, interestRate, loanTerm) {
        this.loanAmount = loanAmount;
        this.interestRate = interestRate / 100;
        this.loanTerm = loanTerm; 
        this.emisPaid = 0; 
    }

    calculateMonthlyPayment() {
        const principal = this.loanAmount;
        const Rate = this.interestRate / 12; 
        const term = this.loanTerm;

        const emi = principal * Rate * Math.pow(1 + Rate, term) / (Math.pow(1 + Rate,term) - 1);
        return emi;
    }

    
    payEmi() {
        if (this.emisPaid < this.loanTerm) {
            this.emisPaid++;
        } else {
            console.log("All EMIs have already been paid!");
        }
    }


    checkLoanStatus() {
        const monthlyPayment = this.calculateMonthlyPayment();
        const totalPaid = monthlyPayment * this.emisPaid;
        const totalToBePaid = monthlyPayment * this.loanTerm;
        const remainingAmount = totalToBePaid - totalPaid;

        return {
            emisPaid: this.emisPaid,
            remainingEmis: this.loanTerm - this.emisPaid,
            totalPaid: totalPaid.toFixed(2),
            remainingAmount: remainingAmount.toFixed(2)
        };
    }
}

const loan = new Loan(10000, 5, 24); 

console.log("Monthly EMI:", loan.calculateMonthlyPayment().toFixed(2));

loan.payEmi();
loan.payEmi();
loan.payEmi();

console.log("Loan Status after 3 EMIs:", loan.checkLoanStatus());