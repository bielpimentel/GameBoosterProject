function toggleLogin() {
    document.querySelector(".login-caixa").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    
    const invisivelServicos = document.getElementById("invisivel-servicos");
    const caixaInvisivel = document.getElementById("caixa-invisivel");
    const caixaInvisivel2 = document.getElementById("caixa-invisivel-2");

    caixaInvisivel.addEventListener("change", function() {
        caixaInvisivel2.checked = caixaInvisivel.checked;
    });

    caixaInvisivel2.addEventListener("change", function() {
        caixaInvisivel.checked = caixaInvisivel2.checked;
    });

    caixaInvisivel.addEventListener("change", function() {
        if (!caixaInvisivel.checked) {
            invisivelServicos.checked = false;
        }
    });

    caixaInvisivel2.addEventListener("change", function() {
        if (!caixaInvisivel2.checked) {
            invisivelServicos.checked = false;
        }
    });

    let scrollContainerAv = document.querySelector(".rolagem-av");
    let setaEsquerdaAv = document.querySelector(".seta-esquerda-av-demo");
    let setaDireitaAv = document.querySelector(".seta-direita-av-demo");

    scrollContainerAv.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainerAv.scrollLeft += evt.deltaY;
    });

    setaDireitaAv.addEventListener("click", () => {
        scrollContainerAv.style.scrollBehavior = "smooth";
        scrollContainerAv.scrollLeft += 380;
    });

    setaEsquerdaAv.addEventListener("click", () => {
        scrollContainerAv.style.scrollBehavior = "smooth";
        scrollContainerAv.scrollLeft -= 380;
    });


   


    /*
    
    function mostrarFAQ(tabId) {

  let conteudo = document.getElementsByClassName('accordion');
  
    for (let i = 0; i < conteudo.length; i++){
      conteudo[i].style.display = 'none';
    }

  document.getElementById(tabId).style.display = 'block';
  
}

function plusFlip(event) {

  const atual = event.currentTarget;

    atual.classList.toggle('flip');
    
}

    */

});

