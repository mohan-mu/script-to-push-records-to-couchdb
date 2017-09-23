const NodeCouchDb = require('node-couchdb');

// node-couchdb instance with default options 
// var couch = new NodeCouchDb();

// node-couchdb instance with Memcached 
const MemcacheNode = require('node-couchdb-plugin-memcached');
const couchWithMemcache = new NodeCouchDb({
	cache: new MemcacheNode
});

// node-couchdb instance talking to external service 
var couchExternal = new NodeCouchDb({
	host: '', //Enter IP here     <-----------------------
	protocol: 'http',
	port: 5984
});

// not admin party 
const couchAuth = new NodeCouchDb({
	auth: {
		user: 'username',
		pass: 'password'
	}
});
//code to list databases
couchExternal.listDatabases().then(function (dbs) {
	// console.log(dbs);
	// body...
});

const dbName = "patients"; // enter db name here 
const queryOptions = {
	startKey,
	endKey
};
// localstorage to keep track 
if (typeof localStorage === "undefined" || localStorage === null) {
	var LocalStorage = require('node-localstorage').LocalStorage;
	localStorage = new LocalStorage('./scratch');
}


var count = localStorage.getItem("ais") || 1;


function inc() {
	count++;
	console.log(count);
	localStorage.setItem("ais", count);
}

//loop to push 500 records 
for (i = 0; i < 500; i++) {
	var ms = ['married', 'unmarried', 'divorced', 'widowed'];
	var reli = ['hindu', 'muslim', 'christian', 'sikh', 'buddhist', 'other/missing'];
	var sg = ['sc', 'st', 'obc', 'general', 'others/missing'];
	var edu = ['none', '1-5', '6-10', 'puc', 'bachelorsdegree', 'others'];
	var veg = ['yes', 'no'];
	var bg = ['a+', 'a-', 'b+', 'b-', 'o+', 'o-', 'ab+', 'ab-'];
	var res = ['urban', 'rural'];
	var phcnames = ['Devargonal', 'GuttiBasaweshwar', 'Hasanapur', 'Hemannur', 'Hunasagi CHC', 'Kakkera', 'Kalladevan halli', 'Kembhavi', 'Kodekal', 'Malla. B, Nagnoor', 'Pet Ammapur', 'Rajankollur', 'Srinivaspur', 'Yalagi'];


	var patient = {
		patientname: Math.random().toString(36).slice(9),
		address: Math.random().toString(36).slice(9),
		contactnumber: Math.floor(1000000000 + Math.random() * 9000000000),
		thayicardno: Math.floor(1000 + Math.random() * 9999),
		martialstatus: ms[Math.floor(Math.random() * 4)],
		religion: reli[Math.floor(Math.random() * 6)],
		socialgroup: sg[Math.floor(Math.random() * 5)],
		education: edu[Math.floor(Math.random() * 6)],
		vegetarianism: veg[Math.floor(Math.random() * 2)],
		bloodgroup: bg[Math.floor(Math.random() * 8)],
		age: Math.floor((Math.random() * (15 - 40) + 40)),
		residence: res[Math.floor(Math.random() * 2)],
		occupation: Math.random().toString(36).slice(9),
		alcoholconsumption: veg[Math.floor(Math.random() * 2)],
		height: (Math.random() * (4.5 - 6.2) + 6.2).toFixed(1),
		heightunit: "feet",
		lmp: "2017-03-07T18:30:00.000Z",
		edd: "13/12/2017",
		phcname: phcnames[Math.floor(Math.random() * 14)],
		ashaname: Math.random().toString(36).slice(9),
		ashacontactnumber: Math.floor(1000000000 + Math.random() * 9000000000)
	}
	inc();

	couchExternal.insert("patients", patient).then((data) => {
		console.log("done")
		console.log(data);
		// data is json response 
		// headers is an object with all response headers 
		// status is statusCode number 
	}, err => {
		console.log("errr");

		console.log(err);
		// either request error occured 
		// ...or err.code=EDOCCONFLICT if document with the same id already exists 
	});
}



