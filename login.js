document.addEventListener("DOMContentLoaded", () => {

  // Dados do professor
  const usuarioProfessor = {
    email: "00001096034827sp@aluno.educacao.sp.gov.br",
    senha: "escola123",
    tipo: "professor"
  };

  // Dados do diretor
  const usuarioDiretor = {
    email: "millenarocharando153@gmail.com",
    senha: "escola1234",
    tipo: "diretor"
  };

  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const mensagemErro = document.getElementById("erro");

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    // Login do professor
    if (email === usuarioProfessor.email && senha === usuarioProfessor.senha) {
      sessionStorage.setItem("usuario", JSON.stringify(usuarioProfessor));
      window.location.href = "professor/menu-professor.html";

    // Login do diretor
    } else if (email === usuarioDiretor.email && senha === usuarioDiretor.senha) {
      sessionStorage.setItem("usuario", JSON.stringify(usuarioDiretor));
      window.location.href = "diretor/menu-diretor.html";

    // Login errado
    } else {
      mensagemErro.style.display = "block";
    }
  });
});
