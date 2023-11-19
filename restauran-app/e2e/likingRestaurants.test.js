const assert = require('assert');
// eslint-disable-next-line no-undef
Feature('Liking Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurants-item__not__found');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurants-item__not__found');
  I.amOnPage('/');

  // eslint-disable-next-line no-undef
  I.seeElement('.restaurant__title');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant__title a').first();
  // const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  const firstRestaurantName = await I.grabTextFrom('.restaurant-item__header');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__header');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants');
});

// eslint-disable-next-line no-undef
Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__title');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantName = await I.grabTextFrom('.restaurant-item__header');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__header');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click('.restaurant__title');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
