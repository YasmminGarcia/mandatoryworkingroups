var cont = 0;
function login() {
    var usuario = document.querySelector('#usuario');
    var senha = document.querySelector('#senha');
    if ((usuario === null || usuario === void 0 ? void 0 : usuario.value) == "AlunosSESI2023" && (senha === null || senha === void 0 ? void 0 : senha.value) == "devsistemas") {
        window.location.href = "bemvindo.html";
    }
    else {
        alert("senha ou usuario incorreto");
        cont++;
    }
    if (cont == 5) {
        window.location.href = "bloqueado.html";
    }
}
