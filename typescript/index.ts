// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) =>{
//   const i = event.currentTarget as HTMLInputElement;
//   console.log(i.value);
  
// });

import $ from 'jquery';

$.fn.extend({
  novaFuncao() {
    console.log('chamou nova funcao');
    
  }
});

$('body').novaFuncao();