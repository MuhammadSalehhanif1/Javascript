// array ke andar chezzien add karne ka methods
const marvel_heros=["ironman","thor","spiderman"]
const dc_heros=["superman","flash","batman"]
  

// marvel_heros.push(dc_heros) // ye array ko array ke andar hy push kar deta hy
console.log(marvel_heros);//output : [ 'ironman', 'thor', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const newarr=marvel_heros.concat(dc_heros)// ye aik new array deta hy jis me dono array concat hojati hy
console.log(newarr);// output :[ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]
// one more method spread operator  
// example of spread operator : ke aik glass hy woh aik zameen ya box me gira and tooth gaya and all chezz glass ki is box me agaye 
const all_new_heros=[...marvel_heros,...dc_heros]

console.log(all_new_heros);//[ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]
// another method name "flat()" 
const new_Array=[1,2,[3,4],[5,6,[7,8]]]// array ke andar array
const real_Array=new_Array.flat(Infinity)// ye sub array ke andar array ko one array me de deta hy 
console.log(real_Array);// flat  method me hum depth mean number de sakti hy ya phir hum infinity jitne bah array hy sub ko one array me krdo
