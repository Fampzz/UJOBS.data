function fazerLogin() {
    const email = document.getElementById("email-login").value;
    const senha = document.getElementById("senha-login").value;
    if (email === "admin@test.com" && senha === "adm123") {
        window.open("http://127.0.0.1:5500/Principal.html")
    } else {
        alert("E-mail ou senha incorretos.");
    }
  }
  function redirecionarParaPagina() {
    window.open("http://127.0.0.1:5500/Principal.html")
  }