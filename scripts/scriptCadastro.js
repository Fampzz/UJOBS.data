
//function gravarInformacaoEMandarParaJson(){
    //pegando o arquivo json:
    fetch('./registroDeClientes')
    .then(response => response.json())
    .then(data => {

    //pegando dados gerais da página de cadastro

    let nome=document.getElementById("nome");
    let sobrenome=document.getElementById("sobrenome");
    let senha=document.getElementById("senha");
    let email=document.getElementById("email");
    let dataDeNascimento=document.getElementById("dataDeNasc");
    let cpf=document.getElementById("cpf");
    let profissao=document.getElementById("profissao");
    let telefone=document.getElementById("telefone");
    let preco=document.getElementById("preco");
    let rua=document.getElementById("rua");
    let bairro=document.getElementById("bairro");
    let cidade=document.getElementById("cidade");
    let estado=document.getElementById("estado");
    let cep=document.getElementById("cep");

    //verificação de ID:

    //armazenar dados em objeto JS:

    let usuario={
      "nome":nome.value,
      "sobrenome":sobrenome.value,
      "senha":senha.value,
      "email":email.value,
      "dataDeNascimento":dataDeNascimento.value,
      "cpf":cpf.value,
      "profissao":profissao.value,
      "telefone":telefone.value,
      "preco":preco.value,
      "rua":rua.value,
      "bairro":bairro.value,
      "cidade":cidade.value,
      "estado":estado.value,
      "cep":cep.value,
    }

 // }