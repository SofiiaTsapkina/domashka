   /*var defaultZoom = 15,
    zoom = defaultZoom,
    maxZoom = 20,
    minZoom = 10;*/
   
   /*
    var defaultZoom = 15,
    zoom = defaultZoom,
    maxZoom = defaultZoom + defaultZoom * .33,
    minZoom = defaultZoom - defaultZoom * .33;
    */
   

    var defaultZoom = 15,
    zoom = defaultZoom,
    maxZoom = Math.round(defaultZoom + defaultZoom * .33),
    minZoom = Math.round(defaultZoom - defaultZoom * .33);

    //console.log (defaultZoom, zoom, maxZoom, minZoom);
    if (zoom > maxZoom) {
        console.log('Sorry! It\'s too much!');
    } else {
        console.log ('It\s too low!');
    }

    var middle = window.outerHeight / 2;
    window.addEventListener('mousemove', function ( event) {
        //var direction = event.pageY < middle ? 'up' : 'down';
        var cursorPositionY = event.pageY,
            direction;
        if (cursorPositionY < middle){
            derection = 'up';
            //zoom ++;
            if ((zoom + 1 ) > maxZoom){
                console.log ('Sorry! It\'s too much!');
            
        } else {
            zoom++;
        }
        } else {
            direction = 'down'; 

            if ((zoom - 1 ) > minZoom){
                console.log ('It\s too low!');
            //zomm--;       
        } else {
            zoom--;
        }
         
    }
        console.log('Zoom', zoom);

         


    });