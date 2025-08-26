//advacend loops only apply on arrey

// me i only do 2 loops which name is filer,map
// let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let bb = aa.map((value) => (value * 10 + 1))
// console.log(bb);


let books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1950, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
let ak = books.filter((item) => (item.publish >= 1950 && item.title === "Book One"))
  .map((books) => ({
    ...books,
    edition: books.edition * 100
  }));
console.log(ak);





function sir1() {
  // const words = ["spray", "elite", "exuberant", "destruction", "present"];

  // const result = words.filter((word) => word.length > 6);

  // // console.log(result);

  // //



  function isBigEnough(value) {
    return value >= 10;
  }
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  console.log(filtered);

  // filtered is [12, 130, 44]




  // const elements = ["Fire", "Air", "Water"];

  // console.log(elements.join());
  // // Expected output: "Fire,Air,Water"

  // console.log(elements.join(" "));
  // // Expected output: "FireAirWater"

  // console.log(elements.join(" <-> "));
  // // Expected output: "Fire-Air-Water"


  // const array = [1, 2, "a", "1a"];

  // console.log(array.toString());
  // // Expected output: "1,2,a,1a"
}
