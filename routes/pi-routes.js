var Gpio = require('onoff').Gpio,
  led = new Gpio(17, 'out');
 

function toggleSwitch(req,res) {
	if(req.body.value){
	led.writeSync(1);	
	}
	led.writeSync(0);
	res.status(200).send();	
}

module.exports ={
	toggleSwitch
}