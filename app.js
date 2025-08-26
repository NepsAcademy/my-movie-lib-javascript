// Seleciona os elementos
const themeToggleButton = document.querySelector('#theme-toggle-button');
const body = document.querySelector('body');

// --- LÓGICA PARA A TROCA DE TEMA (QUANDO O BOTÃO É CLICADO) ---
themeToggleButton.addEventListener('click', () => {
  // Alterna a classe no body
  body.classList.toggle('dark-mode');

  // Verifica o estado atual para saber qual ícone mostrar e o que salvar
  const isDarkMode = body.classList.contains('dark-mode');
  themeToggleButton.textContent = isDarkMode ? '☀️' : '🌙';

  // Salva a preferência do usuário no localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});


// --- LÓGICA PARA CARREGAR O TEMA (QUANDO A PÁGINA É CARREGADA) ---
// Esta parte do código é executada uma vez, assim que o script é lido
const savedTheme = localStorage.getItem('theme');

// Se houver um tema salvo e ele for 'dark', aplica a classe e muda o ícone
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggleButton.textContent = '☀️';
}