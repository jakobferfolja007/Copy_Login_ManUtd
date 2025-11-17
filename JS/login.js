document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please enter both email and password."
      });
      return;
    }

    // Simulacija uspešne prijave
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
