/**
* Listens for keypresses on the page.
* 
* If the user presses the left arrow, it sets the manga to the previous chapter.
*
* If the user presses the right arrow, it sets the manga to the next chapter.
*/
document.addEventListener("keydown", function(event) {
	var key = event.keyCode ? event.keyCode : event.which;

	/**
	* Finds the button that leads to the previous chapter.
	* Accesses its parent, which contains the link and sets it
	*/
	if (key === 37) {
		var btnPrevious = document.getElementsByClassName("btnPrevious")[0];
		location.href = btnPrevious.parentNode.href;
	}
	/**
	* Same as above except for the next chapter
	*/
	else if (key === 39) {
		var btnNext = document.getElementsByClassName("btnNext")[0];
		location.href = btnNext.parentNode.href;
	}
});
