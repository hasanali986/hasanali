alert("I am an alert box!");
sm.draw.marker([36.3524, 36.2935]);;

/*
window.onload = function () {
    var el = document.getElementById('ScribbleMap');
    var sm = new ScribbleMap(el);
    
    sm.ui.setStyle({
        lineColor: '#FF0000',
        lineOpacity: 1,
        fillColor: '#0000FF',
        fillOpacity: 1,
        weight: 2,
        lineCap: scribblemaps.enums.lineCap.SQUARE,
        lineJoin: scribblemaps.enums.lineJoin.MITER,
        lineType: scribblemaps.enums.lineType.DASHED,
        lineSegments: [5, 5],
        // angle in radians
        rotation: 0,
        markerImg: "https://hasanali986.github.io/hasanali/icon.png",
        markerScale: 1,
        // marker anchor is from 0-1. 0.5 is center
        markerAnchor: {x: 0.5, y: 0.5},
        markerSize: {x: 64, y: 64},
        tailLength: 25,
        tailWidth: 25,
        // percent of side
        tailOffset: 0.5,
        // angle in radians
        tailAngle: 1.57,
        cornerRadius: 5,
        contentPadding: 5
    });

};

*/


/*
var markers = [
coords = {lat: 36.9914, lng: 35.3308},
coords = {lat: 37.7639, lng: 38.2775},
coords = {lat: 38.7595, lng: 30.5387},
coords = {lat: 39.7191, lng: 43.0506},
coords = {lat: 38.3686, lng: 34.0297},
/*
coords = {lat: 40.6565, lng: 35.8373},
coords = {lat: 39.9334, lng: 32.8597},
coords = {lat: 36.8969, lng: 30.7133},
coords = {lat: 41.113, lng: 42.7023},
coords = {lat: 41.1809, lng: 41.8208},
coords = {lat: 37.838, lng: 27.8456},
coords = {lat: 39.6533, lng: 27.8903},
coords = {lat: 41.6377, lng: 32.3338},
coords = {lat: 37.8888, lng: 41.1285},
coords = {lat: 40.2603, lng: 40.228},
coords = {lat: 40.1426, lng: 29.9793},
coords = {lat: 38.8855, lng: 40.4966},
coords = {lat: 38.4006, lng: 42.1095},
coords = {lat: 40.7325, lng: 31.6082},
coords = {lat: 37.7182, lng: 30.2813},
coords = {lat: 40.1885, lng: 29.061},
coords = {lat: 40.1467, lng: 26.4086},
coords = {lat: 40.6002, lng: 33.6162},
coords = {lat: 40.5499, lng: 34.9537},
coords = {lat: 37.783, lng: 29.0963},
coords = {lat: 37.925, lng: 40.211},
coords = {lat: 40.8387, lng: 31.1626},
coords = {lat: 41.6771, lng: 26.5557},
coords = {lat: 38.6748, lng: 39.2225},
coords = {lat: 39.7469, lng: 39.491},
coords = {lat: 39.9056, lng: 41.2658},
coords = {lat: 39.7667, lng: 30.5256},
coords = {lat: 37.066, lng: 37.3781},
coords = {lat: 40.9175, lng: 38.3927},
coords = {lat: 40.4609, lng: 39.4804},
coords = {lat: 37.5774, lng: 43.7368},
coords = {lat: 36.3524, lng: 36.2935},
coords = {lat: 39.9191, lng: 44.0442},
coords = {lat: 37.7626, lng: 30.5537},
coords = {lat: 41.0082, lng: 28.9784},
coords = {lat: 38.4237, lng: 27.1428},
coords = {lat: 37.5753, lng: 36.9228},
coords = {lat: 41.1956, lng: 32.6227},
coords = {lat: 37.181, lng: 33.2222},
coords = {lat: 40.6013, lng: 43.0975},
coords = {lat: 41.3766, lng: 33.7765},
coords = {lat: 38.7205, lng: 35.4826},
coords = {lat: 39.8398, lng: 33.5089},
coords = {lat: 41.7355, lng: 27.2245},
coords = {lat: 39.1463, lng: 34.1599},
coords = {lat: 36.7165, lng: 37.1147},
coords = {lat: 40.7655, lng: 29.9407},
coords = {lat: 37.8746, lng: 32.4932},
coords = {lat: 39.42, lng: 29.9857},
coords = {lat: 38.3556, lng: 38.3336},
coords = {lat: 38.614, lng: 27.4296},
coords = {lat: 37.3126, lng: 40.739},
coords = {lat: 36.8121, lng: 34.6415},
coords = {lat: 37.2154, lng: 28.3636},
coords = {lat: 38.7346, lng: 41.491},
coords = {lat: 38.6247, lng: 34.7142},
coords = {lat: 37.9698, lng: 34.6766},
coords = {lat: 40.9862, lng: 37.8797},
coords = {lat: 37.0748, lng: 36.2466},
coords = {lat: 41.0255, lng: 40.5177},
coords = {lat: 40.7731, lng: 30.3948},
coords = {lat: 41.2797, lng: 36.3361},
coords = {lat: 37.9274, lng: 41.942},
coords = {lat: 42.028, lng: 35.1517},
coords = {lat: 39.7505, lng: 37.015},
coords = {lat: 37.1674, lng: 38.7955},
coords = {lat: 37.519, lng: 42.4537},
coords = {lat: 40.9781, lng: 27.5117},
coords = {lat: 40.3235, lng: 36.5522},
coords = {lat: 41.0027, lng: 39.7168},
coords = {lat: 39.1062, lng: 39.5483},
coords = {lat: 38.6742, lng: 29.4059},
coords = {lat: 38.5012, lng: 43.373},
coords = {lat: 40.6549, lng: 29.2842},
coords = {lat: 39.821, lng: 34.8086},
coords = {lat: 41.4535, lng: 31.7894}
*//*
]; 
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }   
function addMarker(coords){
sm.draw.marker(coords);
}  

sm.draw.marker([36.3524, 36.2935]);*/
