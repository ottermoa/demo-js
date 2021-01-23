// demo Google Map API
var map
var mapOptions
function mapInitial(params) {     
    var a = 1;     
    var b = 10;     
    var c = a+b;     
    //alert(c);     
    document.getElementById("testText").value = b;     
    
    var SIT = {lat: 13.652861780628847, lng: 100.49360493542751}
    mapOptions = { zoom: 12, center: SIT };
    map = new google.maps.Map(
        document.getElementById("mapDisplay"), mapOptions
    )

    football = { position: {lat: 13.755677697236274, 
                            lng: 100.62218899717004 },
                 title:"สนามกีฬาราชมังคลาฯ" };
    myMarker = new google.maps.Marker(football);
    myMarker.setMap(map);

    var stadiumList = [
        { position: {lat: 53.464765720158994, 
                     lng: -2.291865392442321},
          title: "Manchester United",
          draggable: true
        },
        { position: {lat: 53.43099209150724, 
                     lng:-2.960815072938084},
         title: "Anfield"
        },
        { position: {lat: 51.48181665488924,
                     lng: -0.19093504392091892},
         title: "Chelsea Stamford Bridge"
        },
        { position: {lat: 14.965385155491523,
                     lng: 103.08546250267148},
         title: "Buriram United",
         icon: {
             url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
         }
        }
    ];
    for (let index = 0; index < stadiumList.length; index++) {
        myMarker = new google.maps.Marker(stadiumList[index]);
        myMarker.setMap(map);
    }

    userSchool = { position: SIT,
                   title:"Your School",
                   draggable: true,
                   icon: {
                       url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
                   }
                };
    schoolMarker = new google.maps.Marker(userSchool);
    schoolMarker.setMap(map);
    google.maps.event.addListener(
            schoolMarker,"click", function () {
                alert("Hello!")
            } );
    google.maps.event.addListener(
            schoolMarker,"dragend", function () {
                var lati = this.position.lat();
                var longi = this.position.lng();
                document.getElementById("latitude").value = lati;
                document.getElementById("longtitude").value = longi;
            }
    )
}