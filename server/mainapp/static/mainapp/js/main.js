var doc = document;

var btn = doc.getElementsByClassName('online-singup-btn');
var closeBtn = doc.getElementsByClassName('close');

// КНОПКА ЗАПИСАТЬСЯ
var modalwin = doc.getElementsByClassName('fixed-overlay');

  btn[0].addEventListener('click', function () {
    console.log(modalwin.classList);  
    modalwin[0].classList.toggle("hidden-win");
  });


  closeBtn[0].addEventListener('click', function () {
    console.log(modalwin.classList);  
    modalwin[0].classList.add("hidden-win");
  });
