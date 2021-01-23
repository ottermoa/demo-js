var map
var mapOptions
function mapInitial(params) {     
    var a = 1;     
    var b = 10;     
    var c = a+b;     
    alert(c);     
    document.getElementById("testText").value = b;     
    
    var SIT = {lat: 13.652861780628847, lng: 100.49360493542751}
    mapOptions = { zoom: 12, center: SIT };
    map = new google.maps.Map(
        document.getElementById("mapDisplay"), mapOptions
    )
}