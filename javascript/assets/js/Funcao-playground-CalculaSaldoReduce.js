const lista = [
  {
    name: 'sabao em po omo',
    preco: 16,
    peso: 0.5,
  },
  {
    name: 'sabao em po brilhante',
    preco: 13,
    peso: 1,
  },
  {
    name: 'sabao em po tixam',
    preco: 11,
    peso: 1,
  },
  {
    name: 'sabao em po teiu',
    preco: 8,
    peso: 1,
  },

];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current, index) {
    console.log('rodada', index + 1);
    console.log(prev);
    console.log(current);
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));