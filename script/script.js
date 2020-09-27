function cadastro() {
  let nome = document.getElementById("nome");
  let sobrenome = document.getElementById("sobrenome");
  let email = document.getElementById("email");
  let telefone = document.getElementById("telefone");
  let question = document.getElementById("question");

  let dados = JSON.parse(localStorage.getItem("dadosCadastro"));

  if (dados == null) {
    localStorage.setItem("dadosCadastro", "[]");
    dados = [];
  }

  var registro = {
    nome: nome.value,
    sobrenome: sobrenome.value,
    email: email.value,
    telefone: telefone.value,
    question: question.value,
  };

  dados.push(registro);

  localStorage.setItem("dadosCadastros", JSON.stringify(dados));
  console.log(localStorage);

  nome.value = "";
  sobrenome.value = "";
  email.value = "";
  telefone.value = "";
  question.value = "";
}
