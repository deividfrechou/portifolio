
var sobreMim = document.getElementById("texto-sobre");
var meusProjetos = document.getElementById("texto-projetos");

function sobre(){
    meusProjetos.style.display = "none";
    sobreMim.style.display = "block";
}

function projetos(){        
    meusProjetos.style.display = "block";
    sobreMim.style.display = "none";
}