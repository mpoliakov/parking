const client = new Paho.MQTT.Client('m24.cloudmqtt.com', 39931, 'receiver');
client.onMessageArrived = onMessageArrive;
client.connect({
	useSSL: true,
	userName: 'cijtmtir',
	password: 'O2t08bkdacPa',
	onSuccess: onConnect
});

function onConnect() {
	client.subscribe('parking');
}

function onMessageArrive(message) {
	//console.log('1');
	//let json = JSON.parse(message.payloadString);
	//console.log('2');
}

obj = {
	parking_places: {
		'0': true,
		'1': true,
		'2': true,
		'3': true,
		'4': true,
		'5': false,
		'6': true,
		'7': true,
		'8': true,
		'9': false,
		'10': true,
		'11': true,
		'12': true,
		'13': true,
		'14': true,
		'15': true,
		'16': true,
		'17': true,
		'18': false,
		'19': true,
		'20': true,
		'21': true,
		'22': true,
		'23': true,
		'24': true,
		'25': true,
		'26': true,
		'27': true,
		'28': true,
		'29': true,
		'30': true,
		'31': true,
		'32': true,
		'33': true,
		'34': true,
		'35': true,
		'36': true,
		'37': true,
		'38': true,
		'39': true,
		'40': true,
		'41': true,
		'42': true,
		'43': true,
		'44': true,
		'45': false,
		'46': false,
		'47': true,
		'48': true,
		'49': true,
		'50': true,
		'51': true,
		'52': true,
		'53': true,
		'54': true,
		'55': true,
		'56': true,
		'57': true,
		'58': true,
		'59': false,
		'60': true,
		'61': true,
		'62': true,
		'63': true,
		'64': true,
		'65': true,
		'66': true,
		'67': true,
		'68': true,
		'69': true,
		'70': true,
		'71': true,
		'72': false,
		'73': true,
		'74': true,
		'75': true,
		'76': true,
		'77': true,
		'78': false,
		'79': true,
		'80': true,
		'81': true,
		'82': true,
		'83': true,
		'84': true,
		'85': true,
		'86': true,
		'87': true,
		'88': true,
		'89': true,
		'90': true,
		'91': true,
		'92': true,
		'93': true,
		'94': true,
		'95': true,
		'96': true,
		'97': true,
		'98': false,
		'99': true,
		'100': true
	},
	parking: { free: 92, occupied: 9 },
	metadata: {
		source_folder: 'images_camera',
		source_file: '2018-07-12 17_43_14.555.jpg',
		processing_time: 6.87,
		processing_start_time: '2019-01-13 14:04:32'
	}
};

Object.keys(obj.parking_places).forEach(function(key) {
	if (obj.parking_places[key]) {
		document.querySelector('.pl_' + key.toString()).classList.add('free');
	}
});
