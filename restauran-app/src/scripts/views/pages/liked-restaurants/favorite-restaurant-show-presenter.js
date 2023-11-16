/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    const restaurants = this._favoriteRestaurants.getAllRestaurant();
    this._displayRestaurants(restaurants);
  }

  // eslint-disable-next-line class-methods-use-this
  _displayRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}

export default FavoriteRestaurantShowPresenter;
