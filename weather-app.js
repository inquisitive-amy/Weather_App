
$(document).ready(function(){

	$.ajax('http://api.wunderground.com/api/8b32bb1d11ce4ce8/geolookup/q/autoip.json', {
		type : 'GET',
		dataType : 'jsonp',
		success : function(data){
			console.log(data);
			var city = data.location.city;
			var lon = data.location.lon;
			var lat = data.location.lat;
			console.log(city);


			$.ajax('http://api.wunderground.com/api/8b32bb1d11ce4ce8/conditions/q/' + lat + ',' + lon + '.json', {
				type : 'GET',
				dataType : 'jsonp',
				success : function(data){

					var w = data.current_observation
					var temp = w.temp_c + " degrees";	
					var timeStamp = "Hello! It's " + w.local_time_rfc822;	
					var weatherText = "Looks Like " + w.icon;
					var feelsLike = '... but it feels more like ' + w.feelslike_c;
					var icon = w.icon_url;

					$('.weather_string').text(weatherText);
					$('.temp').text(temp);
					$('.date_time').text(timeStamp);
					$('.feelsLike').text(feelsLike);
					$('body').css('background-image', imageUrl);

					if (weatherText === 'partlycloudy'){
						var imageUrl = 'url(icons/cloudy.png)';
					}
				}
			}); //close second ajax

			$('.city_name').text(city);

		} // close first success

	});//end of ajax

});//end of document ready