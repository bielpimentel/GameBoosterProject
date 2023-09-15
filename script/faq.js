function mostrarFAQ(tabId) {

  let conteudo = document.getElementsByClassName('accordion');
  
    for (let i = 0; i < conteudo.length; i++){
      conteudo[i].style.display = 'none';
    }

  document.getElementById(tabId).style.display = 'block';
  
}

function plusFlip(event) {

  const atual = event.currentTarget;

    if (atual.classList.contains('flip')) {
        atual.classList.remove('flip');
    } else {
        atual.classList.add('flip');
    }
  
}