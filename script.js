let country = "portugal";
let continent = "Europe";
let people = 1000;
let half_pop;
console.log("Country :" + country);
console.log("Continent :" + continent);
console.log("People :" + people);

let isIsland = false;
let language;
let description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(typeof people);
console.log(typeof isIsland);
console.log(typeof people);
console.log(typeof country);
console.log(typeof language);


half_pop = (people / 2);
console.log(half_pop + 1);
console.log(half_pop >= 1000);
console.log(description);

const newDescription = `${country} is in ${continent} and its 11 million people speak portuguese`;
console.log(newDescription);

let BMI = 23.9;
if (BMI <= 25) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}