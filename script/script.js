//Developed By RaHa
//@ sunday, 26 june 2016
//@ 07:50     +03:30 GMT
//license GPLv2
function initialize() {
	var points = [
    {id: 1, lat: 35.311027, lng: 46.996207},
    {id: 2, lat: 35.312455, lng: 46.996969},
    {id: 3, lat: 35.313313, lng: 46.997420},
    {id: 4, lat: 35.313698, lng: 46.996	916},
    {id: 5, lat: 35.316259, lng: 46.999121},
    {id: 6, lat: 35.318056, lng: 46.999209}
  ];
  var markers = [];
  var list = document.getElementById("list");
  var cityPos = { lat: 35.31102794821977, lng: 46.99620723724365 };
  //(35.31102794821977, 46.99620723724365)sanandaj kurdestan iran
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: cityPos
  });
  
  for (i = 0; i < points.length; i++){
  	var pos = {lat: points[i].lat, lng: points[i].lng};
    var id = points[i].id;
    addMarker(pos, id);
  }
  
  function addMarker(location, id){
  	var marker = new google.maps.Marker({
    	position: location,
      customInfo: id
    });
    marker.setMap(map);
    markers.push(marker);
    
    var div = document.createElement('div');
    div.setAttribute('id', 'list' + id);
    div.setAttribute('markerId', id);
    div.innerHTML = 'list' + id;
    list.appendChild(div);
    div.onmouseenter = function(){
    	markers[id - 1].setIcon("https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png");
    };
    div.onmouseleave = function(){
    	markers[id - 1].setIcon();
    };
    
    marker.addListener('click', function(event){
  		alert('hello world');
  	});
    marker.addListener('mouseover', function(event){
    	var index = markers.indexOf(marker) + 1;
    	document.getElementById('list' + index).style.color = 'white';
  	});
    marker.addListener('mouseout', function(event){
    	var index = markers.indexOf(marker) + 1;
    	document.getElementById('list' + index).style.color = 'black';
  	});
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
