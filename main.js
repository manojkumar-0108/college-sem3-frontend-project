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

// booking section 
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let whereTo = document.getElementById("whereTo").value;
    let numberOfPeople = document.getElementById("numberOfPeople").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let description = document.getElementById("description").value;

    if (whereTo && numberOfPeople && startDate && endDate && description) {
        this.reset();
        alert("Booking successful!");
    } else {
        alert("Please fill in all fields.");
    }
});


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


//login validation

document.getElementById('loginForm').addEventListener('submit', function (event) {

    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // const isPasswordValid = passwordRegex.test(password);
    // const phoneRegex = /^\d{10}$/;
    // const isPhoneValid = phoneRegex.test(contact);
    // const emailRegex = /\S+@\S+\.\S+/;
    // const isEmailValid = emailRegex.test(email);

    if (email && password) {
        alert("You have successfully logged in using : " + email)
    }
});

