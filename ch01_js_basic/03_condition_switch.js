let date = new Date();
let day = date.getDay();
let dayName = "";

switch(day) {
  case 0: dayName = "일요일"; break;
  case 1: dayName = "월요일"; break;
  case 2: dayName = "화요일"; break;
  case 3: dayName = "수요일"; break;
  case 4: dayName = "목요일"; break;
  case 5: dayName = "금요일"; break;
  case 6: dayName = "토요일"; break;
}

console.log('오늘은 ' + dayName + ' 입니다 살려줘');