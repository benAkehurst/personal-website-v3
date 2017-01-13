(function(){

	"use strict";

	$(function(){

		$("#aAboutMe").on("click", function( e ) {

		    e.preventDefault();

		    $("body, html").animate({ 
		      scrollTop: $( $(this).attr('href') ).offset().top 
		    }, 500);

		});

		$("#aProjects").on("click", function( e ) {

		    e.preventDefault();

		    $("body, html").animate({ 
		      scrollTop: $( $(this).attr('href') ).offset().top 
		    }, 500);

		});

		$("#aContact").on("click", function( e ) {

		    e.preventDefault();

		    $("body, html").animate({ 
		      scrollTop: $( $(this).attr('href') ).offset().top 
		    }, 500);

		});

		$("#lookBelow").on("click", function( e ) {

		    e.preventDefault();

		    $("body, html").animate({ 
		      scrollTop: $( $(this).attr('href') ).offset().top 
		    }, 500);

		});

		$("#contactMail").click(function(){
			sendEmailToBen();
		});

	}); //End of jQuery Self Invoked

	//Functions

function sendEmailToBen(){
	window.open('mailto:hi@benakehurst.online?subject=Hi Ben!');
}

})(); //End of JavaScript Self Invoked
