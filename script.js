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
const massWeightRahul = 23.9;
const massWeightPatel = 28.3;
let BMI;
if (BMI <= 25) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}

let a = '19';
let b = '13';
let c = 17;

console.log('19' - '17' + '1');

const numNeighbour = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbour === 1) {
  console.log('Only1border!');
} else if (numNeighbour >= 1) {
  console.log('Morethan1border');
} else
  console.log('no borders !');

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins wins the trophy !");
}
else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas wins the trophy !");
}
else if (scoreDolphins || scoreKoalas > 100) {
  console.log("Both of them wins the trophy !!");
}
else {
  console.log("no one wins");
}


const day = 'wednesday';

if (day === 'monday') {
  console.log("plan course & go to coading meetup");
}
else if (day === 'tuesday') {
  console.log("prepare videos");
}
else if (day === 'wednesday' || day === 'thursday') {
  console.log("write codes");
}
else {
  console.log("Not a valid day!!! ");
}
const totBill = 40;
const tip = totBill >= 50 && totBill <= 300 ? totBill * 0.20 : totBill * 0.15;
console.log(`the value is ${tip}`);
console.log(`the total bill was ${totBill} and tip is ${tip} so the value is ${totBill + tip}`);
