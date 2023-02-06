let numCandi = "";
let idade;
let genero;
let exp;
let add = prompt("Deseja adicionar um candidado? \n 1-Sim \n 2-Não ");
let media;
let cMedia = 0;
let cCandi = 0;
let texto = "";
let msg = "";

while(add == 1){
    numCandi = prompt("Qual o número do candidato? ");
    idade = Number(prompt("Qual a idade do Candidato? "));
    genero = prompt("Qual o gênero do Candidato?");
    exp = prompt("O Candidato possui experiencia na área? \n 1-Sim \n 2-Não");

    if(cMedia == 0 ){
        media = idade;
    }
    if(cMedia >= 1){
        media = (media + idade);
    }
    cMedia++;
    cCandi++;

    if(idade >= 18 && exp == 1){
        msg += "Número do Candidato:" + numCandi + "<br> Idade:" + idade + "<br> Gênero:" + genero + "<br> Experiência Profissional: Sim<br>";
        
        document.getElementById("msg").innerHTML += msg;
    }
    add = prompt("Deseja adicionar outro Candidato? \n 1-Sim \n 2-Não");
}
media = (media / cMedia);

document.getElementById("iMedia").innerHTML = media;
document.getElementById("tCandidatos").innerHTML = cCandi;