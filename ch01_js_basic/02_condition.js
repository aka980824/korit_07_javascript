/*
  7세 이하 0원
  8세 이상 13세 이하 450
  14세이상 19세이하 720
  20세이상 120
  70세 이상 0
  에 해당하는 if 문을 작성하시오

  선언 예

  12 살의 버스 요금은 450원입니다.
*/

let age=75; // 변수 선언 및 초기화
let busfare=0;

if(age<8){
  busfare=0;
}else if(age>7 && age<14){
  busfare=450;
}else if(age>13 && age<20){
  busfare=720;
}else if(age>19 && age<70){
  busfare=1200;
}else if(age>69){
  busfare=0;
}

console.log(age+" 살의 버스 요금은 "+busfare+"원 입니다.")