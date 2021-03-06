function rogers(inputNumber, inputName="") {
  const numArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    let number = i.toString();
    if (inputName == ""){
      rogers(inputNumber,inputName="TEST");
    } else if (rogers(inputName) && (number.includes(3))) {
      numArray.push("Won't you be my neighbor " + inputName + "?" + ", ")
    } else if (number.includes(2)) {
      numArray.push("Boop!" + ", ")
    } else if (number.includes(1)) {
      numArray.push("Beep!" + ", ")
    } else {
      numArray.push(i +",");
    }
  }
  return numArray;
}
function rogersReverse(inputNumber,inputName) {
  const numArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    let number = i.toString();
    if (number.includes(3)) {
      numArray.push("Won't you be my neighbor " + inputName + "?" + ", ")
    } else if (number.includes(2)) {
      numArray.push("Boop!" + ", ")
    } else if (number.includes(1)) {
      numArray.push("Beep!" + ", ")
    } else {
      numArray.push(i + ",")
    }
    }
    return numArray.reverse();
    }

$(document).ready(function() {
  $("form#rogers").submit(function() {
    event.preventDefault();
    
    let inputNumber = parseInt($("input#inputNumber").val());
    let inputName = $("input#name").val();
    let rogersResponse = rogers(inputNumber,inputName);

    $(".results").hide();
    $(".results").show();
    $(".reverse").show();
    $(".text").html(rogersResponse);
  });

  $("form#reverse").submit(function() {
    event.preventDefault();
    let inputNumber = parseInt($("input#inputNumber").val());
    let inputName = $("input#name").val();
    let rogersResponse = rogersReverse(inputNumber,inputName);
    $(".results").hide();
    $(".results").show();
    $(".backPic").hide();
    $(".pic").show();
    $("#originalButton").show();
    $(".text").html(rogersResponse);
  });

  $("form#original").submit(function() {
    event.preventDefault();
    let inputNumber = parseInt($("input#inputNumber").val());
    let inputName = $("input#name").val();
    let rogersResponse = rogers(inputNumber,inputName);
    $(".results").hide();
    $(".results").show();
    $(".pic").hide();
    $(".backPic").show();
    $(".text").html(rogersResponse)
  });
});