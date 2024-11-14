document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll(".step");
    const nextButtons = document.querySelectorAll(".next-btn");
    const prevButtons = document.querySelectorAll(".prev-btn");
    let currentStep = 0;

    nextButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            steps[currentStep].classList.remove("active");
            currentStep++;
            steps[currentStep].classList.add("active");
        });
    });

    prevButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            steps[currentStep].classList.remove("active");
            currentStep--;
            steps[currentStep].classList.add("active");
        });
    });
});