function calculateSalary(monthlyPayScale, deductions) {
    // Deduct the deductions from the fixed monthly pay scale
    let salary = monthlyPayScale - deductions;

    // Display the final salary
    console.log("The calculated salary is: " + salary);
}

// Example usage
let monthlyPayScale = 25000;
let deductions = 5000;  // Example deduction
calculateSalary(monthlyPayScale, deductions);