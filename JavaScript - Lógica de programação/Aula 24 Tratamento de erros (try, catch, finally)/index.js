try{
  console.log(a);
  console.log('Abri o arquivo');
  console.log('Manipulei o arquivo');
  console.log('Fechei o arquivo');
  //É executado quando não há erros
} catch (error) {
  console.log('Tratando o erro');
  //É executada quando há erros
} finally {
  console.log('FINALLY: Eu sempre sou executado');
  //É execudado sempre
};



function retornaHora(data){
  if(data && !(data instanceof Date)){
    throw new TypeError('Esperando instancia de Date');
  }

  if(!data){
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

try {
  const data = new Date('01-01-1970 12:58:12')

  const hora = retornaHora(data);
  console.log(hora);
} catch (e) {
  //Tratar erro
   console.log(e);
} finally {
  console.log('Tenha um bom dia');
}



