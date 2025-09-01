// 요소 참조
const signupIdInput = document.getElementById('signup-id');
const signupPwInput = document.getElementById('signup-pw');
const signupBtn = document.getElementById('signup-btn');

const loginIdInput = document.getElementById('login-id');
const loginPwInput = document.getElementById('login-pw');
const loginBtn = document.getElementById('login-btn');

// 회원가입
signupBtn.addEventListener('click', () => {
  const id = signupIdInput.value.trim();
  const pw = signupPwInput.value;

  if (!id || !pw) {
    alert('아이디와 비밀번호를 모두 입력하세요.');
    return;
  }

  // localStorage에 저장
  localStorage.setItem('userId', id);
  localStorage.setItem('userPw', pw);

  alert('회원가입이 완료되었습니다.');
  signupIdInput.value = '';
  signupPwInput.value = '';
});

// 로그인
loginBtn.addEventListener('click', () => {
  const id = loginIdInput.value.trim();
  const pw = loginPwInput.value;

  if (!id || !pw) {
    alert('아이디와 비밀번호를 모두 입력하세요.');
    return;
  }

  const storedId = localStorage.getItem('userId');
  const storedPw = localStorage.getItem('userPw');

  if (id === storedId && pw === storedPw) {
    alert('로그인이 되었습니다.');
  } else {
    alert('아이디 또는 비밀번호가 틀렸습니다.');
  }

  loginIdInput.value = '';
  loginPwInput.value = '';
});
