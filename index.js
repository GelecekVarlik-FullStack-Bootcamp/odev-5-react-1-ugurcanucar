//isim baş harfine göre grupla reduce.
// Yaşadıkları şehre göre grupla reduce.

const person1 = {
  name: "hakan",
  surname: "özoğlu",
  age: "30",
  location: "istanbul",
  gender: "man",
  score: 10,
  workingDays: 90,
  books: 1,
};
const person2 = {
  name: "akif",
  surname: "özoğlu",
  age: "32",
  location: "istanbul",
  gender: "man",
  score: 17,
  workingDays: 17,
  books: 9,
};
const person3 = {
  name: "beyza",
  surname: "özoğlu",
  age: "16",
  location: "trabzon",
  gender: "woman",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person4 = {
  name: "alp",
  surname: "öztürk",
  age: "28",
  location: "aydın",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person5 = {
  name: "serdar",
  surname: "çakır",
  age: "22",
  location: "istanbul",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person6 = {
  name: "rümeysa",
  surname: "türkan",
  age: "22",
  location: "istanbul",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person7 = {
  name: "mehmet ali",
  surname: "tunay",
  age: "30",
  location: "istanbul",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person8 = {
  name: "furkan",
  surname: "atsan",
  age: "23",
  location: "ankara",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person9 = {
  name: "kader",
  surname: "arslan",
  age: "24",
  location: "adana",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person10 = {
  name: "uğurcan",
  surname: "uçar",
  age: "24",
  location: "trabzon",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person11 = {
  name: "uğurcan 2",
  surname: "uçar",
  age: "24",
  location: "trabzon",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const arr = [
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
  person9,
  person10,
  person11,
];

const sortByFirstLetter = arr.reduce(function (prev, current) {
  const firstLetter = current.name[0];
  if (prev[firstLetter] === undefined) {
    prev[firstLetter] = [];
  }
  prev[firstLetter].push(current);
  return prev;
}, {});
console.log(
  "-------------------------------- Sort By First Letter of Name -----------------------------"
);
console.log(sortByFirstLetter);
console.log(
  "-------------------------------- Sort By City -----------------------------"
);
const sortByCity = arr.reduce((prev, current) => {
  const city = current.location;
  if (prev[city] === undefined) {
    prev[city] = [];
  }
  prev[city].push(current);
  return prev;
}, {});
console.log(sortByCity);
