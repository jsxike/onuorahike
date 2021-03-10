$(document).ready(function () {
  $('.nav_icon').on('click', function () {
    const navigation = $('.navigation');
    $(navigation).toggleClass('clicked');
    $(this).toggleClass('clicked');
  });

  const frontLogo = document.querySelectorAll('.header_logo path');
  // for (let i = 0; i < frontLogo.length; i++) {
  //   console.log(`Letter ${i + 1} length is ${frontLogo[i].getTotalLength()}`);
  // }
});
