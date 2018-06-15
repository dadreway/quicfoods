window.onload = function(){
    getlocation();
};

function getlocation(){
    var x = document.getElementById("error");
     if (navigator.geolocation){
         navigator.geolocation.getCurrentPosition(showlocation, showError);
     }else{
         x.innerHTML = "Geolocation not supported";

     }
}

function showlocation(position) {
    var lat = 13.0969;
    var lon = -59.6145;
    var latlon = new google.maps.LatLng(lat, lon);
    var mapholder = document.getElementById('mapholder');
    mapholder.style.height = '500px';
    mapholder.style.width = '100%';


    
    var myOptions = {
    center:latlon, zoom:13,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    };
    
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    
    for(var i = 0;i < markers.length;i++){
        addMarker(markers[i]);
      }

}
    


function showError(error) {
    var x = document.getElementById("error");
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred.";
            break;
    }
}