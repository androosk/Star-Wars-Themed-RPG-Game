  $("document").ready()
//Set Up Variables and Objects for Game Play
  var inPLay = false;
  var playerChar = "";
  var opponentChar = "";
  var currentPlayerHP = 0;
  var gamesLeft = 3;
  var audioGame = new Audio("assets/sounds/swmedley.mp3")
  var audioEnd = new Audio("assets/sounds/billmurray.wav")
  var porgSound = new Audio("assets/sounds/porgsound.wav")
  var yodaSound = new Audio("assets/sounds/clash clash twirl.mp3")
  var chewieSound = new Audio("assets/sounds/roar.wav")
  var bobaFettSound = new Audio("assets/sounds/ASYUWISH.wav")
  var blasterSound = new Audio("assets/sounds/LAZER.wav")
  var yodaVoice = new Audio("assets/sounds/strongam.wav")
  var porg = {
      charName : "Porg",
      image : "porg.jpg",
      hitPoints : 60,
      attackPower : 6,
      ogAttackPower: 6,
      counterAttack : 8,
      playState : "available",
  }
  var chewie = {
      charName : "Chewie",
      image : "chewbacca.png",
      hitPoints : 120,
      attackPower : 8,
      ogAttackPower: 8,
      counterAttack : 10,
      playState : "available",
  }
  var bobaFett = {
      charName : "Boba Fett",
      image : "bobafett.jpg",
      hitPoints : 120,
      attackPower : 8,
      ogAttackPower: 8,
      counterAttack : 10,
      playState : "available",
  }
  var yoda = {
      charName : "Yoda",
      image : "yoda.jpg",
      hitPoints : 150,
      attackPower : 10,
      ogAttackPower: 10,
      counterAttack : 12,
      playState : "available",
  }
//Set up text and hover features for character choices
// TODO Set up some kind of array or object to reduce repetition here
  $("#choiceText").text("Choose your Character");
  $("#cardPl").hide()
  $("#cardOp").hide()
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
//Click functions for choosing player and opponents
//TODO Set up an array or object routine to reduce repetition again
      $("#playCard1").click(function() {
        porgSound.play()
        if (playerChar === "" || opponentChar === "") {
        $("#card-div1").remove()
          if (playerChar.length <= 0) {
            playerChar = porg
            playerChar.playState = "player"
            fillPlayerCard()
          }
          else {
            opponentChar = porg
            opponentChar.playState = "opponent"
            inPLay = true
            fillOpponentCard()
          }
        }
      })
      $("#playCard2").click(function() {
        chewieSound.play()
        if (playerChar === "" || opponentChar === "") {
        $("#card-div2").remove()
          if (playerChar === "") {
          playerChar = chewie;
          playerChar.playState = "player"
          fillPlayerCard()
        }
        else {
          opponentChar = chewie
          opponentChar.playState = "opponent"
          inPLay = true
          fillOpponentCard()
          }
        }
    });
      $("#playCard3").click(function() {
        bobaFettSound.play()
        if (playerChar === "" || opponentChar === "") {
        $("#card-div3").remove()
        if (playerChar === "") {
          playerChar = bobaFett
          playerChar.playState = "player"
          fillPlayerCard()
        }
        else {
          opponentChar = bobaFett
          opponentChar.playState = "opponent"
          inPLay = true
          fillOpponentCard()
        }
      }
    });
       $("#playCard4").click(function() {
        yodaVoice.play()
        if (playerChar === "" || opponentChar === "") {
        $("#card-div4").remove()
        if (playerChar === "") {
          playerChar = yoda;
          playerChar.playState = "player"
          fillPlayerCard()
        }
        else {
          opponentChar = yoda
          opponentChar.playState = "opponent"
          inPLay = true
          fillOpponentCard()
        }
      }
    });
//Button for game play and resetting the page
    $("#action-button").click(function() {
      if (playerChar.playState === "deceased" || inPLay === false) {
        location.reload()
      }
       else {
        attackSequence()
      }
    })
//Function for populating the Player Card
    function fillPlayerCard() {
      playGameAudio()
      $("#cardPl").show()
      $("#imageCard img").remove()
      $("#cardPl").removeClass("bg-dark")
      $("#cardPl").addClass("cardBorder")
      $("#player-character").replaceWith("<div class='card-text'>"+playerChar.charName+"</div>")
      $("#player-image").replaceWith("<img id='player-image' class='card-img-bottom' src='assets/images/"+playerChar.image+"'>")
      $("#player-hp").replaceWith("<div id='player-hp' class='card-text'>"+playerChar.hitPoints+" hp</div>")
      $("#choiceText").text("Choose your opponent")
      $("#playa-playa").text("PLAYER CHARACTER")
    }
