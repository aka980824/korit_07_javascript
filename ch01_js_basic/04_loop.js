// let brands = ["애플","구글","메타",'아마존','삼성전자'];

// console.log(brands[0]);
// console.log(brands[1]);
// console.log(brands[2]);
// console.log(brands[3]);
// console.log(brands[4]);

// // 이상과 같은 방식을 굳이 할 필요가 없으니까 반복문 사용
// // java 동일

// for(let i =0;i<brands.length;i++){
//   console.log('반복문으로 출력한 '+brands[i]);
// }

let productList = [
    {
    name: '솔의눈',
    price: 700,
  },{
    name: '레쓰비',
    price: 700,
  },{
    name: '파워에이드',
    price: 1200,
  },{
    name: '오렌지쥬스',
    price: 1400,
  },{
    name: '제로콜라',
    price: 800,
  },{
    name: '맥콜',
    price: 900,
  },
];

/*
  이상의 코드 라인에서 주목해야할 부분은 
  
  1. 그리고 마지막 index에 해당하는 element 다음에도 ','가 찍혀있음에도 불구하고 오류가 발생하지 않는다는 점

  2. Array의 element인 element의 object의 마지막인 property의 value 값 다음에도 ','가 있지만, 오류가 발생하지 않음

  이는 추후에 property를 추가하거나 element를 추가할때 전에 말한것 처럼 쉼표치고 엔터치고 다시 {} 혹은 property 추가하기가 귀찮으므로, 맨마지막 element/property와 관계없이 쉼표를 찍어주는게 매너가 된게 아에 관행처럼 굳어진겁니다. 그래서 오류로 처리되지 않음
  */ 

//   console.log(productList[4]); // 배열의 element는 object   
//   // 그렇다면 제로콜라라는 srting데이터만 뽑아내기 위해서는?
//   console.log(productList[4].name);
//   console.log(productList[4]['name']);

//   // 솔의 눈과 파워에이드 음료수의 합
//   console.log(productList[0].name+'의 가격과 '+productList[2].name+'의 가격을 각각 '+productList[0].price+'원과 '+productList[2].price+'원으로, 그합은 '+(productList[0].price+productList[2].price)+'원 입니다.')

//   let inputCoin = 900;
//   let outputList = []; //빈 배열 선언
// // inpuCoin으로 살수 있는 목록들을 집어넣도록 하겠습니다
// for(let i=0;i<productList.length;i++){
//   if(inputCoin >= productList[i]["price"]){
//     //outputList로 element추가
//     outputList.push(productList[i]); // 배열에 데이터 추가하는 method -> .push()
//   } 
// }
//   console.log('살 수 있는 음료 목록 '  + outputList);
//   // [object object].... 출력

//   for(let i=0;i<outputList.length;i++){
//     console.log(outputList[i])//정상출력됨)
//   }
  /*
    즉 이상의 내용을 정리해보았을 때, 배열 내부의 객체가 element라면
  , 배열 자체를 console.log(배열명);으로 출력시 결과값이 object...로만 나오게 되고,

  각 객체의 명확한 상태를 알기 위해서는 결국 배열의 각 element를 추출하는 반복문을 사용해야 합니다.
  */
// for(let i=0;i<outputList.length;i++){
//   for(let j=0;j<outputList[i];j++){
//     console.log(outputList[i][j]);
//   }
// }
  /*
    outputList의 element의 자료형은 객체이고, 객체에는 index
    number가 존재하지 않으므로 이중 for문을 통하여 객체 내부의 각
    property 를 확인하는 것은 불가능합니다.

    그럼 마찬가지로 일반 객체의 각 property를 추출하여 데이터를
    가공하는 방식이 불가능함을 의미
  */

// 2. for-in 문

let person = {
  fName : '일',
  lName : "김",
  age : 20,
};
// Js에서 객체에 반복문을 돌리게 되면, Key 값을 return 합니다.
// 그래서 해당 Key에 할당된 value를 추출하고 싶다면 102번의 코드와 같은 방식으로 작성해야합니다
for(const key in person){
    // console.log[key];
    console.log(person[key]);
  // 이시점에서 첫번째 반복이라고 가정을 하겠습니다
  // 그러면 key = 'fName'이 저장되어 있음

  // 즉 person.key는 person.fName이 아닌 person.'fName'이라는
  // 점이 문제입니다.
  // console.log(person.key); 
}
// 그렇다면 console.log(person.key); 는 불가능한 것 인가

// 그래서 굳이 #1~2를통해 조회가 가능

let nums =[1,2,3,4,5,6,7,8,9];
// 일반 for문으로 추출
for(let i;i<nums.length;i++){
  console.log(nums[i]);
}

// // 객체의 property를 추출할 수있으므로, 향상된 for문처럼 이용하여
// // 배열을 추출
// for(let num in nums){
//   console.log(num);
//   console.log(typeof num); // 결과값 string
// }

// 3. for-of문
// for-in 문의 경우 객체 한정으로 생각하는게 낫습니다.
// 일반적인 java에서 enhanced for문에 해당하는 것은 for-of 문
// 이라고 생각하면 편합니다

for(const num of nums){
  console.log(num);
  console.log(typeof num);
}

// 4. while 문 : java랑 동일합니다.
// 05_loop_while
