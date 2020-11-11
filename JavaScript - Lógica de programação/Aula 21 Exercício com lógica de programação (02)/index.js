
function ePaisagem(x, y){
  if(x > y){
    return true;
  } else {
    return false;
  }
};

console.log(ePaisagem(2, 4));

const ePaisagem2 = (x, y) => x > y ? true : false;

console.log(ePaisagem2(2, 4));

const ePaisagem3 = (x, y) => x > y

//A propria logica do if ja retorna true ou false

console.log(ePaisagem3(2, 4));

