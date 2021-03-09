$(document).ready(function () {
  $('.nav_icon').on('click', function () {
    const navigation = $('.navigation');
    $(navigation).toggleClass('clicked');
    $(this).toggleClass('clicked');
  });
});
