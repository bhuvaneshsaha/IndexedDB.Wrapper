const writeBtn = document.querySelector("#Write");
const readBtn = document.querySelector("#Read");

writeBtn.addEventListener("click", async () => await addSampleData());
readBtn.addEventListener("click", async () => await getAllData());

// initialize the DB before using it
const config1 = initialize(
  "myDatabase",
  [{ name: "userStore", key: "id" },
  { name: "testWithDifferentKeyStore", key: "title" }],
  2,
);

// Wrapper for adding sample data to the database
async function addSampleData() {
  try {
    let data = [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 35 },
      { id: 4, name: "David", age: 40 },
    ];

    for (let item of data) {
      await addData(item, "userStore", config1);
    }
    console.log("Sample data added successfully");
  } catch (error) {
    console.error(error);
  }
}

// Wrapper for reading all data from the database
async function getAllData() {
  try {
    let db = await openDatabase();
    let transaction = db.transaction(["myObjectStore"], "readonly");
    let objectStore = transaction.objectStore("myObjectStore");

    let request = objectStore.getAll();

    request.onerror = function (event) {
      console.error(
        "Error getting data from database: " + event.target.errorCode
      );
    };

    request.onsuccess = function (event) {
      let data = event.target.result;
      console.log("Data:", data);
    };
  } catch (error) {
    console.error(error);
  }
}
