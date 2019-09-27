(function () {
  'use strict';

  if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
    document
      .querySelector('html')
      .classList
      .add('is-ios');
  }

})();
	function fmunus1() {
		var munus1=0;
		$('#btn-plus-room-1').on('click',function () {
			munus1=munus1+1;
			$('#room-summ-1').html(munus1);
			$('#bedroom').html(munus1);
        });
		$('#btn-minus-room-1').on('click',function () {
			munus1=munus1-1;
			if (munus1>0){
				$('#room-summ-1').html(munus1);
			}
			else {
				munus1=0;
				$('#room-summ-1').html(munus1);
			}
			$('#bedroom').html(munus1);
        });
		var munus2=0;
		$('#btn-plus-room-2').on('click',function () {
			munus2=munus2+1;
			$('#room-summ-2').html(munus2);
			$('#bed').html(munus2);
        });
		$('#btn-minus-room-2').on('click',function () {
			munus2=munus2-1;
			if (munus2>0){
				$('#room-summ-2').html(munus2);
			}
			else {
				munus2=0;
				$('#room-summ-2').html(munus2);
			}
			$('#bed').html(munus2);
        });
		var munus3=0;
		$('#btn-plus-room-3').on('click',function () {
			munus3=munus3+1;
			$('#room-summ-3').html(munus3);
			$('#bathroom').html(munus3);
        });
		$('#btn-minus-room-3').on('click',function () {
			munus3=munus3-1;
			if (munus3>0){
				$('#room-summ-3').html(munus3);
			}
			else {
				munus3=0;
				$('#room-summ-3').html(munus3);
			}
			$('#bathroom').html(munus3);
        });
    };
	fmunus1();
	function checkbox() {
		$('#checkbox-btn').on('click',function () {
           $('.checkbox__button-wrapper').toggleClass('checkbox-display-none ');
            var src = ($('#checkbox-arrow').attr("src") === "assets/images/elements/dropdown-arrow.png")
                    ? "assets/images/elements/arrow-up.png"
                    : "assets/images/elements/dropdown-arrow.png";
      $('#checkbox-arrow').attr("src", src);
        });
    };
	checkbox();

