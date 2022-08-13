const navTitle=document.getElementsByTagName("li")

$(document).ready(function(){
    $("navTitle").hover(function(){
      $(this).css("background-color", "rgb(51, 114, 233)");
      }, function(){
      $(this).css("background-color", "#ff2205");
    });
  });