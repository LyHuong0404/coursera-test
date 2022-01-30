//event handling
document.addEventListener("DOMContentLoaded", 
		function (event) {
			//Unobstrusive event blinding
			document.querySelector("button")
				.addEventListener("click", function () {
					//var self = this;
					//var name = "";

					//Call server to get the name
					/* $ajaxUtils
						.sendGetRequest("/data/name.txt",  //gui yeu cau
							function (request) {
								var name = request.responseText;
								//self.name = request.responseText; //request giu phan ung tu server

								document.querySelector("#content")  //dung dia chi content
									.innerHTML = "<h2>Hello " + name + "!";
										//ko dong bo */

					$ajaxUtils
						.sendGetRequest("/data/name.json",  //gui yeu cau
							function (res) {
								var message = res.firstName + " " + res.lastName
								if (res.likesChineseFood) {
									message += " likes Chinese food";
								}
								else {
									message += " doesn't like Chinese food"
								}
								message += " and uses ";
								message += res.numberOfDisplays;
								message += " displays for coding.";

								document.querySelector("#content")  //dung dia chi content
									.innerHTML = "<h2>Hello " + message + "</h2>";
										//ko dong bo

					});
		});

})