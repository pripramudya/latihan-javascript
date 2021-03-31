/* Program yang mengambil input berupa kata dari 
pengguna sampai pemngguna mengetik "stop".
Lalu program akan menampilkan setiap kata yang 
dimasukkan pengguna, kecuali "stop".
*/

const jKata = [];

const showKata = () => {
  for (const kata of jKata) {
    console.log(kata);
  }
}

const tambahKata = (kata) => {
  jKata.push(kata);
}

const inputKata = () => {
const word = prompt("Masukkan satu kata atau stop untuk berhenti:");
 if (word === "stop") {
   showKata();
 }
    else {
      tambahKata(word);
      inputKata();
    }   
}
  
inputKata();

  
