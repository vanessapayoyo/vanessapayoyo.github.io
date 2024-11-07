// Function to submit form data to local storage
function submitForm() {
    // Capture form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        areaOfInterest: document.getElementById("areaOfInterest").value,
        reasonForContact: document.getElementById("reasonForContact").value,
        referral: document.getElementById("referral").value,
        preferredTime: document.getElementById("preferredTime").value,
        contactMethod: document.getElementById("contactMethod").value,
        message: document.getElementById("message").value
    };

    // Store data in local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert("Form submitted successfully!");
    clearForm();
}

// Function to clear the form fields
function clearForm() {
    document.getElementById("contactForm").reset();
    localStorage.removeItem("contactFormData"); // Optional: clear local storage data
}
