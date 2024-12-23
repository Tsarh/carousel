const swiper = new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });

  const heart = document.querySelectorAll(".material-symbols-sharp")

  for (let i = 0; i < heart.length; i++) {
        heart[i].addEventListener("click", ()=>{
            if(i>-1 && i < heart.length) {
                heart[i].style.color = "red"
                for (let j = 0; j < i; j++) {
                    heart[j].style.color = "rgb(129, 65, 65)"
                }
                for (let k = i+1; k < heart.length; k++) {
                    heart[k].style.color = "rgb(129, 65, 65)"
                }
            }
        })
  }
  
  