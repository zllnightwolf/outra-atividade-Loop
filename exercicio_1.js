let situacao = prompt("Você quer cadastrar uma Peça? \n 1-Sim \n 2-Não");
let Preprov = "";
let totalreprov = 0;
let totalaprov = 0;
let totalP = 0;
while(situacao == "1"){
    let numP = prompt("Digite o número da Peça.");
    let situP = prompt("Digite o estado da Peça. \n 1-Aprovado \n 2-Reprovado");

    if(situP == "2"){
       Preprov += numP + ", ";
       totalreprov ++
    }
    if(situP == "1"){
        totalaprov++
    }
    totalP = totalaprov + totalreprov;

    situacao = prompt("Você quer cadastrar uma nova Peça? \n 1-Sim \n 2-Não")
}
document.getElementById("Preprov").innerHTML = Preprov;
document.getElementById("totalreprov").innerHTML = totalreprov;
document.getElementById("totalaprov").innerHTML = totalaprov;
document.getElementById("totalP").innerHTML = totalP;





