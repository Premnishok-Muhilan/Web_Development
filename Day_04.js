var json_obj_arr = [
  { "Profile summary": "Dedicated and motivated towards software development" },
  {
    Name: "my name",
    Contact: "123456789",
    GitHub: "my_name.github.com",
    LinkedIn: "my_name.linkedin.com",
  },
  {
    "Skill 1": "c programming",
    "Skill 2": "Python programming",
    "Skill 3": "Java Programming",
    "Skill 4": "JavaScript",
  },
  {
    Education: "B.E",
    Batch: "2016-2020",
  },
  {
    Internship: "XYZ Company",
    Period: "Jan 2021- Apr 2022",
  },
  {
    "Certification 1": "Python",
    "Certification 2": "C",
    "Certification 3": "HTML",
  },
];

/*for, for in, for of, forEach loops*/
//for loop
console.log("Using for loop");
for (var i = 0; i < json_obj_arr.length; i++) {
  console.log(json_obj_arr[i]);
}

//for in loop
console.log("\nUsing for in loop");
for (var element in json_obj_arr) {
  console.log(json_obj_arr[element]);
}

//for of loop
console.log("\nUsing for of loop");
for (var element of json_obj_arr) {
  console.log(element);
}

//for each loop
console.log("\nUsing for each loop");
json_obj_arr.forEach((obj) => {
  // Access properties of each object
  console.log(obj);
});


// In JavaScript, window, screen, and document are all objects, but they serve different purposes and have different properties and methods.

//     Window Object:
//         The window object represents the browser window or tab that contains the DOM document.
//         It is the global object in client-side JavaScript and acts as the root level of the DOM hierarchy.
//         It provides properties and methods for manipulating the browser window, such as opening new windows, resizing windows, navigating to URLs, and more.
//         Variables and functions declared globally are added as properties and methods of the window object.
//         Example: window.alert('Hello world');, window.location.href = 'https://example.com';

//     Screen Object:
//         The screen object represents the screen or display device of the user's computer.
//         It provides information about the user's screen, such as width, height, color depth, and available screen space.
//         It's a property of the window object, so you access it via window.screen.
//         Example: console.log(window.screen.width);, console.log(window.screen.height);

//     Document Object:
//         The document object represents the HTML document loaded in the current window.
//         It provides properties and methods for accessing and manipulating the contents of the document, such as adding or removing elements, changing element styles, handling events, and more.
//         It's also a property of the window object, so you access it via window.document or simply document.
//         Example: document.getElementById('myElement').innerHTML = 'New content';, document.addEventListener('DOMContentLoaded', function() { /* code */ });

// In summary, while all three objects are related to browser windows and web pages, they serve different purposes: window deals with the browser window itself, screen deals with the user's screen properties, and document deals with the HTML document loaded in the window.

