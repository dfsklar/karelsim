// karelsim.worlds.js
//
// A set of "built-in" world creation functions to be used with karelsim.js
//
// Created: 12/15/2012
//      by: Mike Fine (michaelcfine@gmail.com)
//

define(
["karelsim"],
function(karelsim) {



karelsim.world_BackAndForth1 = function() {
  "use strict";
  clearWorld(4, 3);
  setNumBeepersInKarelsBag(10);
  
  wall(1  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(1.5, 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 1.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(3  , 1.5, karelsim.RIGHT + karelsim.LEFT);

  wall(2  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3.5, 2.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(4  , 2.5, karelsim.RIGHT + karelsim.LEFT);
    
  beeper(4, 3);
  karel(1, 1, 'north');
  return 0;
};
  



karelsim.world_BackAndForth1 = function() {
    "use strict";
  clearWorld(4, 3);
  setNumBeepersInKarelsBag(10); 
  
  wall(1  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(1.5, 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 1.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(3  , 1.5, karelsim.RIGHT + karelsim.LEFT);

  wall(2  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3.5, 2.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(4  , 2.5, karelsim.RIGHT + karelsim.LEFT);
    
  beeper(4, 3);
  karel(1, 1, 'north');
  return 0;
};


karelsim.world_BackAndForth1a = function() {
    "use strict";
  clearWorld(5, 3);
  setNumBeepersInKarelsBag(10); 
  
  wall(1  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(1.5, 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 1.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(3  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3.5, 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(4, 1.5, karelsim.RIGHT + karelsim.LEFT);
  
  wall(2  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3.5, 2.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(4  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(4.5, 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(5  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  
  beeper(5, 3);
  karel(1, 1, 'north');
  return 0;
};


karelsim.world_BackAndForth2 = function() {
    "use strict";
  clearWorld(5, 4);
  setNumBeepersInKarelsBag(10); 
  
  wall(1  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(1.5, 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 1.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(3  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3.5, 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(4  , 1.5, karelsim.RIGHT + karelsim.LEFT);

  wall(2  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3.5, 2.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(4  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(4.5, 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(5  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  
  wall(1  , 3.5, karelsim.RIGHT + karelsim.LEFT);
  wall(1.5, 3.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2  , 3.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 3.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(3  , 3.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3.5, 3.5, karelsim.RIGHT + karelsim.LEFT);
  wall(4  , 3.5, karelsim.RIGHT + karelsim.LEFT);
  
  beeper(1, 4);
  karel(1, 1, 'north');
  return 0;
};





karelsim.world_Sample2 = function() {
    "use strict";
  clearWorld(5, 4);
  wall(1.5, 1.5, karelsim.TOP + karelsim.BOTTOM);
  wall(1.5, 2  , karelsim.TOP + karelsim.BOTTOM);
  wall(1.5, 2.5, karelsim.TOP + karelsim.BOTTOM + karelsim.RIGHT);
  wall(1.5, 3  , karelsim.TOP + karelsim.BOTTOM);
  wall(1.5, 3.5, karelsim.TOP + karelsim.BOTTOM);
  wall(2  , 2.5, karelsim.LEFT + karelsim.RIGHT);
  wall(2.5, 2.5, karelsim.LEFT + karelsim.RIGHT);
  wall(3  , 2.5, karelsim.LEFT + karelsim.RIGHT);
  wall(3.5, 2.5, karelsim.LEFT + karelsim.RIGHT);
  beeper(5, 2);
  beeper(3, 4);
  beeper(1, 2);
  karel(5, 4, 'south');
  return 0;
};

karelsim.world_Sample3 = function() {
    "use strict";
  clearWorld(5, 4);
  
  wall(1  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(1.5, 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 1.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(3  , 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3.5, 1.5, karelsim.RIGHT + karelsim.LEFT);
  wall(4  , 1.5, karelsim.RIGHT + karelsim.LEFT);

  wall(2  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3.5, 2.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(4  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(4.5, 2.5, karelsim.RIGHT + karelsim.LEFT);
  wall(5  , 2.5, karelsim.RIGHT + karelsim.LEFT);
  
  wall(1  , 3.5, karelsim.RIGHT + karelsim.LEFT);
  wall(1.5, 3.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2  , 3.5, karelsim.RIGHT + karelsim.LEFT);
  wall(2.5, 3.5, karelsim.RIGHT + karelsim.LEFT); 
  wall(3  , 3.5, karelsim.RIGHT + karelsim.LEFT);
  wall(3.5, 3.5, karelsim.RIGHT + karelsim.LEFT);
  wall(4  , 3.5, karelsim.RIGHT + karelsim.LEFT);
  
  beeper(1, 4);
  karel(1, 1, 'north');
  return 0;
};

karelsim.world_EmptySevenBySevenWithKarelInMiddle = function() {
    "use strict";
  clearWorld(7, 7);
  karel(4, 4, 'north');
  return 0;
};

karelsim.world_EmptyTenByFour = function() {
    "use strict";
  clearWorld(10, 4);
  karel(1, 1, 'north');
  return 0;
};

karelsim.world_EmptyEightByEight = function() {
    "use strict";
  clearWorld(8, 8);
  karel(1, 1, 'north');
  return 0;
};

karelsim.world_EightByEightWithBeepers1 = function() {
    "use strict";
  clearWorld(8, 8);
  beeper(7, 5);
  beeper(6, 2);
  beeper(3, 8);
  beeper(3, 3);
  beeper(2, 7);
  beeper(1, 5);
  karel(1, 1, 'north');
  return 0;
};

karelsim.world_EightByEightWithBeepers2 = function() {
    "use strict";
  clearWorld(8, 8);
  beeper(8, 7);
  beeper(8, 5);
  beeper(7, 2);
  beeper(6, 2);
  beeper(5, 5);
  beeper(3, 8);
  beeper(2, 5);
  beeper(1, 3);
  karel(1, 1, 'north');
  return 0;
};

karelsim.world_EightByEightWithBeepers3 = function() {
    "use strict";
  clearWorld(8, 8);
  beeper(2, 7);
  beeper(7, 2);
  beeper(7, 7);
  beeper(5, 5);
  beeper(5, 4);
  beeper(4, 5);
  beeper(4, 4);
  beeper(2, 2);
  karel(1, 1, 'north');
  return 0;
};

// Wide, short world with nothing in it... perfect for dropping lots of beepers in patterns
karelsim.world_EightByEightWithRandomBeepers = function() {
    "use strict";
  var rnd, ii, x, y;
  clearWorld(8, 8);
  karel(1, 1, 'north');
  rnd = Math.floor(Math.random() * 10) + 1;
  for (ii = 0; ii < rnd; ii += 1) {
      x = Math.floor(Math.random() * 8) + 1;
    y = Math.floor(Math.random() * 8) + 1;
    if  ( ( x === 1 ) && ( y == 1 ) ) {
        // Skip... don't put a beeper at Karel's s starting point
    } else {
        if ( karelsim.isBeeperAt(x, y) ) {
          // Skip... don't put a beeper down where one already exists
      } else {
            beeper(x, y);
      }
    }
  }
  return 0;
};



karelsim.world_empty7x7 = function() {
  clearWorld(7, 7);
  karel(1, 1, 'north');
  setNumBeepersInKarelsBag(100);  
  return 0;
}


karelsim.world_littered3x3 = function() {
  clearWorld(3, 3);
  karel(1, 1, 'east');
  beeper(1, 1);
  beeper(1, 2);
  beeper(2, 3);
  beeper(3, 2);
  beeper(3, 1);
  return 0;
}


karelsim.world_RegularlySpaced = function() {
  "use strict";
  clearWorld(10, 4);
  wall(2.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(4.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(6.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(8.5, 1, karelsim.TOP+karelsim.BOTTOM);
  karel(1, 1, 'east');
  beeper(10, 1);
  return 0;
};


karelsim.world_LowHurdles_AllBlocks = function() {
  "use strict";
  clearWorld(10, 4);
  wall(1.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(2.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(3.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(4.5, 1, karelsim.TOP+karelsim.BOTTOM);
  karel(1, 1, 'east');
  beeper(10, 1);
  return 0;
};


karelsim.make_vert_wall = function(x, yLO, yHI) {
  while (yLO <= yHI) {
    wall(x, yLO, karelsim.TOP+karelsim.BOTTOM);
    yLO += 0.5;
  }
}
karelsim.make_horiz_wall = function(y, xLO, xHI) {
  while (xLO <= xHI) {
    wall(xLO, y, karelsim.LEFT+karelsim.RIGHT);
    xLO += 0.5;
  }
}





function random_direction() {
  if (Math.random() > 0.5) {
    return (Math.random() > 0.5) ? 'north' : 'east';
  } else {
    return (Math.random() > 0.5) ? 'west' : 'south';    
  }
}

karelsim.escape_room_1 = function() {
  "use strict";
  clearWorld(6, 6);
  karelsim.make_vert_wall(2.5, 2.5, 5.5);
  karelsim.make_vert_wall(5.5, 2.5, 5.5);
  karelsim.make_horiz_wall(2.5, 2.5, 5.5);
  karelsim.make_horiz_wall(5.5, 2.5, 5.5);

  // Make the door in a random place.
  // which side: left or right?
  var xDoor = (Math.random() > 0.5) ? 2.5 : 5.5;
  var yDoor = 3 + Math.floor(Math.random() * 2);
  wall(xDoor, yDoor, 0);
  
  karel(3, 4, random_direction());

  return 0;
};

karelsim.escape_room_2 = function() {
  "use strict";
  clearWorld(8, 6);
  karelsim.make_vert_wall(2.5, 2.5, 5.5);
  karelsim.make_vert_wall(6.5, 2.5, 5.5);
  karelsim.make_horiz_wall(2.5, 2.5, 6.5);
  karelsim.make_horiz_wall(5.5, 2.5, 6.5);

  // Make the door in a random place.
  // which side: top or bottom?
  var yDoor = (Math.random() > 0.5) ? 2.5 : 5.5;
  var xDoor = 3 + Math.floor(Math.random() * 3);
  wall(xDoor, yDoor, 0);
  
  karel(5, 3, random_direction());

  return 0;
};


karelsim.world_DifferentlySpaced = function() {
  "use strict";
  clearWorld(10, 4);
  wall(2.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(3.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(5.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(8.5, 1, karelsim.TOP+karelsim.BOTTOM);
  karel(1, 1, 'east');
  beeper(10, 1);
  return 0;
};




karelsim.world_DifferentlySpaced_5 = function() {
  "use strict";
  clearWorld(10, 4);
  wall(1.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(3.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(5.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(6.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(8.5, 1, karelsim.TOP+karelsim.BOTTOM);
  karel(1, 1, 'east');
  beeper(10, 1);
  return 0;
};




karelsim.world_DifferentlySpaced_shorter = function() {
  "use strict";
  clearWorld(10, 4);
  wall(6.5, 1, karelsim.TOP+karelsim.BOTTOM);
  karel(1, 1, 'east');
  beeper(8, 1);
  return 0;
};





karelsim.world_DifferentlySpaced_3 = function() {
  "use strict";
  clearWorld(10, 4);
  wall(2.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(5.5, 1, karelsim.TOP+karelsim.BOTTOM);
  wall(7.5, 1, karelsim.TOP+karelsim.BOTTOM);
  karel(1, 1, 'east');
  beeper(10, 1);
  return 0;
};


karelsim.world_TwelveByFourWithHurdles2 = function() {
  "use strict";
  clearWorld(10, 4);
  var x = 2.5;
  wall(x, 1, karelsim.TOP+karelsim.BOTTOM); wall(x, 1.5, karelsim.TOP+karelsim.BOTTOM); wall(x, 2, karelsim.TOP+karelsim.BOTTOM);
  var x = 5.5;
  wall(x, 1, karelsim.TOP+karelsim.BOTTOM);
  var x = 8.5;
  wall(x, 1, karelsim.TOP+karelsim.BOTTOM); wall(x, 1.5, karelsim.TOP+karelsim.BOTTOM); wall(x, 2, karelsim.TOP+karelsim.BOTTOM);
  var x = 9.5;
  wall(x, 1, karelsim.TOP+karelsim.BOTTOM);
  karel(1, 1, 'east');
  beeper(10, 1);
  return 0;
};


// Random heights and spacing
karelsim.world_TwelveByFourWithRandomHurdles = function() {
  "use strict";
  var nn, ii, xx, hh, jj;
  clearWorld(10, 4);
  
  nn = Math.floor(Math.random() * 4) + 1;      // Between 1 and 4 hurdles
  for (ii = 0; ii < nn; ii += 1) {
      xx = Math.floor(Math.random() * 9) + 2.5; // Hurdle x-position between 2.5 and 9.5
      hh = Math.floor(Math.random() * 5) + 1;  // Hurdle height between 1 and 5 'half walls'
    for (jj = 0.5; jj < (hh+1)/2; jj += 0.5) {
        wall(xx, jj, karelsim.TOP+karelsim.BOTTOM);
    }
  }
  karel(1, 1, 'east');
  beeper(10, 1);
  return 0;
};








// Random spacing
karelsim.world_TwelveByFourWithRandomLowHurdles = function() {
  "use strict";
  var nn, ii, xx, hh, jj;
  clearWorld(10, 4);
  
  nn = 8;      // Always 6 hurdles
  for (ii = 0; ii < nn; ii += 1) {
    xx = Math.floor(Math.random() * 9) + 2.5; // Hurdle x-position between 2.5 and 9.5
    hh = 2
    for (jj = 0.5; jj < (hh+1)/2; jj += 0.5) {
        wall(xx, jj, karelsim.TOP+karelsim.BOTTOM);
    }
  }
  karel(1, 1, 'east');
  beeper(10, 1);
  return 0;
};


karelsim.world_EmptyTwelveByEightWithBeepersInBag = function() {
    "use strict";
  clearWorld(12, 8);
  setNumBeepersInKarelsBag(1000);
  karel(1, 1, 'north');
  return 0;
};

karelsim.world_TwelveByTwelveMaze1 = function() {
  "use strict";
  var sts;
  sts = worldString("[1;12;12;1;1;north;0_0_0|0_0_0_0_0_0|0_0_4;_<-L_|_B_R-t--->_|_R---;0|0_0|0|0_0|0_0|0|0_0_0;_~---/_|_B_|_B_~-b---L_;0_0_0_0|0|0|0|0_0_0_0_0;_<-----b-r_|_l-------t-;0|0_0_0_0|0|0|0_0_0_0|0;_|_R-t-L_|_T_|_<--->_|_;0|0_0|0_0|0_0|0|0_0|0|0;_~---/_B_l---/_~-L_|_|_;0_0_0_0|0|0_0_0_0_0|0|0;_<-t---/_|_<-------/_|_;0|0|0_0_0|0|0_0_0_0_0|0;_|_|__---/_|_<---t---r_;0|0|0_0_0_0|0|0_0|0_0|0;_T_l-----t-/_|_B_|_B_|_;0_0|0_0_0|0_0|0|0|0|0|0;---r_<---/_<-/_|_|_|_|_;0_0|0|0_0_0|0_0|0|0|0|0;_B_T_|_<---/_R-b-b-/_|_;0|0_0|0|0_0_0_0_0_0_0|0;_~---/_~-------L_R---/_;0_0_0_0_0_0_0_0_0_0_0_0]");
    //                                    0                       1                       2                       3                       4                       5                       6                       7                       8                       9 
  return sts;
};

karelsim.world_Greetings = function() {
    "use strict";
  var sts;
  sts = worldString("[1;12;12;1;1;north;0_0_0_0_0_0_0_0_0_0_0_0;_<->_<->___<->___<->___;0|0|0|0|0_0|0|0_0|0|0_0;_|_|_|_|___|_|___|_|___;0|0|0|0|0_0|0|0_0|0|0_0;_|_|_|_|___|_|___|_|___;0|0|0|0|0_0|0|0_0|0|0_0;_|_|_|_|___|_|___|_|___;0|0|0|0|0_0|0|0_0|0|0_0;_|_~-/_|___|_|___|_|___;0|0_0_0|0_0|0|0_0|0|0_0;_|_<->_|___|_|___|_|___;0|0|0|0|0_0|0|0_0|0|0_0;_|_|_|_|___|_|___|_|___;0|0|0|0|0_0|0|0_0|0|0_0;_|_|_|_|___|_|___~-/___;0|0|0|0|0_0|0|0_0_0_0_0;_|_|_|_|___|_|_________;0|0|0|0|0_0|0|0_0_0_0_0;_|_|_|_|___|_|___<->___;0|0|0|0|0_0|0|0_0|0|0_0;_~-/_~-/___~-/___~-/___;0_0_0_0_0_0_0_0_0_0_0_0]");
    //                                    0                       1                       2                       3                       4                       5                       6                       7                       8                       9 
    return sts;
};

return karelsim;

});
