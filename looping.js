/**
 * - nilai awal
 * - nilai akhir
 * - increment/decrement
 */

for (let i = 0; i < 10; i++) {
    console.log(`looping ke-${i}`);
}

/**
 * Looping while : 
 * menkalankan kode selama kondisi terpenuhi
 * di cek dulu baru dijalankan
 */

let nilai = 0;
while (nilai < 5) {
    console.log(nilai);
    nilai++;
}

/**
 * Looping do while
 * menjalankan kode selama kondisi terpenuhi
 * dijalankan dulu baru di cek
 */

let input;
let password = "admin123";
do {
    input = prompt("Masukan password")
} while (input != password);
