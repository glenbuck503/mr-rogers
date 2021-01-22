function rogers(inputNumber) {
  const numArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    let number = i.toString();

    if (number.includes(1)) {
      numArray.push("Beep!")
    } else {
      numArray.push(i + ",")
    }
    
    }
    return numArray;
    }
  
$(document).ready(function() {
  $("form#rogers").submit(function() {
    event.preventDefault();

    let inputNumber = parseInt($("input#inputNumber").val());
    let autoResponse = rogers(inputNumber)

    $(".results").hide();
    $(".results").show();
    $(".results").html(autoResponse)
   

    
  });
});

    

    