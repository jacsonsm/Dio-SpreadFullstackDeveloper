//generic types

function adicionaApendiceALista(array, valor) {
  return array.map(item => item + valor);
}

adicionaApendiceALista([1,2,3],1);