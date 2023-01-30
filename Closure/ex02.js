function multiplyByTwo(value) {
    let number = 2;
    result=number*value;
    function inner(result){
      console.log(result);
      }
      return inner(result);
  }
  multiplyByTwo(15);