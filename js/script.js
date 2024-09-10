var swiper = new Swiper(".Swiperjs", {
    slidesPerView: 5,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    });
    
    
    
    
      var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    
    navigation: {
    nextEl: ".sb_next",
    prevEl: ".sb_prev",
    },
    on: {
        reachBeginning: function() {
          swiper.navigation.prevEl.disabled = true;
        },
        reachEnd: function() {
          swiper.navigation.nextEl.disabled = true;
        },
        fromEdge: function() {
          swiper.navigation.prevEl.disabled = false;
          swiper.navigation.nextEl.disabled = false;
        },
      },
    });
    
    
    
    function activateTab(element) {
        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });
        element.classList.add('active');
    }



    function toggleText() {
      var summaryText = document.getElementById("summaryText");
      var readMoreBtn = document.getElementById("readMoreBtn");
      var hideBtn = document.getElementById("hideBtn");

      if (summaryText.classList.contains("expanded")) {
        summaryText.classList.remove("expanded");
        readMoreBtn.style.display = "inline-block";
        hideBtn.style.display = "none";
      } else {
        summaryText.classList.add("expanded");
        readMoreBtn.style.display = "none";
        hideBtn.style.display = "inline-block";
      }
    }