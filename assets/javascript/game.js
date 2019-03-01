// "Crystal Collector"

$(document).ready(function () {
  
  var targetNum = 0;
  var totalScore = 0;
  var gameOver = true;


  var numGen = function (max, min) {
      return Math.floor(Math.random() * (max - min)) + min;
    }


    function gameStart () {
      totalScore = 0;
      targetNum = numGen(121, 19);
      $("#target").text(targetNum);
      $("#square1").attr("value", numGen(13, 1));
      $("#square2").attr("value", numGen(13, 1));
      $("#square3").attr("value", numGen(13, 1));
      $("#square4").attr("value", numGen(13, 1));
      gameOver = false;
    }

    if (gameOver && totalScore === targetNum || totalScore > targetNum) {
      gameOver = true;
      gameStart();

    }


    $(".click").on("click", function () {
      totalScore += parseInt(this.value);
        console.log(totalScore);        
        
    });





})


