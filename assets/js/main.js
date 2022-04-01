/*
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 Khadamat HTML Template
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

	- File           : main.js
	- Desc           : Template - JavaScript
	- Date           : 10/10/2020
	- Author         : OTOD
	- Author URI     : https://themeforest.net/user/otod
	- Email          : info@otod.io

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

var KappTemplate = function () {
	var instance = this;

	/**
	 * ---------------------------------------------------------------------
	 * Initialize all necessary sliders
	 * ---------------------------------------------------------------------
	 */
	this.slidersInit = function () {
		var nextBtn =
			'<button type="button" class="slider-next-btn"><span><i class="lnr lnr-chevron-right"></i></span></button>';
		var prevBtn =
			'<button type="button" class="slider-prev-btn"><span><i class="lnr lnr-chevron-left"></i></span></button>';
		var responsiveness = [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1
				}
			}
		];

		$( '.slick-slider' ).slick( {
			arrows: false,
			speed: 700,
			autoplay: true,
			dots: false,
			nextArrow: nextBtn,
			prevArrow: prevBtn,
			responsive: responsiveness
		} );
	};

	/**
	 * ---------------------------------------------------------------------
	 * Counters
	 * ---------------------------------------------------------------------
	 */

	this.initCounters = function () {
		var $counters = $( '.counter-num' );

		$counters.each( function () {
			var $this = $( this );

			if ( !$( this ).hasClass( 'counted' ) ) {
				$this.appear( function () {
					var countValue = parseInt( $this.html(), 10 );
					var countSpeed = parseInt(
						$this.attr( 'data-speed' ),
						10
					);

					// So we don't animate a counted element
					$( this ).addClass( 'counted' );

					if ( Number.isNaN( countValue ) ) {
						return;
					}
					if ( Number.isNaN( countSpeed ) ) {
						countSpeed = 3000;
					}

					// Animate counter
					$( {
						countNum: 0
					} ).animate(
						{
							countNum: countValue
						},
						{
							duration: countSpeed,
							easing: 'linear',
							step() {
								$this.text(
									Math.floor( this.countNum )
								);
							},
							complete() {
								$this.text( this.countNum );
							}
						}
					);
				} );
			}
		} );
	};

	/**
	 * ---------------------------------------------------------------------
	 * Custom slider dots
	 * ---------------------------------------------------------------------
	 */
	this.customSliderDots = function () {
		var $dotsContainer = $( '.slick-slider-dots' );
		var $slider = $( $dotsContainer.attr( 'data-target' ) );
		var $activeDot = function () {
			return $dotsContainer.find( 'a.active' );
		};

		if ( $dotsContainer.length === 0 || $slider.length === 0 ) return;

		$dotsContainer.find( 'a' ).on( 'click', function ( e ) {
			e.preventDefault();
			$slider.slick( 'slickGoTo', $( this ).attr( 'data-id' ) );
			$activeDot().removeClass( 'active' );

			$( this ).addClass( 'active' );
		} );

		// Sync when sliding
		$slider.on( 'beforeChange', function (
			event,
			slick,
			currentSlide,
			nextSlide
		) {
			$activeDot().removeClass( 'active' );
			$dotsContainer
				.find( `a[data-id="${nextSlide}"]` )
				.addClass( 'active' );
		} );
	};

	/**
	 * ---------------------------------------------------------------------
	 * Custom slider navigation
	 * ---------------------------------------------------------------------
	 */
	this.customSliderNav = function () {
		var $btn = $( '.slick-nav-btn' );
		var $slider = null;

		if ( $btn.length > 0 ) {
			$btn.on( 'click', function ( e ) {
				e.preventDefault();

				$slider = $( $( this ).attr( 'data-slick-target' ) );

				$slider.slick( $( this ).attr( 'data-slick-trigger' ) );
			} );
		}
	};

	/**
	 * ---------------------------------------------------------------------
	 * Star rating init
	 * ---------------------------------------------------------------------
	 */
	this.starRatingInit = function () {
		var $ratingContainer = $( '.star-rating [data-rating]' );
		var rating = parseFloat( $ratingContainer.attr( 'data-rating' ), 10 );

		if ( $ratingContainer.length > 0 ) {
			$ratingContainer.css( 'width', `${( rating / 5 ) * 100}%` );
		}
	};

	/**
	 * ---------------------------------------------------------------------
	 * Process bg images in attributes
	 * ---------------------------------------------------------------------
	 */
	this.dataAttrBgImage = function () {
		var $items = $( '[data-bg-image]' );
		$.each( $items, function ( index, item ) {
			$( item ).css( {
				backgroundImage: `url("${$( item ).attr( 'data-bg-image' )}")`
			} );
		} );
	};

	/**
	 * ---------------------------------------------------------------------
	 * Preloading effect
	 * ---------------------------------------------------------------------
	 */
	this.removePreloader = function () {
		var $preloadContainer = $( '.preloader' );
		setTimeout( function () {
			$preloadContainer.fadeOut( 600, function () {
				$( this ).remove();
			} );
		}, 300 );
	};

	/**
	 * ---------------------------------------------------------------------
	 * navbar search form
	 * ---------------------------------------------------------------------
	 */

	this.navSearchForm = function () {
		$( '.search-btn' ).on( 'click', function () {
			$( '.in-header-search-form' ).toggleClass( 'show-form' );
		} );
		$( '.search-btn-v-01' ).on( 'click', function () {
			$( '.in-header-search-form' ).toggleClass( 'show-form' );
		} );

		$( '.close-btn' ).on( 'click', function () {
			$( '.in-header-search-form' ).removeClass( 'show-form' );
		} );
	};

	/**
	 * ---------------------------------------------------------------------
	 * Initialize Mixitup
	 * ---------------------------------------------------------------------
	 */
	this.mixItInit = function () {
		if ( $( '.mixit' ).length > 0 ) {
			mixitup( $( '.mixit' ), {
				selectors: {
					target: '.item'
				},
				animation: {
					duration: 300
				},
				classNames: {
					block: 'filter-btn'
				}
			} );
		}
	};

	/**
	 * ---------------------------------------------------------------------
	 * Office switch control
	 * ---------------------------------------------------------------------
	 */
	this.officeSwitchInit = function () {
		var $activeOption = function () {
			return $( '.office-dropdown .active' );
		};

		var $options = function () {
			return $( '.office-dropdown li a' );
		};

		$options().on( 'click', function ( e ) {
			var $dropdown = $( this ).parents( '.office-dropdown' );

			if ( $( this ).attr( 'href' ) === '#' ) {
				e.preventDefault();
			}

			if ( !$dropdown.is( 'shown' ) ) {
				$dropdown.toggleClass( 'shown' );
			}
			if ( !$( this ).parent().is( '.active' ) ) {
				$activeOption().removeClass( 'active' );
				$( this ).parent().addClass( 'active' );
			}
		} );
	};

	/**
	 * ---------------------------------------------------------------------
	 * Window onresize event
	 * ---------------------------------------------------------------------
	 */

	this.onWindowResize = function () {
		setTimeout( instance.dataAttrBgImage, 200 );
	};
};

( function ( $ ) {
	var template = new KappTemplate();

	$( window ).on( 'load', function () {
		template.removePreloader(); // Preload effect. This can be removed
	} );

	$( document ).ready( function () {
		template.navSearchForm();
		template.slidersInit();
		template.mixItInit();
		template.dataAttrBgImage();
		template.customSliderDots();
		template.customSliderNav();
		template.officeSwitchInit();
		template.initCounters();
		template.starRatingInit();

		$( window ).on( 'resize', template.onWindowResize );

		$( '.navbar-nav li a[href="#"]' ).on( 'click', function ( e ) {
			e.preventDefault();
		} );

		// Fancybox
		$( '[data-fancybox="images"]' ).fancybox( {
			animationEffect: 'fade',
			animationDuration: 1000
		} );
	} );
} )( jQuery );
