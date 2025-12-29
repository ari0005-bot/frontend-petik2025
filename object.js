/**
 * Membuat object bisa dengan:
 * 1. {}
 * 2. new object()
 */

const user1 = {
    name : "Ucup",
    age : 18,
    address : "Depok"
};

const user2 = new Object();
user2.name = "Udin";
user2.age = 18;
user2.address = "Bogor";

for (const key in user1) {
    console.log(user1[key]);
    
}

console.log(user2.name);
