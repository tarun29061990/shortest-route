var http = require("http");
exports.getShortPath = function(source, callback){
	var source = source;
	var _carr = source.split("|"),
		_carrlen = _carr.length,
		_chashT = {},
		_parr = [];
	for(var i =0; i<_carrlen; i++){
		_chashT[i+1] = _carr[i];
		_parr[i] = (i+1).toString();
	}

	var nooffact = fact(_carrlen),
		noofperm = permute(_parr),
		arr=[];

	for(var i = 0;i<nooffact;i++){
		var x = [];
		x.push("1,"+noofperm[i]+",1");
		arr.push(x);
	}

	var ax = [];
	for(var i=0;i<arr.length; i++){
		
		ax.push(arr[i].toString().split(","));
	}
	var b = [];
	for(var i=0;i<ax.length;i++){
   		if(ax[i][1] === "1"){
           b.push(ax[i]);    
        }
    }

	calculateDistance(source,source,function(json){
		if(json !== "Error"){
			makeSmartObj(json,function(arr1){
		

				var dist = [];
				var hashTableDist = {};
				var _blen = b.length;
				
				for(var i=0;i<_blen;i++){
					var a = 0;
					for(var j=0; j<= (_carrlen); j++){
						if(j===_carrlen)
							a = a + arr1[parseInt(b[i][j])-1][parseInt(b[i][j+1])-1];
						else
							a = a + arr1[parseInt(b[i][j])-1][parseInt(b[i][j+1])-1];
					}
					dist.push(a);
					hashTableDist[dist[i]] = arr[i];
					
				}
				
				dist = dist.sort(function(a,b){return (a-b);});
				var shortestPath = hashTableDist[dist[0]];
				shortestPath = shortestPath.toString().split(",");
				
				var city = "";
				var len = shortestPath.length -1;
				for(var i=1; i<len ; i++){
					city = city+(_chashT[shortestPath[i]])+"|";
				}
				
				city = city+(_chashT[1]);
				
				city = city.split("|").slice(0,_carrlen+1).toString().split(",").join("|");
				var data = {
					"STATUS":"SUCCESS",
					"route":city,
					"distance":dist[0]
				}
				callback(data);
			});
		}else{
			var data = {
				"STATUS":"Error 400 BAD REQUEST",
				"route":null,
				"distance":null
			}
			callback(data);
		}
			
	});

}

function IsJson(str) {
    try {
        JSON.parse(str);
        
    } catch (e) {
        return false;
    }
    return true;
}

function calculateDistance(source, destination, callback){
	var options = {
		hostname: 'maps.googleapis.com',
		port: 80,
		path: '/maps/api/distancematrix/json?origins='+source+'&destinations='+destination+'&language=ENG&sensor=true',
		headers: {
			'content-type': 'application/json'
		},
		method: 'GET'
	};

	var req = http.request(options, function(res1) {
		
	  	var body = "";
	  	res1.on('data', function (chunk) {
	    	body += chunk.toString('utf8');
	  	});

	  	res1.on('end', function(){
	  		
	  		if(IsJson(body))
	  			body = JSON.parse(body);
	  		else
	  			body = "Error";

	  		callback(body);
	  	});
	  	
	});
	req.on('error', function(e) {
  		console.log('problem with request: ' + e);
	});
	req.end();
}

function makeSmartObj(body, callback){
	var ar = [] 
	if(body !== "" && body.length !== 0){
		
		for(var i=0; i < body.rows.length; i++){
			var x = new Array(body.rows[i].elements.length);
			ar.push(x);
			for(var j = 0; j<body.rows[i].elements.length ; j++){
				if(body.rows[i].elements[j].distance)
					ar[i][j] = body.rows[i].elements[j].distance.value;
			}
		}
		callback(ar);
	}
	else{
		callback({
			message: "something wrong"
		})
	}
}

var permArr = [];
var	usedChars = [];
function permute(input){
	
	var i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr;
}

function fact(len){
	if(len === 0 || len === 1){
		return 1;
	}else{
		return (len*fact(len-1));
	}
}