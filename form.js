function submitForm() {
    // Get values from the form fields
    const ageGroup = document.getElementById('ageGroup').value;
    const device = document.querySelector('input[name="device"]:checked');
    const hiringImpact = document.getElementById('hiringImpact').value;
    const socialMedia = document.getElementById('socialMedia').value;
    const comfortLevel = document.querySelector('input[name="comfortLevel"]:checked');
    const chatFrequency = document.querySelector('input[name="chatFrequency"]:checked');
    const favoriteFeature = document.getElementById('favoriteFeature').value;
    const leastFavoriteFeature = document.getElementById('leastFavoriteFeature').value;
    const content = document.querySelectorAll('input[name="features"]:checked');
    const favcolor = document.getElementById('favcolor').value;

    // Collect checkbox values
    const contentPreferences = Array.from(content).map(item => item.value);

    // Validation check
    if (!device || !comfortLevel || !chatFrequency) {
        alert("Please complete all required fields.");
        return;
    }

    // Create an object to store the form data
    const formData = {
        ageGroup: ageGroup,
        device: device.value,
        hiringImpact: hiringImpact,
        socialMedia: socialMedia,
        comfortLevel: comfortLevel.value,
        chatFrequency: chatFrequency.value,
        favoriteFeature: favoriteFeature,
        leastFavoriteFeature: leastFavoriteFeature,
        contentPreferences: contentPreferences,
        favoriteColor: favcolor
    };

    // Store the form data in local storage
    localStorage.setItem('surveyFormData', JSON.stringify(formData));
    alert('Form submitted successfully!');

    // Reset the form after submission
    document.getElementById("surveyForm").reset();
}

function clearForm() {
    // Remove stored data from local storage
    localStorage.removeItem("surveyFormData");

    // Reset the form fields
    document.getElementById("surveyForm").reset();
}
