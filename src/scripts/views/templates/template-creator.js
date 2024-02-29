import CONFIG from '../../globals/config';
import DetailInitiator from '../../utils/detail-initiator';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">

  <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address} - ${restaurant.city}</p>
    <h4>Category</h4>
    ${DetailInitiator.templateCategory(restaurant)}
    <h4>Foods Menu</h4>
    ${DetailInitiator.templateFoods(restaurant)}
    <h4>Drinks Menu</h4>
    ${DetailInitiator.templateDrinks(restaurant)}
    <h4>Rating</h4>
    <p>⭐️  ${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Customer Reviews</h3>
    ${DetailInitiator.templateCustomerReviews(restaurant)}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <picture>
        <source media="(max-width: 480px)" data-srcset="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" type="image/webp">
        <source media="(max-width: 480px)" data-srcset="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" type="image/jpeg">
        <source media="(max-width: 800px)" data-srcset="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" type="image/webp">
        <source media="(max-width: 800px)" data-srcset="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" type="image/jpeg">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
            data-src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}">
      </picture>
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name} - ${restaurant.city}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

const createErrorTemplate = () => `
    <div class="error">
        <p>There is something wrong with your connection. Please check it and try reload page.</p>
    </div>
  `;
const hideLoading = () => {
  document.getElementById('loader').style.display = 'none';
};
const loadingTemplate = () => '<div class="loader" id="loader"></div>';

const createNotFoundFavoriteTemplate = () => `
      <div class="error">
          <p>There is no favorite restaurant you choose yet</p>
      </div>
  `;

export {
  loadingTemplate,
  hideLoading,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createErrorTemplate,
  createNotFoundFavoriteTemplate,
};
