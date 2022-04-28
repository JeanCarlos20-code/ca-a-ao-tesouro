function sotao() {
    var x;
    var senha = prompt("Está trancada coloque a chave para acessar esse local");

    if (senha != null)
    {
        if (senha === "1278") {
            window.location.href = "c2VydmU=.html";
        }
        else {
            alert("chave incorreta");
        }
    }
    else {
        alert("caixa vazia");
    }
}