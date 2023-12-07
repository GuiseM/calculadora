document.addEventListener("DOMContentLoaded", function(){
    slowWhile();
});

let igual = document.getElementById('igual')
igual.addEventListener("click", function(){
    calcule();
});

let verify = false;
document.getElementById('botoes').addEventListener("mouseover", function(){
    if (!verify){
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('resultado').style.fontSize = '50px';
        document.getElementById('resultado').style.display = 'block'
        document.getElementById('resultado').style.alignItems = 'auto'
        document.getElementById('resultado').style.justifyContent = 'auto'
        clearTimeout(apague);
        clearTimeout(coloque);
        verify = true;
        i++;
    }
});

let i = 0;
let apague;
let coloque;
function slowWhile() {
    apague = setTimeout(function() {
        document.getElementById('resultado').innerHTML = "";
    }, 500)
    coloque = setTimeout(function() {
    document.getElementById('resultado').innerHTML = "Digite...";

    console.log(i)
    if (i < 1) {
      slowWhile();
    } 
  }, 1000);
};

function insert(num){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado + num;
};

function clean(){
    document.getElementById('resultado').innerHTML = "";
};

function apagar(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
};

function calcule(){
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado != '') {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
};

const year = document.querySelector('#ano');
ano.innerHTML = new Date().getFullYear();
