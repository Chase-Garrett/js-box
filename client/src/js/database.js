import { openDB } from "idb";

const initdb = async () =>
  openDB("jsbox", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jsbox")) {
        console.log("jsbox database already exists");
        return;
      }
      db.createObjectStore("jsbox", { keyPath: "id", autoIncrement: true });
      console.log("jsbox database created");
    }
  });

export const putDb = async (content) => {
  const jsboxDb = await openDB("jsbox", 1);
  const tx = jsboxDb.transaction("jsbox", "readwrite");
  const store = tx.objectStore("jsbox");
  const request = store.add({ jsbox: content });
  const result = await request;
};

export const getDb = async () => {
  const jsboxDb = await openDB("jsbox", 1);
  const tx = jsboxDb.transaction("jsbox", "readonly");
  const store = tx.objectStore("jsbox");
  const request = store.getAll();
  const result = await request;
  return result;
};

initdb();
