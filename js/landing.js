
// animation 
  gsap.registerPlugin(ScrollTrigger);

    gsap.to(".heading-animate", {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".heading-animate",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });











document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const message = document.getElementById("message").value.trim();

  let emailerror = document.getElementById("emailerror");
  let nameerror = document.getElementById("nameerror");
  let addresserror = document.getElementById("addresserror");
  let massageerror = document.getElementById("massageerror");

  emailerror.textContent = "";
  nameerror.textContent = "";
  addresserror.textContent = "";
  massageerror.textContent = "";

  let isvaild = true;

  if (email === "") {
    emailerror.textContent = "Email is required";
    isvaild = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailerror.textContent = "Enter a valid email";
    isvaild = false;
  }

  if (name === "") {
    nameerror.textContent = "Name is required";
    isvaild = false;
  } else if (/\d/.test(name)) {
    nameerror.textContent = "Name should not contain numbers";
    isvaild = false;
  }

  if (address === "") {
    addresserror.textContent = "Address is required";
    isvaild = false;
  } else if (/^\d+$/.test(address)) {
    addresserror.textContent = "Address should include letters";
    isvaild = false;
  }

  if (message === "") {
    massageerror.textContent = "Message is required";
    isvaild = false;
  } else if (message.length < 20) {
    massageerror.textContent = "Message should be at least 20 characters";
    isvaild = false;
  }
  if(isvaild){
    alert("✅ Your form has been submitted successfully!");
  }

  document.getElementById("email").value = "";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("message").value = "";

 
});



  