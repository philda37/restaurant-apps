import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <main  id="main-content" tabindex="0">
    <!-- Hero Element -->
  <div class="hero">
    <div class="hero__inner" >
      <h1 class="hero__title tab-focus"  tabindex="0" >Setiap Gigitan adalah Petualangan Rasa yang Baru</h1>
      <p class="hero__tagline tab-focus" tabindex="0" >
        Selamat datang di tempat yang penuh dengan kejutan kuliner, 
        di mana setiap kunjungan adalah perjalanan menuju kenikmatan tak terduga
      </p>
    </div>
  </div>
  <section id="about" >
    <h2 tabindex="0" class="tab-focus">Tentang</h2>
    <div class="content">
      <h3 tabindex="0" class="tab-focus">Selamat Datang Di Warung Sebelah</h3>
      <p tabindex="0" class="tab-focus">Kami adalah teman setia para traveler yang selalu mencari petualangan kuliner baru. Warung Sebelah hadir untuk memandu Anda dalam menjelajahi dunia kuliner dengan menawarkan rekomendasi eksklusif untuk restoran-restoran terbaik di seluruh Indonesia</p>
      <p tabindex="0" class="tab-focus">Terima kasih telah mempercayai Warung Sebelah sebagai panduan kuliner Anda. Mari bersama-sama menjelajahi dunia rasa dan menikmati setiap gigitan petualangan kuliner yang tak terlupakan.
        Selamat makan, selamat berpetualang!</p>
    </div>
    <h2 class="content__heading"> Restaurant</h2>
        <div id="restaurants" class="restaurants">
  </section>
  </main>  
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restoList();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Home;
