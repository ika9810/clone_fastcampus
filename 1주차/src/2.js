/*
아래와 같이 출력되도록 sort 함수로 완성하세요. (number가 큰순서)
[
  { name: 'java', number: 20 },
  { name: 'python', number: 2 },
  { name: 'nodejs', number: 1 }
]
*/

const programming = [
  { name: "python", number: 2 },
  { name: "nodejs", number: 1 },
  { name: "java", number: 20 }
];

console.log(
  // 작성해주세요.
  programming.sort( (x,y) => {
    if(x.number>y.number){
      return -1
    }
    else{
      return 1
    }
  })
);
