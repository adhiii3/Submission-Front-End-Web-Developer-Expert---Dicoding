import openConnection from '../globals/idb';
import CONFIG from '../globals/config';

const { OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openConnection();

const FavoriteRestaurantIdb = {
  async get(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME.FAVORITES, id);
  },
  async getAll() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME.FAVORITES);
  },
  async put(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME.FAVORITES, restaurant);
  },
  async delete(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME.FAVORITES, id);
  },
};

export default FavoriteRestaurantIdb;
