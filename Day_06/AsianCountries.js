/*XML-HTTP request(XHR):If the interaction has been done
based on the API then it is called the XML-HTTP request.*/

// 4 simple steps:

// Step 1:create a XHR Object
var request = new XMLHttpRequest();

// Step 2: initate a request / Open a request
request.open("GET", "https://restcountries.com/v3.1/all");

// Step 03: initate a request
request.send();

//Step 04:if the server responds success

request.onload = function () {
  var country_obj_arr = JSON.parse(request.response);
  //console.log(result);

  //a)Get all the countries from Asia continent /region using Filter function
  var asiaRegionObjArr = country_obj_arr.filter((ele) => ele.region === "Asia");
  //Array of objects whose countries belong to Asia continent
  //console.log(asiaRegionObjArr);

  var countryNamesInAsia = asiaRegionObjArr.map((ele) => ele.name.common);
  //Countries that belong to Asia continent
  console.log(countryNamesInAsia);
};
