function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.871368, lng: -111.867412},
          zoom: 13
        });
        
		//House marker
		var houseLatLng = {lat: 40.877691, lng: -111.839921};
        var houseMarker = new google.maps.Marker({
          position: houseLatLng,
          map: map,
          title: "Jeff's House"
        });
		var houseString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            "<h1 id='firstHeadin' class='firstHeading'>Jeff's House</h1>";
		var houseInfo = new google.maps.InfoWindow({
			content: houseString
		});
		houseMarker.addListener('click', function() {
			houseInfo.open(map, houseMarker);
		});
		// School Marker
		var schoolLatLng = {lat: 40.881784, lng: -111.871361}
		var schoolMarker = new google.maps.Marker({
        	position: schoolLatLng,
        	map:map,
        	title: 'Bountiful High School'
        });
        var schoolString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeadin" class="firstHeading">Bountiful High School</h1>';
		var schoolInfo = new google.maps.InfoWindow({
			content: schoolString
		});
		schoolMarker.addListener('click', function() {
			schoolInfo.open(map, schoolMarker);
		});
		//Church Marker
        var churchMarker = new google.maps.Marker({
        	position: {lat: 40.867161, lng: -111.842870},
        	map:map,
        	title: "Mueller Park Stake Center"
		});
		var churchString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeadin" class="firstHeading">Mueller Park Stake Center</h1>';
		var churchInfo = new google.maps.InfoWindow({
			content: churchString
		});
		churchMarker.addListener('click', function() {
			churchInfo.open(map, churchMarker);
		});
		//Nielsen's Frozen Custard
		var nielsensMarker = new google.maps.Marker({
        	position: {lat: 40.862014, lng: -111.894322},
        	map:map,
        	title: "Nielsen's Frozen Custard"
		});
		var custardString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            "<h1 id='firstHeadin' class='firstHeading'>Nielsen's Frozen Custard</h1>";
		var custardInfo = new google.maps.InfoWindow({
			content: custardString
		});
		nielsensMarker.addListener('click', function() {
			custardInfo.open(map, nielsensMarker);
		});
		//Temple Marker
		var templeMarker = new google.maps.Marker({
        	position: {lat: 40.882915, lng: -111.846849},
        	map:map,
        	title: "Jeff's House"
		});
		var templeString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeadin" class="firstHeading">Bountiful Utah Temple</h1>';
		var templeInfo = new google.maps.InfoWindow({
			content: templeString
		});
		templeMarker.addListener('click', function() {
			templeInfo.open(map, templeMarker);
		});
