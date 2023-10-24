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
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error("putDb not implemented");

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error("getDb not implemented");

initdb();
