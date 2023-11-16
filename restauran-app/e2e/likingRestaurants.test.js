/* eslint-disable no-undef */
const assert = require('assert');
Feature('likingRestaurants');

// eslint-disable-next-line no-unused-vars
Scenario('test something', ({ I }) => {

});

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.restaurant-item');
  //   I.seeElement('.query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item');
  I.amOnPage('/');

  I.seeElement('.restaurant__titlle a');
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
