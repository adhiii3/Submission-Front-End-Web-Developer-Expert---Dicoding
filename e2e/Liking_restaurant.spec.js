Feature('Liking restaurant');

const assert = require('assert');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('.error_container');
    I.see('There is no favorite restaurant you choose yet', '.error');
});

Scenario('liking a restaurant', async ({ I }) => {
    I.see('There is no favorite restaurant you choose yet', '.error');

    I.amOnPage('/');

    I.seeElement('.restaurant-item__content h3 a');

    const firstRestaurant = locate('.restaurant-item__content h3 a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.restaurant-item');

    const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3 a');
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking a restaurant', async ({ I }) => {
    I.see('There is no favorite restaurant you choose yet', '.error');

    I.amOnPage('/');

    I.seeElement('.restaurant-item__content h3 a');

    const firstRestaurant = locate('.restaurant-item__content h3 a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.restaurant-item');

    const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3 a');
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    // unlike
    I.click(firstRestaurant);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.error_container');
    I.see('There is no favorite restaurant you choose yet', '.error');
});
