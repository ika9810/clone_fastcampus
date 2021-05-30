/*
  아래와 같이 출력되도록 class 문법으로 작성해보세요.
  node 4.js 로 실행

  출력
  현대차이고 노란색입니다.
  기아차이고 빨간색입니다.
*/

class Car {
  constructor ( a , b){
    this.name  = a;
    this.color = b;
}
move(){
    console.log(this.name + "차이고 "+ this.color + "색입니다." );
  }   
}

var a = new Car("현대", "노란");
a.move();
var b = new Car("기아", "빨간");
b.move();
