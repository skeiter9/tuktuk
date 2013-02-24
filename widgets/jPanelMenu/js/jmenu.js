(function($){
	$.jmenu=function(options){
		var jp ={
			options: $.extend({
				menu: 'menu-mobile',
				animated : true 
			},options),
			
			name : "ola k ase"
		}
		return jp ;
	};
})(jQuery);

$(document).on('ready',function(){
	console.log($.jmenu().name);
});