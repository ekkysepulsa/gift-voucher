$(document).ready(function(){
	//yapulsa js
	$( ".btn-redeem" ).keypress(function() {
		$( ".operator" ).removeClass( "hidden" );
		$( ".topup-nominal" ).removeClass( "hidden" );
	});
	$( ".btn-redeem" ).click(function() {
		$( ".redeem" ).hide();
		$( ".snk-redeem" ).hide();
    	$( ".success-redeem" ).fadeIn( "slow" );

        return false;
    });
});