let score = 100
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Please enter a valid score between 0 and 100.");
} else {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 75) {
        console.log("Grade: B");
    } else if (score >= 50) {
        console.log("Grade: C");
    } else {
        console.log("Grade: F");
    }
}