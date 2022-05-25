//console.log('TypeScript');
// function soma(a:number, b:number) {
//   return a + b;
// }

// soma (a, b)
//types
//interfaces
interface IAnimal {
  nome:string;
  tipo:'terrestre' | 'aquático';
  domestico: boolean;
  //executarRugido(alturaEmDecibeis: number):void;
}
interface IFelino extends IAnimal {
  visaoNoturna:boolean;
}

/*const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  //executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis} dB`)
}*/

//animal.executarRugido('s')
interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

/*const felino: IFelino = {
  nome:'Leão',
  tipo:'terrestre',
  visaoNoturna: true,
}*/

const animal: IDomestico = {
  domestico:true,
  nome: 'cachorro',
  porte:  'medio',
  tipo: 'terrestre'
}