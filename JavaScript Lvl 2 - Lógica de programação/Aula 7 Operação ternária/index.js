// ? : (if e else)

 const pontuacaoUsuario = 999;

// if(pontuacaoUsuario >= 1000) {
//   console.log('Usuário VIP');
// } else {
//   console.log('Usuário normal');
// };

const nivelUsuario = pontuacaoUsuario >= 100 ? 'Usuário VIP': 'Usuário Normal';
console.log(nivelUsuario);
//Mesmo codigo if e else com operador terminario

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; //Valor Padrão

