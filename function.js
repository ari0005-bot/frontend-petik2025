/**
 * Function adalah blok kode yang dapat digunakan kembali
 * untuk melakukan tugas tertentu
 * macam macam function
 * 1. function declaration
 * 2. functionn expression
 * 3. arrow function 
 */

// 1. Function declaration
function sapa(nama) {
    console.log(`Halo ${nama}`);
}
sapa("Ucup");

// 2. Function expression
const salam = function (nama) {
    console.log(`Assalamualaikum ${nama}`);
};
salam("Budi");

// 3. Arrow function
const ucap = (nama) => {
    console.log(`Selamat datang, ${nama}`);
};
ucap("Agus");