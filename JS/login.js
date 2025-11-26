document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  const correctEmail = "jakobferfolja@gmail.com";
  const correctPassword = "misko";

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

   
    if (!email  || !password ) { //preverja alista prazni gesli
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please enter both email and password.",
        confirmButtonColor: "#000000ff"
      });
      return;
    }
    if(email!=correctEmail || password!=correctPassword){
       Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Wrong email or password.",
        confirmButtonColor: "#000000ff"
      });
      return;
    }
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${email}!`,
        confirmButtonColor: "#000000ff",
      }).then(() => {
        // Tukaj lahko preusmeriš uporabnika
        window.location.href = "index.html";
      });

      
    
  });
});
function sporocilo(event){
        Swal.fire({
          title: "Credit",
          text: "Jakob Ferfolja",
          icon: "info",
          confirmButtonColor: "#000000ff"
        });
      }
