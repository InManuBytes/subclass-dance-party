$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $("body").append(dancer.$node);

    //add the dancers to our array so we can make them do things as a group
    window.dancers.push(dancer);
  });

  $("#lineup").on("click", function() {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
  });

  // add a function that calculates distance between two dancers
  var calcDistance = function(dancer1, dancer2) {
    // for each dancer we have a top and left property
    // pythagorean theorem
    // a^2 + b^2 = c^2 = sqrt(a^2 + b^2)
    var height = dancer1.top - dancer2.top;
    var length = dancer1.left - dancer2.left;
    var distance = Math.sqrt(Math.pow(height, 2) + Math.pow(length, 2));
    return distance;
  };

  // setInterval(function, timeInMilliseconds) -> repeats function call every timeInMilliseconds
  var checkDistance = function() {
    if (window.dancers.length > 1) {
      for (var i = 0; i < window.dancers.length; i++) {
        for (var j = i + 1; j < window.dancers.length; j++) {
          var resultDistance = calcDistance(window.dancers[i], window.dancers[j]);
          if (resultDistance < 150) {
            if (window.dancers[i] instanceof makeCrab)  {
              window.dancers[i].$node.addClass('zapped');
            }
            if (window.dancers[j] instanceof makeCrab) {
              window.dancers[j].$node.addClass('zapped');
            }
          }
        }
      }
    }
    setTimeout(checkDistance, 10);
  };

  checkDistance();

  $('body').on('mouseover', '.dancer', function() {
    $(this).fadeOut();
  });
});
