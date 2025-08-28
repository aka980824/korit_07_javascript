let fruits = ['사과', '바나나', '키위'];
console.log(fruits.toString());
// 결과값 : 사과,바나나,키위

console.log(fruits.join('/'));
// 결과값 : 사과/바나나/키위

let lastFruit = fruits.pop();
console.log(lastFruit);
// 결과값 : 키위
console.log(fruits);
// 결과값 : ['사과', '바나나']

let firstFruit = fruits.shift();
console.log(firstFruit);
// 결과값 : 사과
console.log(fruits);
// 결과값 : ['바나나']

// unshift()
console.log(fruits.unshift('레몬')); // 결과값 : 2
console.log(fruits);
// 결과값 : ['레몬', '바나나']

// splice()
let fruits2 = ['Banana', 'Orange', 'Apple', 'Mango'] ;
fruits2.splice(2, 0, 'Lemon', 'Kiwi');
console.log(fruits2);
// 결과값 : ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

// concat()
let arr1= ['김일','김이'];
let arr2= ['김삼','김사'];
let arr3= ['김오','김육'];

let myStudents = arr1.concat(arr2,arr3);
console.log(myStudents);

let students = myStudents.slice(2);
console.log(students);
// ['김삼', '김사', '김오', '김육']
let student2 = myStudents.slice(3,5);
console.log(student2);
//  ['김사', '김오']
// 두번째 argument는 종료 인덱스 넘버

// filter()
/*
  filter 메서드를 활용하여 words 배열 내에 있는 단어의 길이가 5이상인 데이터만 추출하여새로운 배열을 console에 출력
*/ 
let words = ['부산광역시','부산시','서울특별시','서울','경상남도 남해시', '남해시', '광주광역시', '경기도 광주시','오사카부 오사카시','오사카'];

let result = words.filter(function(word) {
  return word.length > 4;
});
// ['부산광역시', '서울특별시', '경상남도 남해시', '광주광역시', '경기도 광주시', '오사카부 오사카시']
console.log(result);

/*
  점수가 80점이상인 사람만가지고 새로운 배열 작성
*/
let persons =[
  { name : '김일' ,
    score: 78,
    city :`서울`,
  },{
    name : '김이' ,
    score: 96,
    city :`대전`,
  },{
    name : '김심' ,
    score: 76,
    city :`대구`,
  },{
    name : '김사' ,
    score: 100,
    city :`부산`,
  }
];
console.log(persons);

let pass = persons.filter(function(person) {
  return person.score > 80;
});
console.log(pass);
/*
{name: '김이', score: 96, city: '대전'}
{name: '김사', score: 100, city: '부산'}

이상에서 주의 할점은 persons을 가지고 새로운 배열을 만들었는데 persons의 자료형은 object이므로, 새로운 배열인 pass의 element도 여전히 object입니다.
score들을 가지고 비교했다고 해서 점수들을 element로 삼는것이아니라
*/

// map()
let userList =[
  {
    firstName: '알',
    lastName: '김',
    email : '1@test.com',
  },{
    firstName: '이',
    lastName: '김',
    email : '2@test.com',
  },{
    firstName: '삼',
    lastName: '김',
    email : '3@test.com',
  },{
    firstName: '사',
    lastName: '김',
    email : '4@test.com',
  },{
    firstName: '오',
    lastName: '김',
    email : '5@test.com',
  }
];
let koreaUserList = userList.map(
  function(user){
    return{
      fullName: user.lastName + user.firstName,
      firstName : user.firstName,
      lastFruit : user.lastName,
      email : user.email,
    }
  }
);

console.log(koreaUserList);

// reduce
let scores =[40,100,1,5,25,10];
let sum = scores.reduce(
  function(total,currentValue){
    return total + currentValue;
  }
)
console.log(sum);
