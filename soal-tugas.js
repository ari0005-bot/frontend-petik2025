/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Gunakan JavaScript Modern.
 */
const users = [
    {name: "Baros", age: 19, major: "Informatika"},
    {name: "Nurul", age:  20, major: "Teknik Hukum"},
    {name: "Ramon", age: 21, major: "Ekonomi Bisnis"},
    {name: "Barba", age: 19, major: "Pjok"},
    {name: "Kakang", age: 19, major: "Informatika"}
];

/**
 * Helper async
 * Jangan dihapus
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * TODO 2
 * Buat function all (ASYNC):
 * Menampilkan semua data user.
 * Hint:
 * - Gunakan async/await
 * - Gunakan for / for-of
 */
const all = async () => {
  await delay(300);
  // isi di sini
  users.forEach((users, index) => {
    console.log(` ${index}, ${users.name}, ${users.age}, ${users.major}`);
  });
};

/**
 * TODO 3
 * Buat function store (ASYNC):
 * Menambahkan user baru.
 * Hint:
 * - Gunakan async/await
 * - Gunakan method push
 * - Setelah menambah data, tampilkan semua user
 */
const store = async (user) => {
  await delay(300);
  // isi di sini
  users.push(user);
  await all();
};

/**
 * TODO 4
 * Buat function update (ASYNC):
 * Mengedit data user berdasarkan index.
 * Hint:
 * - Gunakan async/await
 * - Gunakan splice
 * - Setelah update, tampilkan semua user
 */
const update = async (index, user) => {
  await delay(300);
  // isi di sini
  users.splice(index, 1, user);
  await all();
};

/**
 * TODO 5
 * Buat function destroy (ASYNC):
 * Menghapus data user berdasarkan index.
 * Hint:
 * - Gunakan async/await
 * - Gunakan splice
 * - Setelah delete, tampilkan semua user
 */
const destroy = async (index) => {
  await delay(300);
  // isi di sini
  users.splice(index, 1);
  await all();
};

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */
async function main() {
  console.log("# Get All Users");
  await all();

  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  await store(newUser);

  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  await update(editedIndex, editedUser);

  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  await destroy(deletedIndex);
}

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
