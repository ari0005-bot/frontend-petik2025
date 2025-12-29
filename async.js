/**
 * promise terdapat 3 status :
 * 1. Pending (tertunda)
 * 2. Fulfilled/resolved (terpenuhi)
 * 3. Rejected (ditolak)
 */

function rebusAir() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Rebus mie");
        }, 3000);
    });
}

function masakMie() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Masak mie");
        }, 3000);
    });
}

function makanMie() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Makan mie");
        }, 4000);
    });
}
//======================================================
// rebusAir(() => {
//     masakMie(() => {
//         makanMie(() => {
//             console.log("Selesai");
//         });
//     });
// });
//=========================================================


// ========================================================
// rebusAir()
//     .then((outRebus) => {
//         console.log(outRebus);
//         return masakMie();
//     })
//     .then((outMasak) => {
//         console.log(outMasak);
//         return makanMie();
//     })
//     .then((outMakan) => {
//         console.log(outMakan);
//         console.log("Selesai");
//     })
//     .catch((error) => {
//         console.error(`Gagal: ${error}`);
//     });
// ========================================================


async function buatMie() {
    try {
        const outRebus = await rebusAir();
        console.log(outRebus);

        const outMasak = await masakMie();
        console.log(outMasak);

        const outMakan = await makanMie();
        console.log(outMakan);
        
        
        
    } catch (error) {
        console.error(`Gagal ${error}`)
    }
}
buatMie();
    
