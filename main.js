//
document.addEventListener("DOMContentLoaded", function () {
    var countryNameElement = document.getElementById('country-name');
    var countries = ["India", "France", "United States", "Germany", "Japan"];
    var countryIndex = 0;

    function changeCountryName() {
        countryNameElement.textContent = countries[countryIndex];
        countryIndex = (countryIndex + 1) % countries.length;
    }
    setInterval(function () {
        changeCountryName();
    }, 2000);
});



document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let whereTo = document.getElementById("whereTo").value;
    let numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);
    let description = document.getElementById("description").value;

    let errors = [];


    if (numberOfPeople < 1 || isNaN(numberOfPeople)) {
        errors.push("Number of people should be at least 1.");
    }

    if (endDate < startDate) {
        errors.push("End date should be greater than or equal to start date.");
    }

    if (description.length < 50) {
        errors.push("Description should have at least 50 characters.");
    }

    if (errors.length === 0) {
        alert("Booking successful!");
        document.getElementById("bookingForm").reset();
    } else {
        let errorMessage = "Please fix the following errors:\n";
        errors.forEach(function(error) {
            errorMessage += "- " + error + "\n";
        });
        alert(errorMessage);
    }
});

document.getElementById('startDate').onchange = function () {
    document.getElementById('endDate').setAttribute('min',  this.value);
};


function createStarRating() {
    const ratings = document.querySelectorAll('.rating');

    ratings.forEach(rating => {
        const ratingValue = parseFloat(rating.getAttribute('data-rating'));
        let starsHTML = '';
        let flag=true;
        for (let i = 1; i <= 5; i++) {
            if (i <= ratingValue) {
                starsHTML += '<span class="star-full"></span>';
            } else if (ratingValue-parseInt(ratingValue) >= 0.5 && flag) {
                starsHTML += '<span class="star-half"></span>';
                flag=false
            } else {
                starsHTML += '<span class="star-blank"></span>';
            }
        }

        rating.innerHTML = starsHTML;
    });
}

createStarRating();

function redirectToBooking() {
    window.location.href = '#booking-section';
}

// Register 

function redirectToRegister() {
    window.location.href = 'register/register.html';
}

function redirectToLogin() {
    window.location.href = 'login/login.html';
}




