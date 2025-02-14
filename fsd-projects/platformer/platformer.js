$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 620, 1300, 10, "purple");
    createPlatform(100, 500, 1300, 10, "purple");
    createPlatform(0, 380, 300,10, "purple");
    createPlatform(100, 260, 1300, 10, "purple");
    createPlatform(0,140, 1300, 10, "purple")

    // TODO 3 - Create Collectables
    createCollectable("dog", 1350, 50);
    createCollectable("dog", 200, 170, 0.5, 0.7);
    createCollectable("dog", 800, 510, 0.5, 0.7)
    


    
    // TODO 4 - Create Cannons
//createCannon
createCannon("top", 400, 2000);
createCannon("bottom", 450, 2000);
createCannon("top", 800, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
