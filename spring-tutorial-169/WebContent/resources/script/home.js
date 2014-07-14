/**
 *  Javascript for the home jsp
 */
	function updateMessageLink(data) {
		$("#numberMessages").text(data.number);
	}

	function onLoad() {
		updatePage();
		window.setInterval(updatePage, 5000);
	}
	
	function updatePage() {
		$.getJSON("<c:url value='/getmessages'/>", updateMessageLink);
	}

	$(document).ready(onLoad);