function submitForm() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
  
    if (name && surname && email) {
      alert(`Welcome ${name} ${surname}! Your registration is successful.`);
      window.location.href = 'studyconnect_home.html'; // Redirect to home page
    } else {
      alert("Please fill in all required fields.");
    }
  }
  // Handle Login
function login(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // For now, log the input (replace with backend logic later)
  if (email && password) {
      alert(`Welcome ${name} ${surname}! Your Login is successful.`);
      window.location.href = 'studyconnect_home.html';

  // Redirect to home page
  //window.location.href = 'studyconnect_home.html';
}
/*
// Handle Registration Form Submission
function register(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // For now, log the input (replace with backend logic later)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);

  // Redirect to home page
  window.location.href = 'studyconnect_home.html';
}
*/
function showNotifications() {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = "<h3>No notifications available</h3>";
    openModal();
}


function viewPublicGroups() {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = "<h3>Public Groups: No groups available</h3>";
    openModal();
}

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById("create Group");

// Get the button that opens the modal
var btn = document.getElementById("create Group");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}