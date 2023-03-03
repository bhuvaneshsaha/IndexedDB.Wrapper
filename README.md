| Method Name  | Operation                                                 |
| ------------ | --------------------------------------------------------- |
| constructor  | Creates an instance of the IndexedDBWrapper class.        |
| openDatabase | Opens a connection to the indexedDB database.             |
| addData      | Adds data to the specified store.                         |
| readData     | Reads data from the specified store using the given ID.   |
| updateData   | Updates data in the specified store using the given ID.   |
| deleteData   | Deletes data from the specified store using the given ID. |

const dbWrapper = new IndexedDBWrapper("myDatabase", [{name: "myStore", key: "id"}]);

```js
// Example usage of openDatabase
const db = await dbWrapper.openDatabase();
```

```js
// Example usage of addData
const newData = { id: 1, name: "John Doe", age: 30 };
await dbWrapper.addData(newData, "myStore");
```

```js
// Example usage of readData
const idToRead = 1;
const dataRead = await dbWrapper.readData(idToRead, "myStore");
```

```js
// Example usage of updateData
const idToUpdate = 1;
const newDataToUpdate = { age: 31 };
await dbWrapper.updateData(idToUpdate, newDataToUpdate, "myStore");
```

```js
// Example usage of deleteData
const idToDelete = 1;
await dbWrapper.deleteData(idToDelete, "myStore");
```
