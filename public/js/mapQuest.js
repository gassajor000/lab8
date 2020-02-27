function initMap() {
	// add your code here
	L.mapquest.key = 'lGDGlJa2jafRACJXsGXOAdylMzp5W9U6';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	center: [32.88, -117.236],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12,
	zoomControl: false
	});
	
	L.marker([32.885, -117.2413]).addTo(map);
}