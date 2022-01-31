(function (global) {
	//set up a namespace for our utility
	var ajaxUtils = {};

	//Return an HTTP request object
	function getRequestObject() {
		if (window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (window.ActiveXObject) {
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert ("Ajax is not supported!");
			return (null); 
			}
		}
	var request = getRequestObject();
	//var myhandler = null; lecture57
	//Make an Aax GET request to 'requestUrl' (gui GET request den server)
	ajaxUtils.sendGetRequest = 
		function (requestUrl, responseHandler, isJsonResponse) {
			//myhandler = responseHandler; lecture57
			request.onreadystatechange = 
				function () {
					handleResponse (request, responseHandler, isJsonResponse);
				};

			//To send a request to a server
			request.open("GET", requestUrl, true);
			request.send(null);  //for POST only
		};	

	//Only calls user provided 'responseHandler'
	//function if response is ready
	//and not an error
	function handleResponse(request, responseHandler, isJsonResponse) {
		if ((request.readyState == 4) && (request.status == 200)) {
			if (isJsonResponse == undefined) {
				isJsonResponse = true;
			}
			if (isJsonResponse) {
				responseHandler(JSON.parse(request.responseText));
			}
			else {
				responseHandler(request.responseText);
			}
		}
	}

	//Expose utility to the global 
	global.$ajaxUtils = ajaxUtils;

})(window);