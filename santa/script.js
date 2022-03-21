document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.gif",
    preGameScreenImageURLs:"./img/pre-screen.jpg",
    postGameScreenImageURLs:"./img/post-screen.jpg", 
    playUntilScore:(10),
    actionRadius: 100, timeBetweenNPCs: 3200, npcCollisionRadius: 100, 
    actionDuration:600, jumpHeight: 400,npcSpeed:300,typesOfNPC:(3)});
});