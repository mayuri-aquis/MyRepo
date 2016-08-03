jQuery(function( $ ) {
  $.fn.addMaskingSpan = function() {
    $(this).hide()
    $(this).before("<input type='text' class='mask_span'></input>");
  };

  $.fn.addToggleButton = function() {
    $(this).after("<span class='mask_data'>show</span>")
  };

  $.fn.positionMaskingSpan = function() {
    $(this).each(function() {
      if ($(this).is('input')) {
        $(this).prev('input').css({'position' : 'absolute' });
      }
    })
  };

  $.fn.toggleData = function() {
    $(this).each(function() {
      $(this).next('.mask_data').click(function() {
        if ($(this).text() == 'show') {
          $(this).text('hide');
          $(this).parent().find('.mask_span').hide().next('.mask').show();
        } else {
          $(this).text('show');
          $(this).parent().find('.mask_span').show().next('.mask').hide();
        }
      });
    })
  };

  $.fn.maskData = function(mask_event) {
    if ($(this).is('input')) {
      var str =  $(this).val();
     }
    else {
      var str = $(this).text().trim();
    }
    if (str.length < 5) {
      $(this).prev('input').val(str);
    }
    else {
      $(this).prev('input').val(Array(str.length - 3).join('*') + str.substr(-4,4))
    }
  };

  $.fn.mask = function() {
    this.addMaskingSpan();
    this.addToggleButton();
    // this.positionMaskingSpan();
    this.maskData();
    this.maskData('keyup');
    this.toggleData();
    this
  }
});