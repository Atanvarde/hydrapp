"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

// <<-- hydrApp -->> //

const buttonAdd = document.querySelector(".waterglass__button--add-js");

const buttonRemove = document.querySelector(".waterglass__button--remove-js");

const glassCounter = document.querySelector(".waterglass__counter--js");

const key = new Date().toISOString().slice(0, 10);

let counterValue = 0;

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
  glassCounter.innerHTML = "0";
} else {
  counterValue = localStorage.getItem(key);
  glassCounter.innerHTML = localStorage.getItem(key);
}

// Listener on buttons

buttonAdd.addEventListener('click', (e) => {
  glassCounter.innerHTML = ++counterValue;
  localStorage.setItem(key, counterValue);
})


buttonRemove.addEventListener('click', (e) => {
  if (localStorage.getItem(key) > 0) {
    glassCounter.innerHTML = --counterValue;
    localStorage.setItem(key, counterValue);
  }
});