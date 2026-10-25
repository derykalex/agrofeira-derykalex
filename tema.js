document.addEventListener('DOMContentLoaded', () => {
  const btnTema = document.getElementById('btn-alterna-tema');
  const txtTema = document.getElementById('txt-tema');

  // Aplica preferência salva
  const temaSalvo = localStorage.getItem('tema-agrofeira');
  if (temaSalvo) {
    document.documentElement.setAttribute('data-tema', temaSalvo);
    if (txtTema) txtTema.textContent = temaSalvo === 'escuro' ? 'Claro' : 'Escuro';
  }

  if (btnTema) {
    btnTema.addEventListener('click', () => {
      const temaAtual = document.documentElement.getAttribute('data-tema');
      const novoTema = (temaAtual === 'escuro') ? 'claro' : 'escuro';
      
      document.documentElement.setAttribute('data-tema', novoTema);
      localStorage.setItem('tema-agrofeira', novoTema);
      if (txtTema) txtTema.textContent = novoTema === 'escuro' ? 'Claro' : 'Escuro';
    });
  }
});