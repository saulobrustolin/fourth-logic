// IDs: inNoticia, btAdicionar, btListar, outCadastrados, outNoticias

var noticias = [];

function Adicionar(){
    var inNoticia = document.getElementById("inNoticia");
    noticia = inNoticia.value;


    if(noticia == ""){
       alert("Por favor, digite alguma coisa válida!")
       inNoticia.focus();
       return; 
    } else if(noticias.indexOf(noticia) != -1){
        alert("Por favor, digite uma noticia diferente, essa já foi registrada!")
       inNoticia.focus();
       return;
    }

    outCadastrados.textContent = "Notícias cadastradas: " + (noticias.length + 1);

    noticias.unshift(noticia);
}

function Listar(){
    var outCadastrados = document.getElementById("outCadastrados");
    var outNoticias = document.getElementById("outNoticias");

    var numeroNoticias = prompt("Quantas noticias deseja visualizar?");

    var lista = numeroNoticias + " últimas notícias:" + "<br>" + "------------------------------------------" + "<br>";

    for(var i = 0; i <= (numeroNoticias - 1); i++){
        if(noticias[i] != "" || noticias[i] !== 'undefined'){
            lista += noticias[i] + "<br>";
        } else{
            break;
        } 
    }

    console.log(lista[4]);

    outNoticias.innerHTML = lista;
}

var adicionar = document.getElementById("btAdicionar");
adicionar.addEventListener("click", Adicionar);

var listar = document.getElementById("btListar");
listar.addEventListener("click", Listar);