document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 


  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const message = document.getElementById("message");

  let valid = true;

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
    email.classList.add("is-invalid");
    valid = false;
  } else {
    email.classList.remove("is-invalid");
  }

  // Address validation
  if (address.value.trim() === "") {
    address.classList.add("is-invalid");
    valid = false;
  } else {
    address.classList.remove("is-invalid");
  }

  // Message validation (minimum 10 characters)
  if (message.value.trim().length < 10) {
    message.classList.add("is-invalid");
    valid = false;
  } else {
    message.classList.remove("is-invalid");
  }

  // If everything is valid
  if (valid) {
    alert("Form submitted successfully!");
    // You can also reset the form here if you want:
    // document.getElementById("contactForm").reset();
  }

  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("message").value = "";


});