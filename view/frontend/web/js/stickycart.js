define([
  "jquery",
  "jquery/ui",
  ], function ($) {
    'use strict';
    $.widget('mage.magepowStickycart', {
        options: {
            ScrollHeight:0
        },
      _create: function () {
        var options = this.options;
        $(document).scroll(function() {
          var y = $(this).scrollTop();
          if (y > options.ScrollHeight) {
            $(".stickyCart").fadeIn("fast");
          } else {
            $(".stickyCart").fadeOut("fast");
          }
        });

        $('#qtySticky').change(function(){
          $('#qty').val(this.value);
        });
        $('#qty').change(function(){
          $('#qtySticky').val(this.value);
        });

        $('#qtyGrouped').change(function(){
          $('form .data.grouped tr:first-child .qty').val(this.value);
        });

        $( "input[type='number']" ).change(function() {
          $('#qtyGrouped').val(this.value);
        });

        $('#btnSticky').click(function() {
          var $this = $(this)
          $this.attr("disabled", "disabled");
          setTimeout(function() {
            $this.removeAttr("disabled");
          }, 1500);
            $('#product-addtocart-button').click();
        });

        var clicks = 0;
        $('.btnCustom').click(function() {
          if (clicks == 0){
              $('#bundle-slide').click(); 
              $(this).text("Add To Cart");
              } else{
              $('#product-addtocart-button').click();
            }
          ++clicks;
        });


        $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
        $('.quantity').each(function() {
          var spinner = $(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find('.quantity-up'),
          btnDown = spinner.find('.quantity-down'),
          min = input.attr('min'),
          max = input.attr('max');
          btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });

          btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });
        });
      }
    });
  return $.mage.magepowStickycart;
});