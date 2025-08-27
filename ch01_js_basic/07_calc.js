
let calc = function(x,y,operator){
  if(operator ==='+'){
    return x+y;
  }else if(operator ==='-'){
    return x-y;
  }else if(operator ==='*'){
    return x*y;
  }else if(operator ==='/'){
    return x/y
  }
}

let plusResult = calc(5,7,'+');
console.log(plusResult);

let minusResult = calc(10,7,'-');
console.log(minusResult);

let multiResult = calc(203,3459,`*`);
console.log(multiResult);

let divResult = calc(5943,21,`/`);
console.log(divResult);