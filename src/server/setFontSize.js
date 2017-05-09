function setFontSize(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/37.5 + 'px';
	if(document.documentElement.clientWidth > 801){
		document.documentElement.style.fontSize = 12 + 'px'
	}
}

	document.addEventListener('DOMContentLoaded',setFontSize, false);
	window.onresize = setFontSize;
