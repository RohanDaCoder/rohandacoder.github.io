    $(window).on('load', function() {
      $('#loader').fadeOut('slow', function() {
        $('#main-content').removeClass('hidden').addClass('fade-in-visible');
        $('body').css('overflow', 'auto');
      });
    });

    $(document).ready(function() {
      $('.toggle-description').click(function() {
        $(this).next('.description').toggleClass('description-visible');
      });

      $('body').addClass('fade-in-visible');
    });