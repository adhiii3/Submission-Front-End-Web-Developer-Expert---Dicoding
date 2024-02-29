const escapeHtml = (text) => {
  if (text) {
    const marks = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (key) => marks[key]);
  }
  return text;
};

const DetailInitiator = {

  templateCategory(restaurant) {
    let html = '';
    restaurant.categories.forEach((category) => {
      const name = escapeHtml(category.name);
      html += `<p>- ${name} </p>`;
    });
    return html;
  },

  templateFoods(restaurant) {
    let html = '';
    restaurant.menus.foods.forEach((food) => {
      const name = escapeHtml(food.name);
      html += `<p>- ${name}</p>`;
    });
    return html;
  },

  templateDrinks(restaurant) {
    let html = '';
    restaurant.menus.drinks.forEach((drink) => {
      const name = escapeHtml(drink.name);
      html += `<p>- ${name}</p>`;
    });
    return html;
  },
  templateCustomerReviews(restaurant) {
    let html = '';
    restaurant.customerReviews.forEach((reviews) => {
      const review = escapeHtml(reviews.review);

      html += `<div class="restaurant__overview__item">
    <div class="restaurant__overview__item__content">
        <h3>${reviews.name}</h3>
        <p style="margin-top:15px;">${review}</p>
        <p style="margin-top:15px; font-size:0.9em; text-align:right;">${reviews.date}</p>
    </div>
  </div>
  `;
    });
    return html;
  },
};

export default DetailInitiator;
