// window.alert('이것은 alert창');

// confirm()
// confirm();

// prompt();

// open('https://www.naver.com')

let myExcc;


function myFunction() {
  myExcc = setTimeout(
    function() {
      console.log('5초 후 실행');
    },
    5000
  );
}

function myStopFunction(){
  console.log('취소합니다');
  clearTimeout(myExcc);

}
//호출
myFunction();

