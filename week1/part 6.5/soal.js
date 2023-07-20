// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log('LOOPING PERTAMA');
let i = 0
while (i < 10) {
    console.log(i);
    i++
}
console.log('LOOPING KEDUA');
let j = 10
while (j > 0) {
    console.log(j);
    j--
}

// 1. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log('LOOPING PERTAMA');
for (let k = 0; k < 10; k++) {
    console.log(k);    
}
console.log('LOOPING KEDUA');
for (let l = 10; l > 0; l--) {
    console.log(l);    
}

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
let angka = 1
while (angka <= 100) {
    if (angka % 2 === 0) {
        console.log(`${angka} GENAP`);
    } else {
        console.log(`${angka} GANJIL`);
    }
    angka++
}

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

let bilangan = 1
while (bilangan <= 100) {
    if (bilangan % 3 === 0) {
        console.log(`${bilangan} kelipatan 3`);
        bilangan+2
    } else if (bilangan % 6 === 0) {
        console.log(`${bilangan} kelipatan 6`);
        bilangan+5
    } else if (bilangan % 10 === 0) {
        console.log(`${bilangan} kelipatan 10`);
        bilangan+9
    }
    bilangan++
}
