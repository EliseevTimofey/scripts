﻿describe("pow", function() {
  
  describe("возводит х в степень n", function() {
    function makeTest(x) {
      var expected=x*x*x;
      it("при возведении " + x + "в степень 3 результат" + expected, function() {
      assert.equal(pow(x, 3), expected);
      }); 
  }
  
  for(var x=1; x<=5;x++){
    makeTest(x);
  }
});
  
   it("при возведении в отрицательную степень результат NaN", function () {
     assert(isNaN(pow(2, -1)), "pow(2,-1) не NaN ");
 });
   it("при возведении в дробную степень результат NaN", function () {
     assert(isNaN(pow(2, 1.5)), "pow(2,1.5) не NaN ");
 });
   describe("X^0=1", function() {
function testZero(x){    
it(x + "^0=1", function() {
    assert.equal(pow(x, 0),1);
   });
}
for(var x=1; x<=55;x+=10){
    testZero(x);
  }
});
  it("при возведении 0^0 результат NaN", function () {
     assert(isNaN(pow(0, 0)), "pow(0,0) не NaN ");
 });
  
});