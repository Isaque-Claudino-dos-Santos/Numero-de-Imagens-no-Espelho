
var tabela = document.querySelector("tbody");


function criaElemeto(txtAngulo, txtNumeroDeImg) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let angulo = document.createTextNode(txtAngulo);
    let numeroDeImg = document.createTextNode(txtNumeroDeImg);
    td1.appendChild(angulo);
    td2.appendChild(numeroDeImg);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabela.appendChild(tr);
}




var calc;
var angulo = 360;
var angulos = 0;


while (angulos <= angulo) {
    calc = (angulo / angulos) - 1;
    criaElemeto(`${angulos}°`, calc)
    angulos++
}

//filta o valor
