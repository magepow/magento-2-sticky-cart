define([
  'jquery',
  'jquery-ui-modules/widget'
  ], function ($) {
    'use strict';
    $.widget('mage.magepowStickycart', {
        options: {
        	scrollHeight : null,
            typeProduct  : 'simple',
            bottomScroll : null
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
	        var stickyCart      = $(".stickyCart");
	        var body 			= $('body');
	        var scrollHei = options.scrollHeight/100;
	        $(document).scroll(function() {
				var y = $(this).scrollTop();
				let scrollHeight = $(document).height();
				let scrollPosition = $(window).height() + y;
				if ((scrollHeight - scrollPosition) / scrollHeight <= scrollHei && options.bottomScroll) {
					  stickyCart.removeClass("sticky_show_atc");
				      body.removeClass('show-add-cart-bottom');
				}else{
				    stickyCart.addClass("sticky_show_atc");
				  	body.addClass('show-add-cart-bottom');

				}

	        });

	        var qtySticky 	= $('#qtySticky');
	        var groupQty 	= $('.grouped .qty input[type="number"]');
	        var qty 		= $('#qty');
	        $('#product_addtocart_form .btn-plus').on("click", '.increase, .reduced', function(e){
	        	var qty = $(this).closest('.qty .control').find('#qty').val();
	        	qtySticky.val(qty);
	        });
	        $('.stickyCart .btn-plus').on("click", '.increase, .reduced', function(e){
	        	var qtySticky = $(this).closest('.clSticky').find('#qtySticky').val();
	        	qty.val(qtySticky);
	        });
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
