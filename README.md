
# IndexedDBWrapper

IndexedDBWrapper is a wrapper for the IndexedDB API that makes it easier to use. It is a simple wrapper that provides a few methods to perform CRUD operations on the IndexedDB database.

| Feature          | IndexedDB                                                      | localStorage                               | sessionStorage                             |
| ---------------- | -------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------ |
| Storage capacity | Can store large amounts of structured data                     | Typically limited to 5-10 MB per origin    | Typically limited to 5-10 MB per origin    |
| Persistence      | Data is persistent even after the browser is closed            | Data is persistent until cleared by user   | Data is cleared when the browser is closed |
| Data structure   | Supports complex data structures, including objects and arrays | Supports only strings                      | Supports only strings                      |
| Querying         | Supports querying and indexing data                            | Does not support querying or indexing data | Does not support querying or indexing data |
| Transactions     | Supports transactions for consistent data updates              | Does not support transactions              | Does not support transactions              |
| Security         | Supports a per-origin security model                           | Supports a per-origin security model       | Supports a per-origin security model       |

List of methods available in IndexedDBWrapper:

| Method Name  | Operation                                                 |
| ------------ | --------------------------------------------------------- |
| constructor  | Creates an instance of the IndexedDBWrapper class.        |
| openDatabase | Opens a connection to the indexedDB database.             |
| addData      | Adds data to the specified store.                         |
| readData     | Reads data from the specified store using the given ID.   |
| updateData   | Updates data in the specified store using the given ID.   |
| deleteData   | Deletes data from the specified store using the given ID. |

> You need to copy ***wrapper.js*** from the ***dist/*** folder to your project and import it in your HTML file (or you can import it into any of your js framework).

```html
<script src="path/to/wrapper.js"></script>
```

```js
import IndexedDBWrapper from "path/to/wrapper.js";
```

```js
let ff = require("path/to/wrapper.js");
```

--------------------------------

```js
// Create an instance of IndexedDBWrapper
const dbWrapper = new IndexedDBWrapper("myDatabase", [{name: "myStore", key: "id"}]);
```

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

> You can also refer to the ***index.html*** file in the ***example/*** folder for a working example.
