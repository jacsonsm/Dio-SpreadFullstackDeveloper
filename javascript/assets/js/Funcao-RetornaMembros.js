function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === 'User') {
      admins.push(key)
    }
  }
  return admins;
}
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('jacson', 'Admin');
usuarios.set('joao', 'User');
usuarios.set('maria', 'Admin');

console.log(getAdmins(usuarios));