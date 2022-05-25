interface Cachorro {
readonly  nome:string;
readonly  idade:number;
readonly  parqueFavorito?: string;
}

class MeuCachorro implements Cachorro {
  idade;
  nome;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro('Apolo', 14);

cao.idade = 8;

console.log(cao);
  