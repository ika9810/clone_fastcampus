// name 의 길이가 5보다 작은것만 출력해서 아래와같이 나오도록 하시오.
// 출력 : [ { name: 'java', number: 20 } ]
const programming = [
  { name: "python", number: 2 },
  { name: "nodejs", number: 1 },
  { name: "java", number: 20 }
];

console.log(
  // filter 함수를 완성해주세요.
  programming.filter(x => x.number > 10 )
);
