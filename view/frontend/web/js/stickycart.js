define([
  "jquery",
  "jquery/ui",
  ], function ($) {
    'use strict';
    $.widget('mage.magepowStickycart', {
        options: {
            scrollHeight 	: 0,
            typeProduct 	: 'simple'
        },
	    _create: function () {
	        var options = this.options;
	        var buttonAddToCart = $('#product-addtocart-button');
	        var buttonBundle 	= $('#bundle-slide');
	        var buttonSticky 	= $('#btnSticky');
	        if( buttonBundle.length ){
	        	var buttonAction = buttonBundle;
	        	buttonSticky.addClass('customize');
	        } else {
	        	var buttonAction = buttonAddToCart;
	        }
	        if(!buttonAction.length) return;
	        var scrollHeight 	= options.scrollHeight ? options.scrollHeight : buttonAction.position().top;
	        var stickyCart      = $(".stickyCart");
	        $(document).scroll(function() {
				var y = $(this).scrollTop();
				if (y > scrollHeight) {
					stickyCart.fadeIn("fast");
				} else {
					stickyCart.fadeOut("fast");
				}
	        });

	        var qtySticky 	= $('#qtySticky');
	        var groupQty 	= $('.grouped .qty input[type="number"]');
	        var qty 		= $('#qty');
	        qty.change(function(){
	        	qtySticky.val(this.value);
	        });	
	        qtySticky.change(function(){
	        	if(groupQty.length){
	        		groupQty.val(this.value);
	        	}
	        	qty.val(this.value);
	        });        
	        groupQty.change(function() {
	        	qtySticky.val(this.value);
	        });

	        buttonSticky.click(function() {
	        	var $this = $(this);
	        	$this.text(buttonAddToCart.text());
	        	$this.attr("disabled", "disabled");
	        	setTimeout(function() {
	        		$this.removeAttr("disabled");
	          	}, 1500);
	          	if($this.hasClass('customize')){
	          		buttonBundle.click();
	          		buttonSticky.removeClass('customize');
	          	}else {
	            	buttonAddToCart.click();
	          	}
	        });

	        $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.stickyCart .quantity input');
	        $('.stickyCart .quantity').each(function() {
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