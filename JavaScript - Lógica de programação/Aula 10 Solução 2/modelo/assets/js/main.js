const titulo = document.querySelector('.titulo');
const data = new Date();
const opcoes = {
  dateStyle: 'full',
};

titulo.innerHTML += data.toLocaleDateString('pt-BR', opcoes);