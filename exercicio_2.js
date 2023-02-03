let mediaT = 0;
let maiorM = 0;
let menorM = 0;
let aprov = 0;
let reprovF = 0;
let reprovN = 0;
let sair = "";
let totalAlunos = 0;
let msg = "";

do{
    let situacao = "";
    let requisito1 = Boolean();
    let requisito2 = Boolean();
    let matricula = prompt("Digite o nome do Aluno matrículado.")
    let nota1 = Number(prompt("Digite a primeira nota"));
    let nota2 = Number(prompt("Digite a segunda nota"));
    let nota3 = Number(prompt("Digite a terceira nota"));
    let aulasF = Number(prompt("Digite a quantidade de aulas frequentadas, sendo no maximo 32"))
    let frequencia = (aulasF / 32) * 100;
    let media = (nota1 + nota2 + nota3) / 3;
    let tMedia = 0;

    tMedia += media

    //Avaliando frequencia
    if(frequencia >= 80){
        requisito1 = true;
    }else{
        situacao = "reprovado por faltas";
        reprovF++;
    }
    //Avaliando NOTA
    if(media >= 7){
        requisito2 = true;
    }else{
        situacao = "reprovado por notas"
        reprovN++;
    }
    //Avaliando Aprovação
    if(requisito1 && requisito2){
        situacao = "aprovado"
        aprov++;
    }
    if(!requisito1 && !requisito2){
        situacao = "reprovado por falta e nota"
        reprovF++;
        reprovN++;
    }
    //Avaliando a media maior
    if(media > maiorM){
        maiorM = media;
    }
    totalAlunos++;
    mediaT = tMedia / totalAlunos
    //avaliando a menor media
    if(totalAlunos == 1){
        menorM = media;
    }
    if(media < menorM){
        menorM = media;
    }
    sair = prompt("Deseja sair \n sim \n não")

    msg += "Aluno: " + matricula + " //média do aluno: " + media + " //frequência do aluno: " + frequencia + "%" + " //situação: " + situacao + "<br>"
 
}while (sair == "não")

document.getElementById("mediaT").innerHTML = mediaT;
document.getElementById("maiorM").innerHTML = maiorM;
document.getElementById("menorM").innerHTML = menorM;
document.getElementById("aprov").innerHTML = aprov;
document.getElementById("reprovF").innerHTML = reprovF;
document.getElementById("reprovN").innerHTML = reprovN;
document.getElementById("msg").innerHTML = msg;