document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("createAccountForm");

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const today = new Date().toISOString().split("T")[0]; //gleda trenutn datum in ga pretvori input type date znano obliko
  document.getElementById("dob").setAttribute("max", today); //današnji datum je natavlejn kot max

    if (!firstName || !surname || !email || !password || !confirmPassword || !dob || !country) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill in all required fields."
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match. Please try again.",
         confirmButtonColor: "#000000ff"
      });
      return;
    }

    // Simulacija uspešne registracije
    Swal.fire({
      icon: "success",
      title: "Account Created",
      text: `Welcome to Manchester United, ${firstName}!`,
      confirmButtonColor: "#000000ff",// bela barva gumba
    }).then(() => {
      // Preusmeritev na prijavno stran
      window.location.href = "index.html";
    });
  });
});
function sporocilo(event) {
  event.preventDefault();
  Swal.fire({
    title: "Credit",
    text: "Jakob Ferfolja",
    icon: "info",
    confirmButtonColor: "#000000ff"
  });
}