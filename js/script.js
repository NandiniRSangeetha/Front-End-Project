
const countries = ["United States", "India", "France", "Germany", "Australia"];
let index = 0;
setInterval(() => {
    document.getElementById('dynamic-country').textContent = 'Visit ' + countries[index];
    index = (index + 1) % countries.length;
}, 200);



// Set minimum date for start date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('start-date').setAttribute('min', today);
document.getElementById('end-date').setAttribute('min', today);

function updateEndDate() {
    const startDateValue = document.getElementById('start-date').value;
    document.getElementById('end-date').setAttribute('min', startDateValue);
}

document.addEventListener('DOMContentLoaded', () => {
    updateCharacterCount(); 
});

function updateCharacterCount() {
    const textarea = document.getElementById('description');
    const charCountDisplay = document.getElementById('charCount');
    const maxLength = textarea.getAttribute('maxlength');
    const currentLength = textarea.value.length;

    const remainingChars = maxLength - currentLength;
    charCountDisplay.textContent = `${remainingChars} characters remaining`;


    if (remainingChars < 50) {
        charCountDisplay.style.color = 'red';
    } else {
        charCountDisplay.style.color = 'black';
    }
}

function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);

    // Check if end date is greater than start date
    if (endDate <= startDate) {
        alert('End date must be greater than start date.');
        return false;
    }

    // Check if all fields are filled correctly
    if (document.getElementById('booking-form').checkValidity()) {
        alert('Booking successful!');
        // Here, you can also submit the form data to your server if needed
        return true;
    } else {
        alert('Please fill out all fields correctly.');
        return false;
    }
}

// JavaScript for the image slider
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
    
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 5000); 
}

window.onload = () => {
    showSlide(currentSlide);
    autoSlide();
};


// document.getElementById('registerLink').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default link behavior

//     // Close the current modal
//     document.getElementById('loginModal').style.display = 'none';

//     // Open the registration modal
//     document.getElementById('registerModal').style.display = 'block';
// });

// // Close buttons for modals
// document.getElementById('loginModelClose').addEventListener('click', function() {
//     document.getElementById('loginModal').style.display = 'none';
// });

// document.getElementById('registerModelClose').addEventListener('click', function() {
//     document.getElementById('registerModal').style.display = 'none';
// });




function validateRegisterForm() {
    // Get form field values
    var fullName = document.getElementById("fullName").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;

    // Regular expression for email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Contact number validation (basic validation for phone numbers)
    var phonePattern = /^[0-9]{10}$/;

    // Clear previous error messages
    document.getElementById("nameHelp").innerText = "";
    document.getElementById("contactHelp").innerText = "";
    document.getElementById("emailHelp").innerText = "";
    document.getElementById("passwordHelp").innerText = "";
    document.getElementById("dobHelp").innerText = "";

    // Full Name Validation (Should not be empty)
    if (fullName.trim() === "") {
        document.getElementById("nameHelp").innerText = "Full name cannot be empty.";
        return false;  // Prevent form submission
    }

    // Contact Number Validation (Should be exactly 10 digits)
    if (!contactNumber.match(phonePattern)) {
        document.getElementById("contactHelp").innerText = "Please enter a valid 10-digit phone number.";
        return false;
    }

    // Email Validation
    if (!email.match(emailPattern)) {
        document.getElementById("emailHelp").innerText = "Please enter a valid email address.";
        return false;
    }

    // Password Validation (At least 6 characters)
    if (password.length < 6) {
        document.getElementById("passwordHelp").innerText = "Password must be at least 6 characters.";
        return false;
    }

    // Date of Birth Validation (Age must be at least 18)
    if (dob === "") {
        document.getElementById("dobHelp").innerText = "Please select your date of birth.";
        return false;
    }

    var birthDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        document.getElementById("dobHelp").innerText = "You must be at least 18 years old.";
        return false;
    }

    // If all validations pass
    alert("Registration successful!");
    return true;  // Form can be submitted
}


// Validate login form before submission
function validateLoginForm() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false; 
    }
  
    if (password === "") {
      alert("Please enter your password.");
      return false; 
    }
  
    alert("Login successful!");  
    return true; 
  }


  $('#loginModal').on('shown.bs.modal', function () {
    // Disable body scroll when modal is opened
    $('body').css('overflow', 'hidden');
});

$('#loginModal').on('hidden.bs.modal', function () {
    // Enable body scroll when modal is closed
    $('body').css('overflow', 'auto');
});
  

