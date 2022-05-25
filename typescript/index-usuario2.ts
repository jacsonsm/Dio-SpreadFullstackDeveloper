//interface
interface IUsuario {
  id:string;
  email: string;
  cargo?: 'gerente' | 'coordenado' | 'supervisor' | 'funcionario';
}

function redirecione(usuario:IUsuario ) {
  if (usuario.cargo) {
    //redirecionar para a area de administrçao
  }

  // redirecionar para a area do usuario
}