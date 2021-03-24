/* Program yang dapat menampilkan hari esoknya dari hari yang di-input oleh user.
Misalnya, user input hari Minggu, maka program akan menampilkan hari Senin.
Dan seterusnya.
*/

// Deklarasi nama-nama hari
const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];

// Fungsi untuk mengecek validitas hari
const cekHari = (hari) => {
  hari = hari.toLowerCase();
  nHari = days.indexOf(hari);

  while (nHari < 0) {
    let hari = prompt("Kamu sehat? Emang ada hari itu? Input yang bener, coy");
    cekHari(hari);
   }
}

// Fungsi untuk menampilkan H+1
const tambah1hari = (hari) => {
  if (nHari === days.length -1)
    {
      alert(`Besoknya hari ${days[0]}`);
    }
  else
    {
      alert(`Besoknya hari ${days[nHari + 1]}`);
    }
}

// Program utama
let hari = prompt("Masukkan hari:");

cekHari(hari);
tambah1hari(hari);
