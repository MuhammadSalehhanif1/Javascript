let name="abid"
let score=20
console.log(name+score);// ye tarika thora acha nhi hy
console.log(`My name is ${name} and my score is ${score}`);// ye Template literal

// one more way toh creatr string
let username=new String ("anwerali")// so ye object ki surat me string aye and
console.log(username[7],name[3]); // so  string back me object hotay hy
// more prototype in string
let gameName="valorant"
console.log(gameName.charAt(1));
console.log(gameName.indexOf("l"));
console.log(gameName[0].toUpperCase()+gameName.substring(1));// sub string mean kaha se kaha tak print karo

let username2="https//abid%20/hellocom"
console.log(username2.replace("%20","-"));// kya replace karna hy and kisse repalce karna hy
// console.log(username2.inculdes('h'));
let test="    hello      "
console.log(test.trim(2));



