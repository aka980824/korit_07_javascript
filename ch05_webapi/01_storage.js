// localStorage 문자열 데이터와 배열 데이터를 저장하는 예시

if(typeof Storage !== 'undefined'){
  localStorage.setItem('title','review : 파이팅');
/*
  .setItem() 라는 메서드가 있고, 거기에 2개의 argument 를 집어넣었습니다. 2번째 매개변수 value의 경우 원래 string 자료형면 그대로
*/
  
  // 집어넣을 데이터 예시 - JS 배열인데, 내부 element가 객체 -> stringㅇ로 변환가정 필요
  const users = [
  {
    id : 1,
    name : '김일',
  },{
    id : 2,
    name : '김이'
  },
  ];
  localStorage.setItem('users',JSON.stringify(users))
}

// localStorage 안에 있는 데이터 조회
if(Storage !== undefined){
  console.log(localStorage.getItem('title'));
  console.log(localStorage.getItem('users'))
  // 이경우 24~25 라인의 결과값은 자료형에 해당(string)
  // 그래서 25번 라인을 string 이용이라면 별문제가 없으나, 굳이 객체로 저장된걸 string 으로 사용할 필요는 없으니 원복하는 method가 필요
  console.log(JSON.parse(localStorage.getItem('users')));

  const usersFromLocal = JSON.parse(localStorage.getItem('users'));
  console.log(usersFromLocal);
}