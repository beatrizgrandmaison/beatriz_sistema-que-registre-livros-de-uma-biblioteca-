const form = document.getElementById('formLivro');
const lista = document.getElementById('listaLivros');

function carregarLivros() {
  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  lista.innerHTML = '';
  livros.forEach((livro, index) => {
    const div = document.createElement('div');
    div.className = 'livro';
    div.innerHTML = `
      <span><strong>Título:</strong> ${livro.titulo}</span>
      <span><strong>Autor:</strong> ${livro.autor}</span>
      <span><strong>Ano:</strong> ${livro.ano}</span>
      <span><strong>ISBN:</strong> ${livro.isbn}</span>
      <button onclick="removerLivro(${index})">Remover</button>
    `;
    lista.appendChild(div);
  });
}

function salvarLivro(livro) {
  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  livros.push(livro);
  localStorage.setItem('livros', JSON.stringify(livros));
  carregarLivros();
}

function removerLivro(index) {
  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  livros.splice(index, 1);
  localStorage.setItem('livros', JSON.stringify(livros));
  carregarLivros();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const livro = {
    titulo: form.titulo.value,
    autor: form.autor.value,
    ano: form.ano.value,
    isbn: form.isbn.value
  };
  salvarLivro(livro);
  form.reset();
});

carregarLivros();
