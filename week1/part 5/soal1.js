// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peranharus memiliki isi data, 
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

// 1. Cek apakah peran tidak kosong
// 2. Jika isi peran adalah ksatria, maka mengeluarkan pesan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
// 3. Jika isi peran adalah tabib, maka mengeluarkan pesan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
// 4. Jika isi peran adalah penyihir, maka mengeluarkan pesan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
// 5. Jika isi peran tidak sesuai ketentuan, maka mengeluarkan pesan "halo ${nama} , tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
// 6. Jika peran kosong, akan mengeluarkan pesan "Pilih Peranmu untuk memulai game"


let nama = "Baja hitam", peran = "KsATrIa";

//code disini gunakan console.log untuk outputnya

if (peran) {
    if (peran.toLowerCase() === 'Ksatria'.toLowerCase()) {
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
    } else if (peran.toLowerCase() === 'Tabib'.toLowerCase()) {
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
    } else if (peran.toLowerCase() === 'Penyihir'.toLowerCase()){
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log(`halo ${nama} , tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
    }
} else {
    console.log(`Pilih Peranmu untuk memulai game`);
}