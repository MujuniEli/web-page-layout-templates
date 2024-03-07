
let map;

function initMap() {
    map = new google.maps.Map(document.getElementsById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 10,
    })
}

