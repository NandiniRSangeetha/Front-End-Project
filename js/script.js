
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


document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Close the current modal
    document.getElementById('loginModal').style.display = 'none';

    // Open the registration modal
    document.getElementById('registerModal').style.display = 'block';
});

// Close buttons for modals
document.getElementById('loginModelClose').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

document.getElementById('registerModelClose').addEventListener('click', function() {
    document.getElementById('registerModal').style.display = 'none';
});




function validateForm() {
    const fullname = document.getElementById("fullname").value;
    const contact = document.getElementById("contact").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (!fullname || !contact || !dob || !email || !password) {
        alert("All fields are required.");
        return false;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters.");
        return false;
    }
    
    return true;
}

