import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate, createNotFoundFavoriteTemplate, createErrorTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurants</h2>
        <div class="error_container"></div>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },
  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const errorContainer = document.querySelector('.error_container');
    try {
      const restaurants = await FavoriteRestaurantIdb.getAll();
      if (restaurants.length > 0) {
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      } else {
        restaurantsContainer.style.display = 'none';
        errorContainer.innerHTML += createNotFoundFavoriteTemplate();
      }
    } catch (error) {
      restaurantsContainer.style.display = 'none';
      errorContainer.innerHTML += createErrorTemplate();
    }
  },
};

export default Like;
