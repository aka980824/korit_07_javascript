function hello2(name){
  console.log(`Hello ${name}. 환영합니다.`);
}

hello2('김일'); 

let type = 'student';
let score = {
  [type] : `Josh`,
  score : 92,
}

console.log(score.student);
/*
  [type]으로 작성하였으나 실제 property 의 key값은 'student' 
*/

// spread 연산자

let arr1 = [4,5,8];
let arr2 = [1,2,3];
// 결과값을 123456
let arr3 = arr2.concat(arr1);
console.log(arr3);
// spread활용
let arr4 = [...arr2, ...arr1];
console.log(arr4);
// 중요포인트
/*
  ...arr2과 같이 작성시 arr2라는 배열 자체가 들어가는 것이아니라, 배열 내부의 element들을 하나씩 가지고 온다고 생각하는 편이 려러분의 정신건강에 좋습니다.

  즉, let arr4 =[...arr2, ...arr1];
  은 외부에 []가 있음으로 봤을때 배열을 새로 생성한 것이며, 거기의 내부에 arr2_element들을 순서대로 집어넣고 그다음 arr1의 element들을 순서대로 집어넣어 완성했다고 해석가능
*/

function getPerson(){
  return{
    fName: 'John',
    lName: 'Doe',
    age :30,
    email : 'a@test.com',
    city : 'New York',
    country : 'USA',
  };
};

let { fName, lName } = getPerson();

//사용하려는 데이터가 저장되어 있는 key 이름만 정의하면, 해당 키를 갖는 값을 바로 사용 가능
// 즉 {} 요소들은 객체의 키 값과 같아야함

console.log(fName); //John
console.log(lName); //Doe

let person = getPerson();  //return 값이 JS 객체이므로 person은 JS의 객체 명이 됩니다.

// 여태까지의 방식은 객체명.key 혹은 객체명.['key']였으나
console.log(person.fName);
console.log(person.lName);

function displayFullName({ fName, lName }) {
  console.log(`${fName} ${lName}`);
}

displayFullName(getPerson());

let scores = getScores();

let x = score[0], y=score[1], z=score[2];

let[x1,y1,z1] = getScores;

console.log(x1);
console.log(y1);
console.log(z1);

/* 
  이상의 개념은 react 및 eventhandler부분 관련하여 자주 사용하게 되는데, 그때 추후 재설명
*/