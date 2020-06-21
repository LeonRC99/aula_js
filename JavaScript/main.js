function clicou(){
    document.getElementById("agradecimento").innerHTML = "Thank's";
    //window.location.href = "https://github.com";
    window.open("https://github.com");
    //console.log(document.getElementById("agradecimento"));
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!!!!";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!!!!";
    //alert("torcar texto...");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert ("Página carregada!");
}

function change(elemento){
    console.log(elemento.value);
}