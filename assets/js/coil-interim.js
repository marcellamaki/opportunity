$(window).on("load", function() {
	// waypoint - mission
	var mission = new Waypoint({
		element: document.getElementById('mission'),
		handler: function(direction) {
			anime({
				targets: ["#mission", '#mission img'],
				easing: 'easeOutExpo',
				translateY: [-100, 0],
				opacity: [0, 1],
				delay: anime.stagger(200, {start: 100}),
			})
		},
		offset: '100%',
	})

	var skills = new Waypoint({
		element: document.getElementById('skills'),
		handler: function(direction) {
			anime({
				targets: [".skill"],
				easing: 'linear',
				opacity: [0,1],
				delay: anime.stagger(200),
			})
		},
		offset: '60%',
	})

	var programs = new Waypoint({
		element: document.getElementById('programs'),
		handler: function(direction) {
			console.log('it works');
			anime({
				targets: [".program"],
				easing: 'linear',
				opacity: [0,1],
				delay: anime.stagger(500),
			})
		},
		offset: '60%',
	})

	// nav bar on scroll
	$(document).on("scroll", function() {
		if ($(window).width() > 640) {
			var $nav = $(".usa-nav a");
			$nav.toggleClass('scrolled', $(this).scrollTop() >$nav.height());
		}

	});


	// hero image change
	if($(window).width() < 481){
         var images = [
				  "/assets/img/coil-hero-mobile.png",
				  "/assets/img/coil-hero-02-mobile.png",
				  "/assets/img/coil-hero-03-mobile.png"
				]

		var hero = document.getElementById('hero');
		var i = 0;
		setInterval(function() {
	      hero.style.backgroundImage = "url(" + images[i] + ")";
	      i = i + 1;
	      if (i == images.length) {
	        i =  0;
		      }
		}, 2000);
   }

   else {
   		var images = [
				  "/assets/img/coil-hero-01.png",
				  "/assets/img/coil-hero-02.png",
				  "/assets/img/coil-hero-03.png",
				]

		var hero = document.getElementById('hero');
		var i = 0;
		setInterval(function() {
	      hero.style.backgroundImage = "url(" + images[i] + ")";
	      i = i + 1;
	      if (i == images.length) {
	        i =  0;
		      }
		}, 2500);
   }


})
