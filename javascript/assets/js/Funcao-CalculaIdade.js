function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
  nome: 'joao',
  idade: 30,
};

const pessoa2 = {
  nome: 'maria',
  idade: 26,
};

const animal = {
  nome: 'Nina',
  idade: 12,
  raca: 'poodle',
};

console.log(calculaIdade.call(animal, 30));
console.log(calculaIdade.apply(animal, [1]));