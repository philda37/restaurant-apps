/* eslint-disable no-new */
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter';

/* eslint-disable no-undef */
describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
  };
  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should render the information that no restaurants have been liked', () => {
      const presenter = new FavoriteRestaurantShowPresenter({
        view,
      });

      const restaurants = [];
      presenter._displayRestaurants(restaurants);

      expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
    });
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });
    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
        done();
      });

      const favoriteRestaurants = {
        getAllRestaurant: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
