const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let isValid = true;

    clearErrors();

    if (name.value.trim() === "") {
        showError(name, "Please enter your name.");
        isValid = false;
    }

    if (email.value.trim() === "") {
        showError(email, "Please enter your email.");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "Please enter a valid email.");
        isValid = false;
    }

    if (subject.value.trim() === "") {
        showError(subject, "Please enter a subject.");
        isValid = false;
    }

    if (message.value.trim() === "") {
        showError(message, "Please enter your message.");
        isValid = false;
    }

    if (isValid) {
        alert("Message sent successfully!");

        contactForm.reset();
    }
});

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".error-message");

    errorMessage.textContent = message;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");

    errorMessages.forEach(function (error) {
        error.textContent = "";
    });
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


// ==============================
// DARK MODE
// ==============================

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

// ==============================
// MOBILE NAVIGATION
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});