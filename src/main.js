import getFeedback from "./js/fetch";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import 'css-star-rating/css/star-rating.min.css';

const wiper = document.querySelector('.swiper-wrapper');


async function check() {

    const value = await getFeedback();
    let markup = '';
    for(let i = 0; i < value.length; i++){
        markup += `
        <div class="swiper-slide">
            <ul class="swiper-list">

                <li><p class="swiper-list-text">${value[i].descr}</p></li>
                <li><p class="swiper-list-name">${value[i].name}</p></li>
            </ul>

        </div>
            

        

        `;

    }

    wiper.insertAdjacentHTML('afterbegin', markup);

    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    
    
    
}


check();