function Aluno(nome, notas) {
  this.nome = nome;
  this.notas = notas;
}

function calcularMedia(aluno, callback) {
  const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
  const media = soma / aluno.notas.length;
  callback(aluno, media);
}

function verificarAprovacao(aluno, media) {
  media >= 7 ? console.log(`${aluno.nome} foi Aprovado`) : console.log(`${aluno.nome} foi Reprovado`)
}

const aluno = new Aluno("Gabriel", [9, 6, 6]);
calcularMedia(aluno, verificarAprovacao);
