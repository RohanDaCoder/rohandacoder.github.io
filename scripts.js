function toggleDescription(id) {
  const desc = $('#' + id);
  if (desc.hasClass('show')) {
    desc.removeClass('show').addClass('hide').delay(800).slideUp(0);
  } else {
    desc.removeClass('hide').slideDown(0).addClass('show');
  }
}

// Show content after loading bar animation
setTimeout(() => {
  $('#loading-top').hide();
  $('#loading-bottom').hide();
  $('#content').css('display', 'block').addClass('show');
}, 3000);