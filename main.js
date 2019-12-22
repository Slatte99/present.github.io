var btn = document.querySelector('.test');
btn.addEventListener('click', function(){
	result = prompt('Любишь Фрукты?','');
	if (result =='Да'|| result=='да'|| result=='ДА') {
		alert("Красава")
	}
	else{
		alert("Вот ты ЧМО")
	}
});
var popup = document.querySelectorAll('.popup'),
close = document.querySelectorAll('.close'),
push = document.querySelectorAll('.open');

 push.forEach(function(e){
 	e.addEventListener('click',function(){
 		var popupName = e.getAttribute('data-popup')
 		document.getElementById(popupName).style.display = "block";
 	})
 })
 close.forEach(function(e){
	e.addEventListener('click',function(){
	var popups = e.closest('.popup')
	popups.style.display = "none";
})
	})

window.onclick = function(e){
	if (e.target.classList.contains('popup')) {
		e.target.style.display = "none";
	}
}
 


var decCache = [],
	decCases = [2, 0, 1, 1, 1, 2];

function decOfNum(number, titles) {
	
	 decCache[number] = (number % 100 > 4 && number % 100 < 20) ? 2 : decCases[Math.min(number % 10, 5)];
	return titles[decCache[number]];
}

function timerLeft(year,month,day) {
	setInterval(function(){
var	hoursNumber = document.getElementById('timer-hours'),
minutesNumber = document.getElementById('timer-minutes'),
secondsNumber = document.getElementById('timer-seconds'),
hoursText = document.getElementById('timer-hours-text'),
minutesText = document.getElementById('timer-minutes-text'),
secondsText = document.getElementById('timer-seconds-text'),
dateNow =  new Date(),
dateFinish = new Date(year,month,day),
sec = Math.floor((dateFinish - dateNow) / 1000),
secToMin = sec % 3600,
hoursT = Math.floor(sec/3600),
minutesT = Math.floor(secToMin/60),
secondsT = secToMin % 60;
hoursNumber.innerHTML = hoursT;
minutesNumber.innerHTML = minutesT;
secondsNumber.innerHTML = secondsT;
hoursText.innerHTML = decOfNum(hoursT,['Час','Часа','Часов']);
minutesText.innerHTML = decOfNum(minutesT,['Минута','Минуты','Минут'] );
secondsText.innerHTML = decOfNum(secondsT,['Секунда','Секунды','Секунд'] );
})
}
timerLeft(2019,3,23);
 

var left = 0;
var timer2;
document.getElementById('slideleft').onclick = slideLeft;


function slideLeft(){
	var line = document.querySelector('.line');
	left = left - 600;
	if ( left< -2400) {
		left = 0;
	}
	line.style.left = left + 'px';
	clearTimeout(timer2);
	autoSlide();
}
// function slideRight(){
// 	var line = document.querySelector('.line');
// 	right = right - 600;
// 	if ( right< -2400) {
// 		right = 0;
// 	}
// 	line.style.right = right + 'px';
// 	clearTimeout(timer2);
// 	autoSlide();
// }
function autoSlide(){
	timer2 = setTimeout(function(){
		var line = document.querySelector('.line');
	left = left - 600;
	if ( left< -2400) {
		left = 0;
		clearTimeout(timer2);
	}
	line.style.left = left + 'px';
	autoSlide();
	},2000)
}
autoSlide();


















































 // var coco = document.querySelector('.coco'),
 //  timer = document.querySelector('.timer');
 //  coco.addEventListener('click', function(){
 //  	timer.style.display = "block";
 //  	timer.classList.add('zoomz');
 //  })
































//  var left = 0;
//  var timer2;

// document.getElementById('slideleft').onclick = sliderLeft;
// function sliderLeft(){
// 	var line = document.querySelector('.line');
// 	left = left - 600;
// 	if (left<-2400) {
// 		left = 0;
// 	}
// 	line.style.left = left + 'px';
// }









































































































