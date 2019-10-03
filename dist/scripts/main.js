(function () {
  'use strict';

  if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
    document
      .querySelector('html')
      .classList
      .add('is-ios');
  }

})();
    function dropdownRoomBtnNone() {
		$('#dropdown__btn-room_none').on('click',function () {
			$('.drobdown-room-none').toggleClass('oll-display-none');
        })
    }
    dropdownRoomBtnNone();
	function fmunusRoom() {
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
	fmunusRoom();
    var sumGuest1,
		sumGuest2,
		sumGuest3,
		ollSumGuest;
	function fminusGuest() {
        var minuGuest1 = 0;
		$('#btn-plus-guest-1').on('click',function () {
           minuGuest1 = minuGuest1+1;

           $('#guest-summ-1').html(minuGuest1);
        });
		$('#btn-minus-guest1').on('click',function () {
			minuGuest1 = minuGuest1-1;

			if (minuGuest1>0){
				$('#guest-summ-1').html(minuGuest1);
			}
			else  {
				minuGuest1=0;
				$('#guest-summ-1').html(minuGuest1);
			}
        });
		 var minuGuest2 = 0;
		$('#btn-plus-guest-2').on('click',function () {
           minuGuest2 = minuGuest2+1;

           $('#guest-summ-2').html(minuGuest2);
        });
		$('#btn-minus-guest2').on('click',function () {
			minuGuest2 = minuGuest2-1;

			if (minuGuest2>0){
				$('#guest-summ-2').html(minuGuest2);
			}
			else  {
				minuGuest2=0;
				$('#guest-summ-2').html(minuGuest2);
			}
        });
		 var minuGuest3 = 0;
		$('#btn-plus-guest-3').on('click',function () {
           minuGuest3 = minuGuest3+1;

           $('#guest-summ-3').html(minuGuest3);
        });
		$('#btn-minus-guest3').on('click',function () {
			minuGuest3 = minuGuest3-1;

			if (minuGuest3>0){
				$('#guest-summ-3').html(minuGuest3);
			}
			else  {
				minuGuest3=0;
				$('#guest-summ-3').html(minuGuest3);
			}
        });
		$('#apply').on('click',function () {
			$('#dropdown-guest__clear').toggleClass('oll-display-none');
			 sumGuest1 = $('#guest-summ-1').text();
			 sumGuest2 = $('#guest-summ-2').text();
			 sumGuest3 = $('#guest-summ-3').text();
			 ollSumGuest = +sumGuest1 + +sumGuest2 + +sumGuest3;
			 $('#guest-sum').html('гостей: ' + ollSumGuest);
        });
		$('#clear').on('click',function () {
			$('#dropdown-guest__clear').toggleClass('oll-display-none');
			sumGuest1 = 0;
			$('#guest-summ-1').html(sumGuest1);
			sumGuest2 = 0;
			$('#guest-summ-2').html(sumGuest2);
			sumGuest3 = 0;
			$('#guest-summ-3').html(sumGuest3);
			$('#guest-sum').html('Сколько гостей');
        });
    }
    fminusGuest();

	function dropdownGuestBtnNone() {
		$('#dropdown__btn-guest_none').on('click',function () {
			$('.drobdown-guest-none').toggleClass('oll-display-none');
        });
    };
    dropdownGuestBtnNone();
	function checkbox() {
		$('#checkbox-list-btn').on('click',function () {
           $('.checkbox__button-wrapper').toggleClass('checkbox-display-none');
            var src = ($('#checkbox-arrow').attr("src") === "assets/images/elements/dropdown-arrow.png")
                    ? "assets/images/elements/arrow-up.png"
                    : "assets/images/elements/dropdown-arrow.png";
      $('#checkbox-arrow').attr("src", src);
        });
    };
	checkbox();
	function toggle() {
		$('#toggle-btn-active').on('click',function () {
			$('.toggle-btn-wrapper_active').toggleClass('oll-display-none');
			$('.toggle-btn-wrapper_passive').toggleClass('oll-display-none');
        });
		$('#toggle-btn-passive').on('click',function () {
			$('.toggle-btn-wrapper_active').toggleClass('oll-display-none');
			$('.toggle-btn-wrapper_passive').toggleClass('oll-display-none');
        });
    };
	toggle();
	function like() {
		var iLike = 0;
		$('#like-btn-passive').on('click',function () {
			$('#like-btn-active').removeClass('oll-display-none');
			$('#like-btn-passive').addClass('oll-display-none');
			var likeSum = iLike+1;
			$('.like-btn__text').html(likeSum);
        });
    }
    like();
	function rate1() {
		$('#rate-btn__star1').on('click',function () {
			$(this).removeClass('fa-star-o');
			$(this).addClass('fa-star');
			$('#rate-btn__star2').removeClass('fa-star');
			$('#rate-btn__star2').addClass('fa-star-o');
			$('#rate-btn__star3').removeClass('fa-star');
			$('#rate-btn__star3').addClass('fa-star-o');
			$('#rate-btn__star4').removeClass('fa-star');
			$('#rate-btn__star4').addClass('fa-star-o');
			$('#rate-btn__star5').removeClass('fa-star');
			$('#rate-btn__star5').addClass('fa-star-o');
        });
    }
    rate1();
	function rate2() {
		$('#rate-btn__star2').on('click',function () {
			$(this).removeClass('fa-star-o');
			$(this).addClass('fa-star');
			$('#rate-btn__star1').removeClass('fa-star-o');
			$('#rate-btn__star1').addClass('fa-star');
			$('#rate-btn__star3').removeClass('fa-star');
			$('#rate-btn__star3').addClass('fa-star-o');
			$('#rate-btn__star4').removeClass('fa-star');
			$('#rate-btn__star4').addClass('fa-star-o');
			$('#rate-btn__star5').removeClass('fa-star');
			$('#rate-btn__star5').addClass('fa-star-o');
        });
    }
    rate2();
	function rate3() {
		$('#rate-btn__star3').on('click',function () {
			$(this).removeClass('fa-star-o');
			$(this).addClass('fa-star');
			$('#rate-btn__star1').removeClass('fa-star-o');
			$('#rate-btn__star1').addClass('fa-star');
			$('#rate-btn__star2').removeClass('fa-star-o');
			$('#rate-btn__star2').addClass('fa-star');
			$('#rate-btn__star4').removeClass('fa-star');
			$('#rate-btn__star4').addClass('fa-star-o');
			$('#rate-btn__star5').removeClass('fa-star');
			$('#rate-btn__star5').addClass('fa-star-o');
        });
    }
    rate3();
	function rate4() {
		$('#rate-btn__star4').on('click',function () {
			$(this).removeClass('fa-star-o');
			$(this).addClass('fa-star');
			$('#rate-btn__star1').removeClass('fa-star-o');
			$('#rate-btn__star1').addClass('fa-star');
			$('#rate-btn__star2').removeClass('fa-star-o');
			$('#rate-btn__star2').addClass('fa-star');
			$('#rate-btn__star3').removeClass('fa-star-o');
			$('#rate-btn__star3').addClass('fa-star');
			$('#rate-btn__star5').removeClass('fa-star');
			$('#rate-btn__star5').addClass('fa-star-o');
        });
    }
    rate4();
	function rate5() {
		$('#rate-btn__star5').on('click',function () {
			$(this).removeClass('fa-star-o');
			$(this).addClass('fa-star');
			$('#rate-btn__star1').removeClass('fa-star-o');
			$('#rate-btn__star1').addClass('fa-star');
			$('#rate-btn__star2').removeClass('fa-star-o');
			$('#rate-btn__star2').addClass('fa-star');
			$('#rate-btn__star3').removeClass('fa-star-o');
			$('#rate-btn__star3').addClass('fa-star');
			$('#rate-btn__star4').removeClass('fa-star-o');
			$('#rate-btn__star4').addClass('fa-star');
        });
    }
    rate5();



