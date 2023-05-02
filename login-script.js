function fazerLogin() {
    const email = document.getElementById("email-login").value;
    const senha = document.getElementById("senha-login").value;
    if (email === "admin@test.com" && senha === "adm123") {
        window.open("https://ujobs.vercel.app/Principal.html")
    } else {
        alert("E-mail ou senha incorretos.");
    }
  }
  function redirecionarParaPagina() {
    window.open("https://ujobs.vercel.app/Principal.html")
  }