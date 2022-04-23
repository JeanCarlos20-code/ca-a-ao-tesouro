function sotao() {
    var x;
    var senha = prompt("Está trancada coloque a chave para acessar esse local");

    if (senha != null)
    {
        if (senha === "0248") {
            window.location.href = "escadaSotao.html";
        }
        else {
            alert("chave incorreta");
        }
    }
    else {
        alert("caixa vazia");
    }
}