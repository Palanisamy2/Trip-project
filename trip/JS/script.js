const homePage = document.getElementById('Home-page');

let scrollSpeed = 1; 
let scrollInterval = setInterval(() => {
    homePage.scrollLeft += scrollSpeed;
    if (homePage.scrollLeft >= homePage.scrollWidth / 2) {
        homePage.scrollLeft = 0; 
    }
}, 30); 

// Get modal elements
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

// Get button elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

// Get close buttons
const loginClose = document.getElementById('loginClose');
const signupClose = document.getElementById('signupClose');

// Show Login Modal
loginBtn.onclick = function() {
    loginModal.style.display = 'flex';
}

// Show Signup Modal
signupBtn.onclick = function() {
    signupModal.style.display = 'flex';
}

// Close Login Modal
loginClose.onclick = function() {
    loginModal.style.display = 'none';
}

// Close Signup Modal
signupClose.onclick = function() {
    signupModal.style.display = 'none';
}

// Close modals when clicking outside the content
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == signupModal) {
        signupModal.style.display = 'none';
    }
}

function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
