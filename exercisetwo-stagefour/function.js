let playProgram = true
let listAluns = []

function calcMed (noteOne, noteTwo) {
  let alunMed = (noteOne + noteTwo) / 2;
  return alunMed;
}

function statusAlun (alunMed) {
  if(alunMed > 7) {
    let alunStatus = "APROVADO";
    return alunStatus;
  }
  else {
    alunStatus = "REPROVADO";
    return alunStatus;
  }
}



while(playProgram) {
  let choice = Number(prompt(`Digite a opção desejada:

  [1] Inserir Aluno
  [2] Consultar Alunos
  [3] Sair do Programa
  `))

  switch(choice) {
    case 1:
      let nameAlun = prompt("Informe o nome do Aluno ou 0 para voltar ao menu principal:")
      nameAlun = nameAlun.toUpperCase();
      if(nameAlun === "0"){
        break;
      }
      let newAlun = {};
      newAlun.name = nameAlun;
      let noteOne = Number(prompt(`Informe a primeira nota do ${nameAlun}:`));
      let noteTwo = Number(prompt(`Informe a segunda nota do ${nameAlun}:`));
      newAlun.firtprove = noteOne
      newAlun.secondprove = noteTwo
      listAluns.push(newAlun);
      alert("Aluno Cadastrado com Sucesso!");
      break;
    case 2:
      let consultNameAlun = prompt("Informe o nome do aluno que deseja consultar:");
      consultNameAlun = consultNameAlun.toUpperCase();
      let alunFound = null;
      for(let a = 0; a < listAluns.length; a++) {
        if(listAluns[a].name === consultNameAlun) {
          alunFound = listAluns[a];
          break;
        }
      }

      if(alunFound){
        let medAlun = calcMed(alunFound.firtprove, alunFound.secondprove);
        alert(`O aluno ${alunFound.name} possui as notas:
        
         Primeira Prova: ${alunFound.firtprove}
         Segunda Prova: ${alunFound.secondprove}
         Média Total: ${medAlun}
         Situação Atual: ${statusAlun(medAlun)}`);
        break;
      }
      else{
        alert("Aluno não encontrado!");
        break;
      }
    case 3:
      alert("Até Breve!")
      playProgram = false
      break;
    
      default:
        alert("Opção inválida. Tente novamente")
  }
}