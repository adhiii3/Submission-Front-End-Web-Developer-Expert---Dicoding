import { openDB } from 'idb';
import CONFIG from './config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

function openConnection() {
  if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
    return;
  }

  return openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
      if (!database.objectStoreNames.contains(OBJECT_STORE_NAME.FAVORITES)) {
        database.createObjectStore(OBJECT_STORE_NAME.FAVORITES, { keyPath: 'id' });
      }
    },
  });
}

export default openConnection;
