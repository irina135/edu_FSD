
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
	function likeReview() {
		var iLike = 0;
		$('#like-btn-passive-review').on('click',function () {
			$('#like-btn-active-review').removeClass('oll-display-none');
			$('#like-btn-passive-review').addClass('oll-display-none');
			var likeSum = iLike+1;
			$('.like-btn__text1').html(likeSum);
        });
    }
    likeReview();
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



function moveRange (elem) {
        //Определяем размеры и координаты нашего ползунка
        var coords = getCoords(elem);

        /*Определяем зону окрашивания*/
        var colorRange = elem.parentElement.children[1];
        var f;//устанавливаем флаг для определения мин или макс элемента
        var value; //значение фильтра

        /*Определяем второй ползунок и родителя*/
        var parent = {}
        parent.element = elem.parentElement;
        parent.coords = getCoords(parent.element);

        var block2 = {}
        if (elem.classList.contains('range-slider__slider_min')) {
            block2.element = elem.parentElement.children[2];
            block2.coords = getCoords(block2.element);
            f = 0;
        } else {
            block2.element = elem.parentElement.children[0];
            block2.coords = getCoords(block2.element);
            f = 1;
        }

        /*Делаем индикатор вывода значений над ползунком*/
        var indicator = document.createElement('div');
        if (elem.children.length) {
            elem.innerHTML = '';//обнуляем предыдущее значение
        }
        elem.append(indicator);

        document.addEventListener('mousemove', onMouseMove);//определяем функцию-обработчик на событие движения мышью
        document.addEventListener('mouseup', onMouseUp);//определяем функцию-обработчик на событие отпускания кнопки мыши
        document.addEventListener('touchmove', onMouseMove);//здесь все тоже самое, только на касание пальцем
        document.addEventListener('touchend', onMouseUp);

        /*выключаем браузерное событие DaD*/
        elem.ondragstart = function () {
            return false;
        }

        function getCoords(elem) {
            /*Получаем координаты относительно окна браузера*/
            let coords = elem.getBoundingClientRect();
            /*Высчитываем значения координат относительно документа, вычисляя прокрутку документа*/
            return {//возвращает объект, который содержит:
                top: coords.top + window.pageYOffset, //верхнюю координату элемента относительно страницы
                left: coords.left + window.pageXOffset, //крайнюю левую координату элемента относительно страницы
                leftX: coords.left, //левую координату относительно страницы
                rigth: coords.left + window.pageXOffset + coords.width, //крайнюю правую координату
                bottom: coords.top + window.pageYOffset + coords.height, //нижнюю координату
                width: coords.width //ширину элемента
            }
        }

        function onMouseMove(e) {

            /*Определяем смещение влево*/
            e.preventDefault();//предотвратить запуск выделения элементов

            /*Определяем положение мыши в зависимости от устройства*/
            /*На мобильных устройствах может фиксироваться несколько точек касания, поэтому используется массив targetTouches*/
            /*Мы будем брать только первое зафиксированое касание по экрану targetTouches[0]*/
            if (e.touches === undefined) {
                var pos = e.clientX;
            } else {
                var pos = e.targetTouches[0].clientX;
            }

            /*Устанавливаем границы движения ползунка*/
            let newLeft = pos - parent.coords.leftX;
            let rigthEdge = parent.coords.width - (coords.width + 1);

            if (newLeft < 0) {
                newLeft = 0;
            } else if (newLeft > rigthEdge) {
                newLeft = rigthEdge;
            }
            if (f == 0 && pos > block2.coords.left - block2.coords.width) {
                newLeft = block2.coords.left - block2.coords.width - 5 - parent.coords.leftX;
            } else if (f == 1 && pos < block2.coords.rigth + 5) {
                newLeft = block2.coords.rigth + 5 - parent.coords.leftX;
            }
            /*устанавливаем отступ нашему элементу*/
            elem.style.left = newLeft + 'px';

            //     Определяем значение фильтра
            let rangeMin = +document.querySelector('.range-slider number:first-child').innerHTML;
            let rangeMax = +document.querySelector('.range-slider number:last-child').innerHTML;
            if (f == 0) {
                value = (newLeft / (parent.coords.width / (rangeMax - rangeMin)) + rangeMin).toFixed(1);
            } else {
                value = (newLeft / (parent.coords.width / (rangeMax - rangeMin)) + 0.3 + rangeMin).toFixed(1);
            }

            /*Выводим значение над ползунком*/
            indicator.style.position = 'absolute';
            indicator.style.fontSize = "12px";
            indicator.style.color = "@dark25";
            indicator.style.left = -coords.width / 2 + "px";
            indicator.style.top = parseFloat(window.getComputedStyle(elem).getPropertyValue('top')) - 20 + "px";

            /*Для красоты слайдера уберем вывод значений в начальной и конечной точках*/
            if (newLeft <= 0) {
                indicator.innerHTML = "";
            } else if (newLeft >= rigthEdge) {
                indicator.innerHTML = "";
            } else {
                indicator.innerHTML = value;
            }
            indicator.innerHTML = value +""+ "&#8381;";
            /*Делаем цветную плашечку диапазона выбора*/
            if (f == 0) {
                colorRange.style.left = newLeft + coords.width + "px";
                colorRange.style.width = block2.coords.left - getCoords(elem).left - coords.width + "px";
            } else {
                colorRange.style.left = block2.coords.left - parent.coords.leftX + "px";
                colorRange.style.width = getCoords(elem).left - block2.coords.left + "px";
            }
        }


    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('touchend', onMouseUp);
        document.removeEventListener('touchmove', onMouseMove);
    }}



