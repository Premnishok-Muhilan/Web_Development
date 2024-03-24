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

  //b)Get all the countries with a population of less than 2 lakhs using Filter function
  var populationGreaterThanTwoLakhsObjArr = country_obj_arr.filter(
    (ele) => ele.area > 200000
  );
  //Array of objects whose population is greater than two lakhs
  //console.log(populationGreaterThanTwoLakhsObjArr);

  var populationGreaterThanTwoLakhs = populationGreaterThanTwoLakhsObjArr.map(
    (ele) => ele.name.common
  );
  //Country names whose population is greater than two lakhs
  console.log(populationGreaterThanTwoLakhs);
};
