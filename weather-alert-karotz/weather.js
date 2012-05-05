include("xmldom.js");

var endFunction = function(event)
{
    if((event == "CANCELLED") || (event == "TERMINATED")) {
        exit();
    }
    return true;
}

var say = function(){

var response = http.get2("http://api.wunderground.com/api/6fbf36729b32810e/geolookup/conditions/forecast/q/TX/austin.xml");
var xml = new XMLDoc(response.content);

// Parsing
var location = xml.selectNode("location/city").getText() + ", " + xml.selectNode("location/country_name").getText();
var date = xml.selectNode("current_observation/observation_time").getText();
var speed = xml.selectNode("current_observation/wind_kph").getText() + " kph, and gust is around " + xml.selectNode("current_observation/wind_gust_kph").getText() ;
// 1.85 to node
var temperature = xml.selectNode("current_observation/temp_f").getText();
var weather = xml.selectNode("current_observation/weather").getText();

var today = "What are the weather condition for today  Well we are the  " +  date + " and the current location is " + location + ".  the current wind speed is " + speed + " , and the temperature is about " + temperature + ", sky condition is almost " +  weather;
karotz.tts.start(today, "END", endFunction);

var tomorrow = "Reading the weather condition will come tomorrow... or by then..."	
karotz.tts.start(tomorrow, "END", endFunction);
	
}

