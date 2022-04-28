function cofre() {
    var x;
    var senha = prompt("Está trancada coloque a chave para acessar o cofre");

    if (senha != null)
    {
        if (senha === "1208") {
            window.location.href = "../imagem/OvoDeOuro.jpg";
        }
        else {
            alert("senha incorreta");
        }
    }
    else {
        alert("caixa vazia");
    }
}