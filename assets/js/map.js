
$(window).on('load', function () {

  maps['map-medellin-left'] = function () {
    var QG = {lat:  5.8863, lng: -74.6425};
    var barrio = {lat: 6.1866031, lng: -75.5929752};
    var hopital = {lat: 6.2150977, lng: -75.5715678};
    var stade = {lat: 6.2575888, lng: -75.5845507};
    
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map-medellin-left'), {
      center: QG,
      scrollwheel: false,
      zoom: 8
    }); 

  
    var marker1 = new google.maps.Marker({
      map: map,
      position: QG,
      title: 'Hacienda Napoles', 
      icon: iconBase + 'schools_maps.png'
    }); 

    var contentString11 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Hacienda Napoles</h1>'+
      '<div id="bodyContent">'+
      'Hacienda Nápoles is a Colombian hacienda that was built by the most important drug trafficker of all time, Pablo Escobar.' +
      'The site consists of a Spanish colonial house and a complete zoo which included all kinds of animals from different continents such as giraffes, ostriches, elephants, hippos, ponies, rare antelopes and exotic birds. The ranch had an extensive collection of luxury cars and motorcycles, a private airport and even a go-kart circuit.'+
      '</div>'+
      '</div>';

    var infowindow11 = new google.maps.InfoWindow({
      content: contentString11
    });
    marker1.addListener('click', function() {
      infowindow11.open(map, marker1);
    });

    var marker2 = new google.maps.Marker({
      map: map,
      position: barrio,
      title: 'Barrio Pablo Escobar'
    }); 

    var contentString12 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Barrio Pablo Escobar</h1>'+
      '<div id="bodyContent">'+
      'A great patron, he spent millions in the slums, even building an entire neighborhood on the site of a public dump, the "Barrio Pablo Escobar"' +
      '</div>'+
      '</div>';

    var infowindow12 = new google.maps.InfoWindow({
      content: contentString12
    });
    marker2.addListener('click', function() {
      infowindow12.open(map, marker2);
    });

    //Children's Hospital
    var marker3 = new google.maps.Marker({
      map: map,
      position: hopital,
      title: 'Childrens Hospital'
    }); 

    var contentString13 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">L\'Hopital Pour Enfants</h1>'+
      '<div id="bodyContent">'+
      'It also allowed the construction and financing of several childrens hospitals such as that of Medellin.' +
      '</div>'+
      '</div>';

    var infowindow13 = new google.maps.InfoWindow({
      content: contentString13
    });
    marker3.addListener('click', function() {
      infowindow13.open(map, marker3);
    });

    // STADIUM
    var marker4 = new google.maps.Marker({
      map: map,
      position: stade,
      title: ' Stadium'
    });

    var contentString14 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Atlético Nacional</h1>'+
      '<div id="bodyContent">'+
      'The football club received a lot of financial help from Pablo Escobar. He was largely linked to the city cartel. He was a football fan who put a lot of money into the club.' +
      '</div>'+
      '</div>';

    var infowindow14 = new google.maps.InfoWindow({
      content: contentString14
    });
    marker4.addListener('click', function() {
      infowindow14.open(map, marker4);
    });
  };

  //map for the nasty side, Medellin
  maps['map-medellin-right'] = function () {

    var explosion = {lat:  4.5754006, lng: -74.2136921};
    var assassinats = {lat:  6.2549791, lng: -75.5518103};
    var mort_bonilla = {lat:  4.7267785, lng: -74.0986798};
    var mort_tulio = {lat:  4.6715723, lng: -74.0925297};

    var map2 = new google.maps.Map(document.getElementById('map-medellin-right'), {
        center: explosion,
        scrollwheel: false,
        zoom: 7
      });

    // PLANE ATTACK

      var marker5 = new google.maps.Marker({
        map: map2,
        position: explosion,
        title:'Plane explosion '
      });

      var contentString15 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">The Explosion of the Boeing 727</h1>'+
      '<div id="bodyContent">'+
      'On the morning of November 27, 1989, a Colombian airline commercial plane flying from Bogota to Cali was destroyed in mid-flight. The attack ordered by drug lord Pablo Escobar remains intact in memories. Especially those of the relatives of the 107 victims who continue to demand justice.' +
      '</div>'+
      '</div>';

      var infowindow15 = new google.maps.InfoWindow({
        content: contentString15
      });
      marker5.addListener('click', function() {
        infowindow15.open(map2, marker5);
      });

    // 500 POLICE OFFICERS MURDERED

      var marker6 = new google.maps.Marker({
        map: map2,
        position: assassinats,
        title: '500 officiers de police assassinés'
      });

      var contentString16 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">500 POLICE OFFICERS MURDERED</h1>'+
      '<div id="bodyContent">'+
      'The Medellin Cartel waged a campaign of violence against the police to the point of placing bounties on those who murdered officers. The bonuses varied from 100 to 2000 dollars depending on the period.' +
      '</div>'+
      '</div>';

      var infowindow16 = new google.maps.InfoWindow({
        content: contentString16
      });
      marker6.addListener('click', function() {
        infowindow16.open(map2, marker6);
      });

      // ASSASSINAT DE BONILLA

      var marker7 = new google.maps.Marker({
        map: map2,
        position: mort_bonilla,
        title: 'Murder of Rodrigo Lara Bonilla, Minister of Justice'
      });

      var contentString17 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Murder of Rodrigo Lara Bonilla</h1>'+
      '<div id="bodyContent">'+
      'Its action was characterized by the pursuit of traffickers from the Medellín Cartel led by Pablo Escobar. In 1984, he was killed in Bogota by Escobars men during his transport to the airport.'+ 
      'to take a plane to Prague where he was to carry out his new duties'+ 
      'Ambassador of Colombia. His death marks the start of a war between the state and traffickers'+
       'of drugs, which will last for more than a decade' +
      '</div>'+
      '</div>';

      var infowindow17 = new google.maps.InfoWindow({
        content: contentString17
      });
      marker7.addListener('click', function() {
        infowindow17.open(map2, marker7);
      });

      // ASSASSINAT DE CASTRO
      var marker8 = new google.maps.Marker({
        map: map2,
        position: mort_tulio,
        title: 'Meurtre de Tulio Manuel Castro Gil'
      });

      var contentString18 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Murder of Tulio Manuel Castro Gil'+
      '<div id="bodyContent">'+
      'He was a judge assassinated by the cartel for having sentenced Pablo Escobar.' +
      '</div>'+
      '</div>';

      var infowindow18 = new google.maps.InfoWindow({
        content: contentString18
      });
      marker8.addListener('click', function() {
        infowindow18.open(map2, marker8);
      });

  };

  //carte traffic de drogues
  maps['map-world'] = function () {

    var medellin = {lat:  6.268844, lng: -75.6664325};
    var normanscay = {lat:  24.618841, lng: -76.828809};
    var miami = {lat:  25.7824618, lng: -80.3011204};
    var center = {lat: 18.4306677, lng: -77.8378884};

    var map3 = new google.maps.Map(document.getElementById('map-world'), {
        center: center,
        scrollwheel: false,
        zoom: 5
      });

      var marker9 = new google.maps.Marker({
        map: map3,
        position: medellin,
        title: 'Medellin'
      });

      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Medellin</h1>'+
      '<div id="bodyContent">'+
      'The city over which Pablo Escobar had the most influence was obviously Medellin. It was the' +
      'head of the cartel in this city. An entire neighborhood was even built there, called Barrio Pablo Escobar.'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker9.addListener('click', function() {
    infowindow.open(map3, marker9);
  });

      var marker10 = new google.maps.Marker({
        map: map3,
        position: normanscay,
        title: 'Norman Cay'
      });

      var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Norman Cay</h1>'+
      '<div id="bodyContent">'+
      'The island served as a transit territory for Pablo Escobars cocaine trafficking. He and Carlos Lehder had bought' +
      'most of the land on the island which includes a 400 meter airstrip, a port, a hotel, houses, boats, planes and they are even building a refrigerated warehouse to store the cocaine.'+
      '</div>'+
      '</div>';

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });
  marker10.addListener('click', function() {
    infowindow2.open(map3, marker10);
  });

      var marker11 = new google.maps.Marker({
        map: map3,
        position: miami,
        title: 'Miami'
      });

      var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Miami</h1>'+
      '<div id="bodyContent">'+
      'Miami était le point d\'ancrage nord américain du traffic de cocaïne de Pablo Escobar. C\'est la qu\'arrivait' +
      'la marchandise colombienne pour l\'usage américain. '+
      '</div>'+
      '</div>';

  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });
  marker11.addListener('click', function() {
    infowindow3.open(map3, marker10);
  });

      var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map3
       });

        // Set destination, origin and travel mode.
        var request = {
        destination: normanscay,
        origin: medellin,
        travelMode: google.maps.TravelMode.TRANSIT
       };

        // Pass the directions request to the directions service.
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
        // Display the route on the map.
        directionsDisplay.setDirections(response);
      } 
      });
      };
});
  

  // $('.map').each(function (i, elem) {
  //   var $elem = $(elem);
  //   $elem.css({
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   });
  //   console.log($elem.width(), $elem.height());
  // });

  // setTimeout(function () {
  //   initMap();
  //   initMap2();
  //   initMap3();
  // }, 5);



