//Task 1
//jQuery performing 
$(document).ready(function(){
 
});

//Task 2
// jQuery: Target HTML Elements with Selectors Using jQuery
$(document).ready(function() {
    $("button").addClass("animated animate__bounce");
      });

//Task 3
//jQuery: Target Elements by Class Using jQuery
$(".well").addClass("animated animate__shakeX");

//Task 4 
// jQuery: Target Elements by id Using jQuery
$("#target3").addClass("animated animate__fadeOut");

//Task 5
//jQuery: Delete Your jQuery Functions
//remove all above function using jquery 
$(document).ready(function() {
  $("button").addClass("animated animate__bounce");
  $(".well").addClass("animated animate__shakeX");
  $("#target3").addClass("animated animate__fadeOut");
  });

  //Task 6
//jQuery: Target the Same Element with Multiple jQuery Selectors

  $(document).ready(function() {
  $("button").addClass("animated");
  $(".btn").addClass("animate__shakeX");
  $("#target1").addClass("animated shake btn-primary");
  });

  //Task 7 
  // jQuery: Remove Classes from an Element with jQuery
  $(document).ready(function() {
    $("button").addClass("animated bounce");
     $(".well").addClass("animated shake");
     $("#target3").addClass("animated fadeOut");
     $("button").removeClass("btn-default");
  });

  //Task 8 
  // jQuery: Change the CSS of an Element Using jQuery
  $(document).ready(function() {
    $("button").addClass("animated animate__bounce");
    $(".well").addClass("animated animate__shakeX");
    $("#target3").addClass("animated animate__fadeOut");
    $("button").removeClass("btn-default");
    $("#target1").css("color", "red");
  });

  //Task 9
  //jQuery: Disable an Element Using jQuery
  $(document).ready(function() {
    $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
  });


  //Task 10
  //jQuery: Change Text Inside an Element Using jQuery
  $(document).ready(function() {
    $("#target1").css("color", "red");
     $("#target4").html('<em>#target4</em>');
  });

  //Task 11
  //jQuery: Remove an Element Using jQuery
$(document).ready(function() {
$("#target1").css("color", "red");
$("#target1").prop("disabled", true);
$("#target4").remove("#target4");
  });

//Task 12
//jQuery: Use appendTo to Move Elements with jQuery
  $(document).ready(function() {
  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
  $("#target4").remove();
 $("#target2").appendTo("#right-well");
});

//Task 13
//jQuery: Clone an Element Using jQuery
$(document).ready(function() {
  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
  $("#target4").remove();
  $("#target2").appendTo("#right-well");
  $("#target5").clone().appendTo("#left-well");
});


//Task 14
//jQuery: Target the Parent of an Element Using jQuery
$(document).ready(function() {
  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
  $("#target4").remove();
  $("#target2").appendTo("#right-well");
  $("#target5").clone().appendTo("#left-well");
$("#target1").parent().css("background-color", "red");
});

//Task 15
//jQuery: Target the Children of an Element Using jQuery
$(document).ready(function() {
  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
  $("#target4").remove();
  $("#target2").appendTo("#right-well");
  $("#target5").clone().appendTo("#left-well");
  $("#target1").parent().css("background-color", "red");
  $("#target1").children().css("background-color", "orange");
});

//Task 16
//jQuery: Target a Specific Child of an Element Using jQuery
$(document).ready(function() {
  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
  $("#target4").remove();
  $("#target2").appendTo("#right-well");
  $("#target5").clone().appendTo("#left-well");
  $("#target1").parent().css("background-color", "red");
  $("#right-well").children().css("color", "orange");
  $(".target:nth-child(2)").addClass("animated animate__bounce");  
});


//Task 17
//jQuery: Target Even Elements Using jQuery
$(document).ready(function() {
  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
  $("#target4").remove();
  $("#target2").appendTo("#right-well");
  $("#target5").clone().appendTo("#left-well");
  $("#target1").parent().css("background-color", "red");
  $("#right-well").children().css("color", "orange");
  $("#left-well").children().css("color", "green");
  $(".target:nth-child(2)").addClass("animated animate__bounce");
$(".target:even").addClass("animated animate__shakeX");
});


//Task 18 
//jQuery: Use jQuery to Modify the Entire Page
$(document).ready(function() {
  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
  $("#target4").remove();
  $("#target2").appendTo("#right-well");
  $("#target5").clone().appendTo("#left-well");
  $("#target1").parent().css("background-color", "red");
  $("#right-well").children().css("color", "orange");
  $("#left-well").children().css("color", "green");
  $(".target:nth-child(2)").addClass("animated animate__bounce");
  $(".target:even").addClass("animated animate__shake");
$(".container-box").addClass("animated animate__hinge");
});

