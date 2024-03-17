/*Class - Movie

The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
    1)title, which is a String representing the title of the movie
    2)studio, which is a String representing the studio that made the movie
    3)rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the
 title of the movie, a String representing the studio, and a String representing the
  rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as
 default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and
 returns a new array of only those movies in the input array with a rating of "PG".
  You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title 
“Casino Royale”, the studio “Eon Productions”, and the rating “PG­13” */

const arr = [];
const res = [];

class Movie {
  constructor(title, studio, rating) {
    if (arguments.length === 2) {
      this.title = title;
      this.studio = studio;
      this.rating = undefined;
      arr.push(this);
    } else if (arguments.length === 3) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
      arr.push(this);
    }
  }

  static getPG(arr) {
    console.log("getPG() method");

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].rating === "PG") {
        console.log("PG rating found");
        res.push(arr[i]);
      }
    }

    return res;
  }
}

var m1 = new Movie("Casino Royale", "Eon Productions", "PG­13");
var m2 = new Movie("m2", "s2", "PG");
var m3 = new Movie("m3", "s3", "PG");

console.log(arr);

var pgMovies = Movie.getPG(arr);
console.log(pgMovies);
