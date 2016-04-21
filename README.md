#climb.js

...it goes up.

The script adds a button to the document that will return a user to the top of the current page. 

Download repository and add `climb.min.js` to the bottom of the document. Modfiy styles within `climb_init();`.
    
    <div id="climb"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="scripts/climb.min.js"></script>

    <script>
      // icon color, background color, side of window, x-coordinate, y-coordinate, window height to display, animation speed
      climb_init('white', '#3F51B5', 'right', 0, 100, 800, 500);
    </script>
