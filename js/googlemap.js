; var GoogleMap = (function () {
    'use strict';

    var settings = {
        containerId: 'map',
        isGrayScale: true,
        isMobileDraggable: false,
        map: {
            centerLat: 46.0549531,
            centerLng: -71.9576151,
            zoom: 17
        },
        markers: [{
            positionLat: 46.0549231,
            positionLng: -71.9579451,
            image: '/Images/cPin.png',
            title: 'Victoriaville'
        }]
    };

    var initialize = function () {
        var styles = [];

        if (settings.isGrayScale) {
            styles.push({ stylers: [{ saturation: -100 }] });
        }

        var map = new google.maps.Map(document.getElementById(settings.containerId), {
            center: new google.maps.LatLng(settings.map.centerLat, settings.map.centerLng),
            zoom: settings.map.zoom,
            disableDefaultUI: true,
            scrollwheel: false,
            draggable: settings.isMobileDraggable ? true : !('ontouchstart' in document.documentElement),
            styles: styles
        });

        for (var i = 0; i < settings.markers.length; i++) {
            var marker = settings.markers[i];
            new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(marker.positionLat, marker.positionLng),
                icon: marker.image,
                title: marker.title
            });
        }
    };

    var asynchronouslyLoadGoogleMapAPI = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBAqNquCcdS6ymIGak0WziweakMTcHcQ9E&callback=GoogleMap.initialize';
        document.body.appendChild(script);
    };

    asynchronouslyLoadGoogleMapAPI();
    return {
        initialize: initialize
    };
}());