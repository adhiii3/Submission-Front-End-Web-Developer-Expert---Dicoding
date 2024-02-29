import UrlParser from '../../routes/url-parser';
import {
  createRestaurantDetailTemplate, hideLoading, createErrorTemplate, loadingTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import RestaurantDbSource from '../../data/restaurantdb-source';

const Detail = {
  async render() {
    return `
    <div class="content">
      <div class="load"></div>
      <div class="error_container"></div>
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },
  async changingPageSuccessOrError() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    const errorContainer = document.querySelector('.error_container');
    const buttonLikeContainer = document.querySelector('#likeButtonContainer');
    const loader = document.querySelector('.load');

    return new Promise((resolve) => {
      loader.innerHTML += loadingTemplate();
      setTimeout(resolve, 1);
    }).then(async () => {
      hideLoading();
      const restaurants = await RestaurantDbSource.detail(url.id);

      const {
        id, name, pictureId, address, city, rating, description, customerReviews,
      } = restaurants.restaurant;

      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants.restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: buttonLikeContainer,
        restaurant: {
          id,
          name,
          pictureId,
          address,
          city,
          rating,
          description,
          customerReviews,
        },
      });
    }).catch(() => {
      hideLoading();
      buttonLikeContainer.style.display = 'none';
      errorContainer.innerHTML += createErrorTemplate();
    });
  },
  async afterRender() {
    await this.changingPageSuccessOrError();
  },
};

export default Detail;
