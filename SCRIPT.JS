const form = document.getElementById("formReserva");
const mensagem = document.getElementById("mensagemEnvio");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const mensagemTexto = form.querySelector('textarea').value.trim();

  if (nome === "" || email === "" || mensagemTexto === "") {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.style.color = "red";
    return;
  }

  mensagem.textContent = "Reserva realizada com sucesso!";
  mensagem.style.color = "green";
  form.reset();

  setTimeout(() => {
    mensagem.textContent = "";
  }, 5000);
});
