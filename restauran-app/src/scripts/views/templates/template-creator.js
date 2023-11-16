import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__picture lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Nama Resto</h4>
    <p>${restaurant.name}</p>
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p>
    <div class="Restaurant__Description">
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus.foods.map((food) => food.name)}</p>
    <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.map((food) => food.name)}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br>

        <p>${value.name}</p>

        <p>${value.review}</p>

        <p>${value.date}</p>

        `), '<h4>Customer Reviews:</h4>')}  
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__picture lazyload" alt="${restaurant.name}"
           src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/list'}" crossorigin="anonymous">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
      </div>
  </div>
  
`;
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