//Function for populating the Opponent Card
    function fillOpponentCard() {
      $("#cardOp").show()
      $("#imageCard img").remove()
      $("#cardOp").removeClass("bg-dark")
      $("#opponent-character").replaceWith("<div id='opponent-character' class='card-text bg-danger'>"+opponentChar.charName+"</div>")
      $("#opponent-image").replaceWith("<img id='opponent-image' class='card-img-bottom bg-danger' src='assets/images/"+opponentChar.image+"'>")
      $("#opponent-hp").replaceWith("<div id='opponent-hp' class='card-text bg-danger'>"+opponentChar.hitPoints+" hp</div>")
      $("#oppo-oppo").text("OPPONENT CHARACTER")
      $(".button").remove()
      $("#action-button").append("<button class='button'>ATTACK</button>")
      if (gamesLeft === 1) {
        $("#choiceText").text("FINAL ROUND!")
      }
      else {
      $("#choiceText").text("REMAINING OPPONENTS")
      }
    }
//Function for calculating math functions of attack and figuring out if either the player or opponent is dead
    function attackSequence() {
      opponentChar.hitPoints = (opponentChar.hitPoints-=playerChar.attackPower)
      playerChar.hitPoints = (playerChar.hitPoints-opponentChar.counterAttack)
      playerChar.attackPower = (playerChar.attackPower+=playerChar.ogAttackPower)
      $("#opponent-hp").replaceWith("<div id='opponent-hp' class='card-text bg-danger'>"+opponentChar.hitPoints+" hp</div>")
      $("#player-hp").replaceWith("<div id='player-hp' class='card-text'>"+playerChar.hitPoints+" hp</div>")
      playerAttackSounds()
      opponentAttackSounds()
      if (opponentChar.hitPoints <= 0) {
        opponentDied()
      }
      else if (playerChar.hitPoints <= 0) {
        playerDied()
      }
    }
//Function for ending the game after death of player character
    function playerDied() {
      $("#player-image").replaceWith("<img id='player-image' class='card-img-bottom' src='assets/images/dead"+playerChar.image+"'>")
      $("#playa-playa").text("DECEASED")
      $(".button").remove()
      $("#action-button").append("<button class='button'>RESTART</button")
      $("#choiceText").text("YOUR CHARACTER HAS DIED. PLEASE PRESS THE RESTART BUTTON TO PLAY AGAIN.")
      playAudioEnd()
      playerChar.playState = "deceased"
    }
//Function for opening up opponent section for new opponent or ending the game if all rounds are played
    function opponentDied () {
      $("#opponent-image").replaceWith("<img id='opponent-image' class='card-img-bottom bg-danger' src='assets/images/dead"+opponentChar.image+"'>")
      $(".button").remove()
      $("#oppo-oppo").text("DECEASED")
      opponentChar.playState = "deceased"
      gamesLeft--
      if (gamesLeft > 0) {
        opponentChar = ""
        $("#choiceText").text("PLEASE CHOOSE YOUR NEXT OPPONENT")
    }
      else {
        $(".button").remove()
        $("#action-button").append("<button class='button'>RESTART</button>")
        $("#choiceText").text("CONGRATULATIONS! YOU HAVE DEFEATED ALL YOUR OPPONENTS! PRESS RESTART TO PLAY AGAIN")
        stopGameAudio()
        audioEnd.play()
        inPLay = false
      }
    }
//Various sound effect functions
    function playAudioEnd() {
      audioEnd.play()
    }
    function playerAttackSounds() {
      if (playerChar.charName === "Yoda") {
        yodaSound.play()
      }
      else if (playerChar.charName === "Chewie" || playerChar.charName === "Boba Fett") {
        blasterSound.play()
      }
      else if (playerChar.charName === "Porg") {
        porgSound.play()
      }
    }
//Functions to determine and set sound effects for game play
    function opponentAttackSounds() {
      if (opponentChar.charName === "Yoda") {
        yodaSound.play()
      }
      else if (opponentChar.charName === "Chewie" || opponentChar.charName === "Boba Fett") {
        blasterSound.play()
      }
      else if (opponentChar.charName === "Porg") {
        porgSound.play()
      }
    }
    function playGameAudio () {
      audioGame.play()
    }
    function stopGameAudio () {
      audioGame.pause()
      audioGame.currentTime = 0
    }
