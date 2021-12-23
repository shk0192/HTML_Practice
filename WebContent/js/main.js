var opacity = 0;
var timer;

function opacityOn1() {
	if (opacity<1) {
		opacity += .2;
		timer = setTimeout(function(){opacityOn1()},100);
	}
	document.getElementById('img1').style.opacity = opacity;
}

function opacityOut1(){
	clearTimeout(timer);
	opacity = 0;
	document.getElementById('img1').style.opacity = opacity;
}

function opacityOn2() {
	if (opacity<1) {
		opacity += .2;
		timer = setTimeout(function(){opacityOn2()},100);
	}
	document.getElementById('img2').style.opacity = opacity;
}

function opacityOut2(){
	clearTimeout(timer);
	opacity = 0;
	document.getElementById('img2').style.opacity = opacity;
}

function opacityOn3() {
	if (opacity<1) {
		opacity += .2;
		timer = setTimeout(function(){opacityOn3()},100);
	}
	document.getElementById('img3').style.opacity = opacity;
}

function opacityOut3(){
	clearTimeout(timer);
	opacity = 0;
	document.getElementById('img3').style.opacity = opacity;
}

function opacityOn4() {
	if (opacity<1) {
		opacity += .2;
		timer = setTimeout(function(){opacityOn4()},100);
	}
	document.getElementById('img4').style.opacity = opacity;
}

function opacityOut4(){
	clearTimeout(timer);
	opacity = 0;
	document.getElementById('img4').style.opacity = opacity;
}

function opacityOn5() {
	if (opacity<1) {
		opacity += .2;
		timer = setTimeout(function(){opacityOn5()},100);
	}
	document.getElementById('img5').style.opacity = opacity;
}

function opacityOut5(){
	clearTimeout(timer);
	opacity = 0;
	document.getElementById('img5').style.opacity = opacity;
}

function opacityOn6() {
	if (opacity<1) {
		opacity += .2;
		timer = setTimeout(function(){opacityOn6()},100);
	}
	document.getElementById('img6').style.opacity = opacity;
}

function opacityOut6(){
	clearTimeout(timer);
	opacity = 0;
	document.getElementById('img6').style.opacity = opacity;
}

function opacityOn7() {
	if (opacity<1) {
		opacity += .2;
		timer = setTimeout(function(){opacityOn7()},100);
	}
	document.getElementById('img7').style.opacity = opacity;
}

function opacityOut7(){
	clearTimeout(timer);
	opacity = 0;
	document.getElementById('img7').style.opacity = opacity;
}