class IndexedDBWrapper {
  constructor(databaseName, stores, version = 1) {
    this.databaseName = databaseName;
    this.dbVersion = version;
    this.stores = stores;
    this.isInitialized = true;
  }

  async openDatabase() {
    return new Promise((resolve, reject) => {
      let request = indexedDB.open(this.databaseName, this.dbVersion);
  
      request.onerror = function (event) {
        reject("Database error: " + event.target.errorCode);
      };
  
      request.onsuccess = function (event) {
        resolve(event.target.result);
      };
  
      request.onupgradeneeded = (event) => {
        let db = event.target.result;
        this.stores.forEach((store) => {
          let objectStore = db.createObjectStore(store.name, {
            keyPath: store.key,
          });
        });
      };
    });
  }  

  async addData(data, storeName) {
    try {
      let db = await this.openDatabase(storeName);
      let transaction = db.transaction([storeName], "readwrite");
      let objectStore = transaction.objectStore(storeName);

      await new Promise((resolve, reject) => {
        let request = objectStore.add(data);

        request.onerror = function (event) {
          reject("Error adding data: " + event.target.errorCode);
        };

        request.onsuccess = function (event) {
          resolve();
        };
      });

      console.log("Data added successfully");
    } catch (error) {
      console.error(error);
    }
  }

  async readData(id, storeName) {
    try {
      let db = await openDatabase(storeName);
      let transaction = db.transaction(storeName, "readonly");
      let objectStore = transaction.objectStore(storeName);

      let data = await new Promise((resolve, reject) => {
        let request = objectStore.get(id);

        request.onerror = function (event) {
          reject("Error reading data: " + event.target.errorCode);
        };

        request.onsuccess = function (event) {
          resolve(event.target.result);
        };
      });

      console.log("Data: ", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async updateData(id, newData, storeName) {
    try {
      let db = await openDatabase(config, storeName);
      let transaction = db.transaction(storeName, "readwrite");
      let objectStore = transaction.objectStore(storeName);

      let dataToUpdate = await new Promise((resolve, reject) => {
        let request = objectStore.get(id);

        request.onerror = function (event) {
          reject("Error getting data to update: " + event.target.errorCode);
        };

        request.onsuccess = function (event) {
          let data = event.target.result;
          if (data) {
            Object.assign(data, newData);
            resolve(data);
          } else {
            reject("Data not found");
          }
        };
      });

      await new Promise((resolve, reject) => {
        let request = objectStore.put(dataToUpdate);

        request.onerror = function (event) {
          reject("Error updating data: " + event.target.errorCode);
        };

        request.onsuccess = function (event) {
          resolve();
        };
      });

      console.log("Data updated successfully");
    } catch (error) {
      console.error(error);
    }
  }

  async deleteData(id, storeName) {
    try {
      let db = await openDatabase(config, storeName);
      let transaction = db.transaction([storeName], "readwrite");
      let objectStore = transaction.objectStore(storeName);

      await new Promise((resolve, reject) => {
        let request = objectStore.delete(id);

        request.onerror = function (event) {
          reject("Error deleting data: " + event.target.errorCode);
        };

        request.onsuccess = function (event) {
          resolve();
        };
      });

      console.log("Data deleted successfully");
    } catch (error) {
      console.error(error);
    }
  }
}
