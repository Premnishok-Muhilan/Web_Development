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
  //console.log(country_obj_arr);

  //d)Print the total population of countries using reduce function
  var totalPopulation = country_obj_arr.reduce(
    (acc, cv) => acc + cv.population,
    0
  );
  console.log(totalPopulation);
};
