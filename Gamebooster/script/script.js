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
});