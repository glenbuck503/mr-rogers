$(document).ready(function() {
  $("form#rogers").submit(function() {
    event.preventDefault();

    let inputNumber = parseInt($("input#inputNumber").val());
    const numArray = [0]

    function rogers(inputNumber) {
      while (inputNumber > numArray.length -1) {
        numArray.push(numArray.length);
      };
      
    };
    rogers(12)
    console.log(numArray)
    
  });
});

    

    