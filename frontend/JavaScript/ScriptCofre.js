function cofre() {
    var x;
    var senha = prompt("Está trancada coloque a chave para acessar o cofre");

    if (senha != null)
    {
        if (senha === "1208") {
            window.location.href = "quarto3.html";
        }
        else {
            alert("senha incorreta");
        }
    }
    else {
        alert("caixa vazia");
    }
}