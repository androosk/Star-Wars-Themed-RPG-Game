  $("document").ready()

  var inPLay = false;
  var playerChar = "";
  var opponentChar = "";
  var targ = [];
  var porg = {
      charName : "Porg",
      hitPoints : 60,
      attackPower : 10,
      counterAttack : 10,
      playState : "available",
  }
  var chewie = {
      charName : "Chewie",
      hitPoints : 120,
      attackPower : 20,
      counterAttack : 30,
      playState : "available",
  }
  var bobaFett = {
      charName : "Boba Fett",
      hitPoints : 120,
      attackPower : 20,
      counterAttack : 30,
      playState : "available",
  }
  var yoda = {
      charName : "Yoda",
      hitPoints : 150,
      attackPower : 30,
      counterAttack : 40,
      playState : "available",
  }






  $("#choiceText").text("Choose your Character");

      $("#playCard1").hover(function(){
        $("#playCard1").addClass("hoverBorder")
        $("#imageCard").append("<img src='assets/images/porg final.jpg'>")
        })
      $("#playCard1").mouseleave(function(){
        $("#playCard1").removeClass("hoverBorder")
        $("#imageCard img").remove()
      })

      $("#playCard2").hover(function(){
        $("#playCard2").addClass("hoverBorder");
        $("#imageCard").append("<img src='assets/images/chewie card.jpg'>");
      });
      $("#playCard2").mouseleave(function(){
        $("#playCard2").removeClass("hoverBorder");
        $("#imageCard img").remove();
      });


      $("#playCard3").hover(function(){
        $("#playCard3").addClass("hoverBorder");
        $("#imageCard").append("<img src='assets/images/boba fett card.jpg'>");
      });
      $("#playCard3").mouseleave(function(){
        $("#playCard3").removeClass("hoverBorder");
        $("#imageCard img").remove();
      });


      $("#playCard4").hover(function(){
        $("#playCard4").addClass("hoverBorder");
        $("#imageCard").append("<img src='assets/images/yoda card.jpg'>");
      });
      $("#playCard4").mouseleave(function(){
        $("#playCard4").removeClass("hoverBorder");
        $("#imageCard img").remove();
      });



      $("#playCard1").click(function() {
        if (playerChar === "" || opponentChar ==="") {
        $("#playCard1").remove("#playCard1");
        $("#imageCard img").remove()
        $("#choiceText").text("Choose your opponent")
        $(".characterText").text("Your Character")
          if (playerChar.length <= 0) {
          playerChar = porg["charName"]
          porg["playState"] = "player"
          $("#cardPl-background").removeClass("bg-dark")
          }
          else {
          opponentChar = porg["charName"]
          porg["playState"] = "opponent"
          inPLay = true
          $("#cardOp-background").removeClass("bg-dark")
          }
        }
      })

      $("#playCard2").click(function() {
        if (playerChar === "" || opponentChar === "") {
        $("#playCard2").remove("#playCard2");
        $("#imageCard img").remove()
        $("#choiceText").text("Choose your opponent")
          if (playerChar === "") {
          playerChar = chewie["charName"];
          chewie["playState"] = "player"
          $("#cardPl-background").removeClass("bg-dark")
        }
        else {
          opponentChar = chewie["charName"]
          chewie["playState"] = "opponent"
          inPLay = true
          $("#cardOp-background").removeClass("bg-dark")
        }
      }
    });

      $("#playCard3").click(function() {
        if (playerChar === "" || opponentChar === "") {
        $("#playCard3").remove("#playCard3")
        $("#imageCard img").remove()
        $("#choiceText").text("Choose your opponent")

        if (playerChar === "") {
          playerChar = bobaFett["charName"];
          bobaFett["playState"] = "player"
          $("#cardPl-background").removeClass("bg-dark")
        }
        else {
          opponentChar = bobaFett["charName"]
          bobaFett["playState"] = "opponent"
          inPLay = true
          $("#cardOp-background").removeClass("bg-dark")
        }
      }
    });

       $("#playCard4").click(function() {
        if (playerChar === "" || opponentChar === "") {
        $("#playCard4").remove("#playCard4");
        $("#imageCard img").remove()
        $("#choiceText").text("Choose your opponent")

        if (playerChar === "") {
          playerChar = yoda["charName"];
          yoda["playState"] = "player"
          $("#cardPl-background").removeClass("bg-dark")
        }
        else {
          opponentChar = chewie["charName"]
          yoda["playState"] = "opponent"
          inPLay = true
          $("#cardOp-background").removeClass("bg-dark")
        }
      }
    });
