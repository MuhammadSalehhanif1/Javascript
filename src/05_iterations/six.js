// filter loop
// filter retrun karta hy jabke foreach return nhi karta 
const coding=[1,2,3,4,5,6,7,8]
coding.forEach((item)=>{
    // console.log(item);
    
})// 
//output :
// false
// false
// true
// true
// true
// true
// isliye kyu ki for each har item par loop chala raha hy isliye true false aya
 // agar conditon check karne hotu filter hy jisse hum conditon se array ko print karsakte hy
//  const result =coding.filter((num)=>(
//  num >4))

 console.log(coding.filter((num)=>(
 num >4)));
 
 


const books = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    publishYear: 1997,
    editionYear: 2001,
    genre: "Fantasy"
  },
  {
    title: "The Alchemist",
    publishYear: 1988,
    editionYear: 2014,
    genre: "Adventure"
  },
  {
    title: "Atomic Habits",
    publishYear: 2018,
    editionYear: 2023,
    genre: "Self-Help"
  },
  {
    title: "The Great Gatsby",
    publishYear: 1925,
    editionYear: 2020,
    genre: "Classic Fiction"
  },
  {
    title: "Rich Dad Poor Dad",
    publishYear: 1997,
    editionYear: 2017,
    genre: "Personal Finance"
  },
  {
    title: "1984",
    publishYear: 1949,
    editionYear: 2021,
    genre: "Dystopian Fiction"
  },
  {
    title: "The Hobbit",
    publishYear: 1937,
    editionYear: 2012,
    genre: "Fantasy"
  }
];
let search=books.filter((bk)=>{
  return bk.publishYear <= 2000 && bk.publishYear >= 1980 && bk.genre ==="Fantasy" || bk.genre ==="Adventure"
})
console.log(search);
