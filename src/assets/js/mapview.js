
var positionBtn= document.getElementById('latlong-btn');
var gps = document.getElementById("latlong");

const mapView=document.getElementById('map-view');

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    gps.innerHTML = "Geolocation is not supported by this browser.";
  }
}

var my_lat ; var my_long ;

function showPosition(position) {
    my_lat=position.coords.latitude ;
    my_long=position.coords.longitude;
  gps.innerHTML = "Latitude: " + my_lat+ 
  "<br>Longitude: " + my_long;

  mapView.firstElementChild.src=`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1015416751475!2d${my_long}!3d${my_lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d8c78cc31512f20!2zMjDCsDE3JzQ1LjgiTiA4NcKwNDknMjguMyJF!5e0!3m2!1sen!2sin!4v1637936912005!5m2!1sen!2sin`;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      gps.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      gps.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      gps.innerHTML = "The request to get user gps timed out."
      break;
    case error.UNKNOWN_ERROR:
      gps.innerHTML = "An unknown error occurred."
      break;
  }
}

var destinationList=[{place:"destination 1",lat:20.293402, long:85.819926},
                     {place:"destination 2",lat:20.300070, long:85.8144923},
                     {place:"destination 3",lat:20.294690, long:85.829389},];

var destinations = document.querySelectorAll('.destination');

destinations.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        // console.log(item.innerText);
        // console.log(destinationList[index].place);
        // console.log(destinationList[index].lat);
        // console.log(destinationList[index].long);

        mapView.firstElementChild.src=`https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3742.090934099817!2d85.81946081532476!3d20.296502867746366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m4!2s${my_lat}%2C${my_long}!3m2!1d${my_lat}!2d${my_long}!4m4!2s${destinationList[index].lat}%2C${destinationList[index].long}!3m2!1d${destinationList[index].lat}!2d${destinationList[index].long}!5e0!3m2!1sen!2sin!4v1637942592653!5m2!1sen!2sin`;
    })
})

