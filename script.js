// While

let age = Number(prompt('Digite sua idade: '));

while(age < 18){
    document.write('O site só pode ser acessado por maiores de idade!');
    age = Number(prompt('Digite sua idade: '));
}

document.write('Seja bem vinde!');

// Do while e switch

let option;

do{
    option = Number(prompt('escolha uma opção: \n[1] Caviar \n[2] Almondega \n[3] Feijoada'));
}while(option < 1 || option > 3);

switch(option){
    case 1: document.write('<br>Voce selecionou caviar, mas vai levar pão!');
    break

    case 2: document.write('<br>Voce selecionou almondega, mas vai levar arroz e feijão!');
    break

    case 3: document.write('<br>Voce selecionou feijoada com fígado, mas vai ganhar uma consulta com um psicólogo!');
    break
}

// for e matriz

const boletim = [];
const qtdMaterias = 3;
const qtsProvas = 3;

for(let i=0; i<qtdMaterias; i++){
    boletim[i] = [];
    for(let x=0; x<qtsProvas; x++){
        boletim[i][x] = Number(prompt(`Digite a ${1+x}ª nota da ${1+i}ª matéria: `));
    }
}

for(let i=0; i<qtdMaterias; i++){
    document.write(`<br>nota da ${1+i}ª matéria: `);
    for(let x=0; x<qtsProvas; x++){
        document.write(boletim[i][x] + " ");
    }
}