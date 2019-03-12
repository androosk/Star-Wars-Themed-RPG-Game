  $("#playCard").hover(function(){
      $("#playCard").addClass("hoverBorder");
  });
  $("#playCard").mouseleave(function(){
    $("#playCard").removeClass("hoverBorder");
  });
  $("#playCard").click(function() {
    $("#playCard").animate({top: "250px"});
    $("#playCard2").animate({right: "255px"})
    $("#playCard3").animate({right: "255px"})
    $("#playCard4").animate({right: "255px"})
    $("#choiceText").text("Choose your opponent")
    $(".characterText").text("Your Character")
  });

  $("#playCard2").hover(function(){
    $("#playCard2").addClass("hoverBorder");
  });
  $("#playCard2").mouseleave(function(){
    $("#playCard2").removeClass("hoverBorder");
  });
  $("#playCard2").click(function() {
    $("#playCard2").animate({top: "250px"});
    $("#playCard2").animate({right: "255px"})
    $("#playCard3").animate({right: "255px"})
    $("#playCard4").animate({right: "255px"})
    $("#choiceText").text("Choose your opponent")
  });

  $("#playCard3").hover(function(){
    $("#playCard3").addClass("hoverBorder");
  });
  $("#playCard3").mouseleave(function(){
    $("#playCard3").removeClass("hoverBorder");
  });
  $("#playCard3").click(function() {
    $("#playCard3").animate({top: "250px"});
    $("#playCard3").animate({right: "510px"})
    $("#playCard4").animate({right: "255px"})
    $("#choiceText").text("Choose your opponent")
  });

  $("#playCard4").hover(function(){
    $("#playCard4").addClass("hoverBorder");
  });
  $("#playCard4").mouseleave(function(){
    $("#playCard4").removeClass("hoverBorder");
  });
  $("#playCard4").click(function() {
    $("#playCard4").animate({top: "250px"});
    $("#playCard4").animate({right: "765px"})
    $("#choiceText").text("Choose your opponent")
  });

  var porgCard = [
      charName = "Porg",
      charSpecies = "Porg",
      charHome = "Ahch-to",
      charWeapon = "Loud Screech",
      charTrait = "Is cute, but will fight you",
      hitPoints = 60,
      attackPower = 10,
      counterAttack = 10,
    ]
  var chewieCard = [
      charName = "Chewie",
      charSpecies = "Wookie",
      charHome = "Kashyyyk",
      charWeapon = "Crossbow Blaster",
      charTrait = "Will rip your arm off",
      hitPoints = 120,
      attackPower = 20,
      counterAttack = 30,
    ]
  var bobaCard = [
      charName = "Boba Fett",
      charSpecies = "Human",
      charHome = "Kamino",
      charWeapon = "Ordinary Blaster",
      charTrait = "Bounty Hunter",
      hitPoints = 120,
      attackPower = 20,
      counterAttack = 30,
    ]
  var yodaCard = [
      charName = "Yoda",
      charSpecies = "Unknown",
      charHome = "Unknown Swamp Planet",
      charWeapon = "Light Saber",
      charTrait = "Jedi Master",
      hitPoints = 150,
      attackPower = 30,
      counterAttack = 40,
    ]
