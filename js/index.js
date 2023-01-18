const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.header__about-btn');
const closePopupBtn = document.querySelector('.popup__close-btn');
const imgPopup = document.querySelector('.popup__image-cover');
const openImgBtn = document.querySelector('.popup__image-open-btn');
const closeImgBtn = document.querySelector('.popup__image-close-btn');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
  closeImgPopup();
}

function openImgPopup() {
  imgPopup.classList.add('popup__image-cover_opened');
  openImgBtn.classList.add('popup__image-open-btn_hidden');
}

function closeImgPopup() {
  imgPopup.classList.remove('popup__image-cover_opened');
  openImgBtn.classList.remove('popup__image-open-btn_hidden');
}

openPopupBtn.addEventListener('click', openPopup);

closePopupBtn.addEventListener('click', closePopup);

openImgBtn.addEventListener('click', openImgPopup);

closeImgBtn.addEventListener('click', closeImgPopup);

popup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});
