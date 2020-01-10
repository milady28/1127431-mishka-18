var navHeader = document.querySelector('.header-nav');
      var navToggle = document.querySelector('.header-nav__toggle');

      navHeader.classList.remove('header-nav--nojs');

      navToggle.addEventListener('click', function() {
        if (navHeader.classList.contains('header-nav--closed')) {
          navHeader.classList.remove('header-nav--closed');
          navHeader.classList.add('header-nav--opened');
        } else {
          navHeader.classList.add('header-nav--closed');
          navHeader.classList.remove('header-nav--opened');
        }
      });

var buttonBuy = document.querySelectorAll(".button__buy"), index, buttom;
var popapBasket = document.querySelector(".popap-basket");
var closeBasket = popapBasket.querySelector(".popup-overlay");

for (index = 0; index < buttonBuy.length; index++) {
    button = buttonBuy[index];
    button.addEventListener("click", function (event) {
        console.log("click");
        event.preventDefault();
        popapBasket.classList.add("popap-basket-show");
    });
}

closeBasket.addEventListener("click", function(evt) {
    evt.preventDefault();
    popapBasket.classList.remove("popap-basket-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popapBasket.classList.contains("popap-basket-show")) {
            popapBasket.classList.remove("popap-basket-show");
        }
    }
});
