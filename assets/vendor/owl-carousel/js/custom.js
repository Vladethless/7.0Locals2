const breakpoint = {
	// Small screen / phone
	sm: 576,
	// Medium screen / tablet
	md: 768,
	// Large screen / desktop
	lg: 992,
	// Extra large screen / wide desktop
	xl: 1200,
};

$( '#slick2' ).slick( {
	autoplay: true,
	autoplaySpeed: 2000,
	draggable: true,
	infinite: true,
	dots: false,
	nextArrow: $( '.next' ),
	prevArrow: $( '.prev' ),
	speed: 1000,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,

	responsive: [
		{
			breakpoint: breakpoint.sm,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: breakpoint.md,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: breakpoint.lg,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: breakpoint.xl,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
	],
} );

$( '#slick3' ).slick( {
	autoplay: true,
	autoplaySpeed: 2000,
	draggable: true,
	infinite: true,
	dots: false,
	nextArrow: $( '.next' ),
	prevArrow: $( '.prev' ),
	speed: 1000,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,

	responsive: [
		{
			breakpoint: breakpoint.sm,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: breakpoint.md,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: breakpoint.lg,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: breakpoint.xl,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
	],
} );
