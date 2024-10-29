function checkScholarshipEligibility(gpa) {
    if (gpa >= 7.5) {
        console.log("Student is eligible for the scholarship.");
    } else {
        console.log("Student is not eligible for the scholarship.");
    }
}


let studentGPA = 8.0;  
checkScholarshipEligibility(studentGPA);