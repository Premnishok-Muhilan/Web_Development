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

  //e)Print the country that uses US dollars as currency

  var dollar_country_obj_arr = country_obj_arr.filter(
    (ele) =>
      ele.name.common === "United States" &&
      ele.currencies.USD.name === "United States dollar"
  );

  var dollar_country_name = dollar_country_obj_arr.map(
    (ele) => ele.name.common
  );
  console.log(dollar_country_name);
};
