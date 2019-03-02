// "Crystal Collector"

$(document).ready(function () {
  
  var targetNum = 0;
  var totalScore = 0;
  var totalWins = 0;
  var totalLosses = 0;


  var numGen = function (max, min) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    gameStart();

    function gameStart () {
      totalScore = 0;
      targetNum = numGen(121, 19);
      $("#target").text(targetNum);
      $("#wins").text("Snapped: " + totalWins);
      $("#losses").text("Spared: " + totalLosses);
      $("#score").text(totalScore);
      $("#square1").attr("value", numGen(13, 1));
      $("#square2").attr("value", numGen(13, 1));
      $("#square3").attr("value", numGen(13, 1));
      $("#square4").attr("value", numGen(13, 1));
    }

    

    $(".click").on("click", function () {
      totalScore += parseInt(this.value);
        console.log(totalScore);   
      $("#score").text(totalScore);

        
        if (totalScore === targetNum) {
          alert(totalScore + " SNAP! Rejoice! You have become Children of Thanos!");
            totalWins++;
        }
    
        if (totalScore > targetNum) {
          alert(totalScore + " Pity, you have been spared");
          totalLosses++;
        }    

        if (totalScore === targetNum || totalScore > targetNum) {
          gameStart();    
        }

    });





})


