const writeBtn = document.querySelector("#Write");

writeBtn.addEventListener("click", async () => {
  await addSamplesUsers1();
  await addSamplesUsers2();
});

// Example 1
const db = new IndexedDBWrapper("myDatabase", [{ name: "myStore", key: "id" }]);

async function addSamplesUsers1() {
  // keyPath, key: 'id', so in data ; must be present 'id in the data
  await db.addData({ id: 1, name: "John Doe" }, "myStore");
}

// Example 2
const db2 = new IndexedDBWrapper("my-second-database", [
  { name: "myStore", key: "title" },
]);

async function addSamplesUsers2() {
    // change in keyPath, key: 'title', so in data 'title' must be present in the data
  await db2.addData({ title: 1, name: "John Doe" }, "myStore");
}
