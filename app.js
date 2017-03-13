const NodeCouchDb = require('node-couchdb');
 
// node-couchdb instance with default options 
// var couch = new NodeCouchDb();
 
// node-couchdb instance with Memcached 
const MemcacheNode = require('node-couchdb-plugin-memcached');
const couchWithMemcache = new NodeCouchDb({
    cache: new MemcacheNode
});
 
// node-couchdb instance talking to external service 
var  couchExternal = new NodeCouchDb({
    host: '',//Enter IP here     <-----------------------
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

// http://jan:password@51.15.36.29:5984/patients
couchExternal.listDatabases().then(function (dbs) {
	// console.log(dbs);
	// body...
});

const dbName = "patients";
const startKey = ["Ann"];
const endKey = ["George"];
const viewUrl = "_design/list/_view/by_firstname";
 
const queryOptions = {
    startKey,
    endKey
};
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

//use the local storage
var count = localStorage.getItem("ais") || 1;


     function inc() {
        count++;
        console.log(count);
        localStorage.setItem("ais", count);
    }

for (i=0 ; i<500;i++){
var ms=['married','unmarried','divorced','widowed'];
var reli=['hindu','muslim','christian','sikh','buddhist','other/missing'];
var sg=['sc','st','obc','general','others/missing'];
var edu=['none','1-5','6-10','puc','bachelorsdegree','others'];
var veg=['yes','no'];
var bg=['a+','a-','b+','b-','o+','o-','ab+','ab-'];
var res=['urban','rural'];
var phcnames = ['Devargonal', 'GuttiBasaweshwar', 'Hasanapur', 'Hemannur', 'Hunasagi CHC', 'Kakkera', 'Kalladevan halli', 'Kembhavi', 'Kodekal', 'Malla. B, Nagnoor', 'Pet Ammapur', 'Rajankollur', 'Srinivaspur', 'Yalagi'];


var patient={   
patientname: Math.random().toString(36).slice(9),
  address:Math.random().toString(36).slice(9),
  contactnumber: Math.floor(1000000000 + Math.random() * 9000000000),
  thayicardno: Math.floor(1000 + Math.random() * 9999),
  martialstatus:ms[Math.floor(Math.random() * 4)],
  religion:reli[Math.floor(Math.random() * 6)],
  socialgroup:sg[Math.floor(Math.random() * 5)],
  education: edu[Math.floor(Math.random() * 6)],
  vegetarianism:veg[Math.floor(Math.random() * 2)] ,
  bloodgroup: bg[Math.floor(Math.random() * 8)],
  age: Math.floor((Math.random() * (15 - 40) + 40)),
  residence:res[Math.floor(Math.random() * 2)] ,
  occupation:Math.random().toString(36).slice(9),
  alcoholconsumption:veg[Math.floor(Math.random() * 2)],
  height:(Math.random() * (4.5 - 6.2) + 6.2).toFixed(1),
  heightunit: "feet",
  lmp: "2017-03-07T18:30:00.000Z",
  edd: "13/12/2017",
  phcname:phcnames[Math.floor(Math.random() * 14)],
  ashaname:Math.random().toString(36).slice(9) ,
  ashacontactnumber: Math.floor(1000000000 + Math.random() * 9000000000)
}










// 1-5  : Math.floor(Math.random() * 6) + 0
// address:Math.random().toString(36).slice(9) ,
// age:Math.floor((Math.random() * (15 - 40) + 40)),
// ageatmarriage:Math.floor((Math.random() * (15 - 40) + 40)),
// ancregno:"Gasdfood",
// ancvisits:"3",
// ashacontactnumber:Math.floor(1000000000 + Math.random() * 9000000000),
// ashaname:Math.random().toString(36).slice(9),
// bloodgroup:"a-",
// contactnumber:count,
// edd:Math.random().toString(36).slice(9),
// education:"Illiterate",
// height:(Math.random() * (4.5 - 6.2) + 6.2).toFixed(1),
// heightunit:"foot",
// ifa:"yes",
// ifatablets:Math.random().toString(36).slice(9),
// lmp:Math.random().toString(36).slice(9),
// paritynumber:Math.floor(10 + Math.random() * 90),
// patientname:Math.random().toString(36).slice(9),
// phcname:Math.random().toString(36).slice(9),
// placeofdelivery:"both",
// socialgroup:"general",
// sourceifa:"government",
// symptoms:{fastheartbeat:true,
// 	   fits:true,
// 	   lossofconsciousness:true,
// 	     severeheadache:true
// 	 },
// 	 thayicardno:Math.floor(1000 + Math.random() * 9999),
// 	 usg:"yes",
// 	 weight:Math.floor((Math.random() * (45 - 70) + 70))
//        };


inc();
// couchExternal.insert("patients",patient ).then(function (response) { console.log(response)}); 

// couch.insert("databaseName", {
//     _id: "document_id",
//     field: ["sample", "data", true]
// }).then(({data, headers, status}) => {
//     // data is json response 
//     // headers is an object with all response headers 
//     // status is statusCode number 
// }, err => {
//     // either request error occured 
//     // ...or err.code=EDOCCONFLICT if document with the same id already exists 
// });

// for (var i =0; i >= 10; i++) {

// console.log(i);
// name();
// }
// function name(){
couchExternal.insert("patients",patient).then((data) => {
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

// }



// };



//  err => {
// 	console.log(err);
//     // either request error occured 
//     // ...or err.code=EDOCCONFLICT if document with the same id already exists 
// });
          // thayicardno:$scope.thayicardno,
                 // ancregno:$scope.ancregno,
                 // patientname:$scope.patientname,
                 // address:$scope.address,
                 // contactnumber:$scope.contactnumber,
                 // phcname:$scope.phcname,
                 // ashaname:$scope.ashaname,
                 // ashacontactnumber:$scope.ashacontactnumber,
                 // age:$scope.age,
                 // paritynumber:$scope.paritynumber,
                 // bloodgroup:$scope.bloodgroup,
                 // ageatmarriage:$scope.ageatmarriage,
                 // lmp:$scope.lmp,
                 // edd:$scope.edd,
                 // socialgroup:$scope.socialgroup,
                 // education:$scope.education,
                 // educationtxt:$scope.educationtxt,
                 // weight:$scope.weight,
                 // height:$scope.height,
                 // heightunit:$scope.heightunit,
                 // ancvisits:$scope.ancvisits,
                 // placeofdelivery:$scope.placeofdelivery,
                 // usg:$scope.usg,
                 // usgtxt:$scope.usgtxt,
                 // ifa:$scope.ifa,
                 // sourceifa:$scope.sourceifa,
                 // ifatablets:$scope.ifatablets,
                 // discountinuedtxt:$scope.discountinuedtxt,
                 // symptoms:$scope.symptoms
                 


 // insert(dbName, data) {
 //        return this._requestWrapped({
 //            method: 'POST',
 //            url: `${this._baseUrl}/${dbName}`,
 //            body: data
 //        }).then(({res, body}) => {
 //            this._checkDocumentManipulationStatus(res.statusCode, body)

 //            if (res.statusCode !== 201 && res.statusCode !== 202) {
 //                throw new RequestError('EUNKNOWN', `Unexpected status code while inserting document into the database: ${res.statusCode}`, body);
 //            }

 //            return {
 //                data: body,
 //                headers: res.headers,
 //                status: res.statusCode
 //            };
 //        });
 //    }





 
// couchExternal.get(dbName, viewUrl, queryOptions).then((data) => {
// 	console.log(data);
//     // data is json response 
//     // headers is an object with all response headers 
//     // status is statusCode number 
// }, err => {
// 	console.log(err);
//     // either request error occured 
//     // ...or err.code=EDOCMISSING if document is missing 
//     // ...or err.code=EUNKNOWN if statusCode is unexpected 
// });