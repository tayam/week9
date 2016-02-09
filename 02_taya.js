var pin = process.argv[2]*1;
console.log(pin);
var wpi = require('wiring-pi');

//console.log("wpi",wpi);
wpi.setup('gpio');
wpi.pinMode(pin*1, wpi.OUTPUT);
var value = 1;
function toggleBulb(){
	wpi.digitalWrite(pin*1,value);
	console.log("pin",pin, "value",value)
	value = +!value;
}

toggleBulb();
setInterval(toggleBulb,500);
