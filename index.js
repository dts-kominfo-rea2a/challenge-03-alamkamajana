// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
function listBelanjaan(dataBelanjaan){
  let totalList = []
  for (let data of dataBelanjaan){
    // console.log(` '- ${data.nama} x ${data.kuantitas}',`)
    totalList.push(` '- ${data.nama} x ${data.kuantitas}',`)
    // console.log(totalList)
  }
  return totalList
}

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
let totalHarga = []
let totalSum = 0
function totalBelanjaan(dataBelanjaan){
  const reducer = (accumulator, curr) => accumulator + curr;
  for (let data of dataBelanjaan){
    let total = data.harga * data.kuantitas
    // console.log(total)
    totalHarga.push(total)
    // console.log(totalHarga)
    totalSum = totalHarga.reduce(reducer);
    // console.log(totalSum)
  }
  return totalSum;

}

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
