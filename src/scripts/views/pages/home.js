/* eslint-disable no-plusplus */
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantItemTemplate, createErrorTemplate, hideLoading, loadingTemplate,
} from '../templates/template-creator';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Home = {
  async render() {
    return ` 
      <div class="content">
        <h3 class="content__heading">List of Restaurant Catalogue</h3>
        <div class="load"></div>
        <div class="error_container"></div>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },
  async changingPageSuccessOrError() {
    const loader = document.querySelector('.load');
    const restaurantsContainer = document.querySelector('#restaurants');
    const errorContainer = document.querySelector('.error_container');
    return new Promise((resolve) => {
      loader.innerHTML += loadingTemplate();
      setTimeout(resolve, 100);
    }).then(async () => {
      hideLoading();
      const restaurants = await RestaurantDbSource.list();
      if (restaurants) {
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      } else {
        hideLoading();
        errorContainer.innerHTML += createErrorTemplate();
      }
    }).catch(() => {
      hideLoading();
      errorContainer.innerHTML += createErrorTemplate();
    });
  },
  async afterRender() {
    await this.changingPageSuccessOrError();
  },
};

export default Home;
