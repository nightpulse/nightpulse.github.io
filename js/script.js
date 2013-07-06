var validate;

$(function() {

	
	
	$('form *').each(function() {
	
	       var default_value = this.value;
	
	       $(this).focus(function(){
	               if(this.value == default_value) {
	                       this.value = '';
	               }
	       });
	
	       $(this).blur(function(){
	               if(this.value == '') {
	                       this.value = default_value;
	               }
	       });
	
	});
	
	/* $(function(){ $("select").uniform(); }); */
	
	
/*
	$('form').submit(function(e){
		e.preventDefault();
		validate();
	})
	
*/
	/*
function validate(){
		if($('#emailinput').val()!="Email" && $('#emailinput').val()!=""){
			$('#emailinput').removeClass('isrequired');
			
			//insert regex
			
			$('#suForm').animate({
				'margin-left': '-100%'
				},600, function(){
				
					$('#thanks').text('thanks!');
					$('#thanks').animate({
						'width': 855
					},600, function(){
						
						var hidethanks = setTimeout(function(){
							
							$('#suWrapper').animate({
								'height': 20
							},900)
							$('#thanks').animate({
								'height': 0
							},600, function(){
								$('#thanks').hide();	
							})
						},1000)
						
					});
					
				});
			
		}else{
			$('#emailinput').addClass('isrequired');
		}
	}
*/
	
	
})

