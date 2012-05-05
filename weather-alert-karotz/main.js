include("util.js");
include("xmldom.js");
include("weather.js");

var karotz_ip="localhost"
var YELLOW = "75FF00";

var buttonListener = function(event)
{
    if (event == "DOUBLE")
    {
        karotz.tts.stop();
        exit();
    }
    else if(event == "SIMPLE")
    {
        karotz.tts.start("Not implemented yet", "EN", exitFunction);
    }
    return true;
}

var exitFunction = function(event)
{
    if((event == "CANCELLED") || (event == "TERMINATED")) {
        exit();
    }
    return true;
}

var onKarotzConnect = function(data)
{
    karotz.button.addListener(buttonListener);
    karotz.led.light(YELLOW);
   	say();
}


karotz.connectAndStart(karotz_ip, 9123, onKarotzConnect, {});
