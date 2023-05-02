console.log("email: admin@test.com")
console.log("adm123")
function fazerLogin() {
    const email = document.getElementById("email-login").value;
    const senha = document.getElementById("senha-login").value;
    if (email === "admin@test.com" && senha === "adm123") {
        window.location.href="https://ujobs.vercel.app/freelancers.html?"
    } else {
        alert("E-mail ou senha incorretos.");
    }
  }
  function redirecionarParaPagina() {
    
  }