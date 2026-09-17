// Pet information
const pets = [
    {
        name: "Buddy",
        type: "Dog",
        description: "Buddy is a friendly dog looking for a new home."
    },
    {
        name: "Luna",
        type: "Cat",
        description: "Luna is a calm cat who likes attention."
    },
    {
        name: "Max",
        type: "Dog",
        description: "Max is an active dog who loves playing outside."
    }
];

// Show the selected pet
function showPet() {
    const petSelect = document.getElementById("petSelect");
    const petInfo = document.getElementById("petInfo");

    if (!petSelect || !petInfo) {
        return;
    }

    const selectedPet = pets.find(function(pet) {
        return pet.name === petSelect.value;
    });

    if (selectedPet) {
        petInfo.innerHTML =
            "<h3>" + selectedPet.name + "</h3>" +
            "<p>Type: " + selectedPet.type + "</p>" +
            "<p>" + selectedPet.description + "</p>";

        localStorage.setItem("favoritePet", selectedPet.name);
    } else {
        petInfo.innerHTML = "<p>Please choose a pet.</p>";
    }
}

// Load the saved pet
function loadSavedPet() {
    const savedPet = localStorage.getItem("favoritePet");
    const petSelect = document.getElementById("petSelect");

    if (savedPet && petSelect) {
        petSelect.value = savedPet;
        showPet();
    }
}

// Validate the contact form
function validateForm(event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");

    let valid = true;

    nameError.textContent = "";
    emailError.textContent = "";

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    } else if (!email.value.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
}

// Set up the page
document.addEventListener("DOMContentLoaded", function() {
    const petSelect = document.getElementById("petSelect");
    const contactForm = document.getElementById("contactForm");

    if (petSelect) {
        petSelect.addEventListener("change", showPet);
        loadSavedPet();
    }

    if (contactForm) {
        contactForm.addEventListener("submit", validateForm);
    }
});
