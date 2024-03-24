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
  console.log(country_obj_arr);

  //Print the following details name, capital, flag, using forEach function
  country_obj_arr.forEach((element) => {
    console.log("COUNTRY NAME:", element.name.common);
    if (element.capital != undefined) {
      console.log("CAPITAL NAME:", element.capital);
    } else {
      console.log("Capital name is undefined");
    }
    if (element.flags.alt != undefined) {
      console.log("COUNTRY FLAG:", element.flags.alt);
    } else {
      console.log("Flag is undefined");
    }
  });
};
