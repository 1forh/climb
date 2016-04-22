#Climb.js

...it goes up.

Climb.js adds a fixed button to the document, fading in and out at certain scroll heights, that will return a user to the top of the current page when clicked.

Download repository and add `climb.min.js` to the bottom of the document. Modfiy styles within `climb_init();`.
    
    <div id="climb"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="scripts/climb.min.js"></script>

    <script>
      // icon color, background color, side of window, x-coordinate, y-coordinate, window height to display, animation speed
      climb_init('white', '#3F51B5', 'right', 0, 100, 800, 500);
    </script>
