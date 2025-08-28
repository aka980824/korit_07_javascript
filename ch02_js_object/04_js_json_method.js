let data = {
  employees: [
    {
      firstName: "John",
      lastName: "Doe"
    },
    {
      firstName: "Anna",
      lastName: "Smith"
    },
    {
      firstName: "Peter",
      lastName: "Parker"
    }
  ]
};
// 객체를 문자열 전환
let stringValue = JSON.stringify(data);
console.log(stringValue);

// 문자열 형태의 JSON 데이터를 javascript object전환
let obj = JSON.parse(stringValue);

console.log(obj);

