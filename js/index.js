const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.header__about-btn');
const closePopupBtn = document.querySelector('.popup__close-btn');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', openPopup);

closePopupBtn.addEventListener('click', closePopup);

popup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});
