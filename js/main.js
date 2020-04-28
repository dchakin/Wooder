const btn = document.querySelector("[data-furniture-btn]")
const psevdo = document.querySelector("[data-psevdo]")

btn.addEventListener('mouseenter', psvdAfter)

function psvdAfter() {
	console.log('hover', psevdo);
	psevdo.style.setProperty('--after', '50px');
}

btn.addEventListener('mouseleave', function(){
	console.log('mousedown', psevdo);
	psevdo.style.setProperty('--after', '0px');
})


const btn2 = document.querySelector("[data-decor-btn]")
const psevdo2 = document.querySelector("[data-psevdo2]")


btn2.addEventListener('mouseenter', psvdAfter2)

function psvdAfter2() {
	console.log('hover', psevdo);
	psevdo2.style.setProperty('--after', '175px');
}

btn2.addEventListener('mouseleave', function(){
	console.log('mousedown', psevdo2);
	psevdo2.style.setProperty('--after', '125px');
})


const aboutBtn = document.querySelector("[data-about-btn]");
const aboutPsevdo = document.querySelector("[data-about-psevdo]")

aboutBtn.addEventListener('mouseenter',function(){
	aboutPsevdo.style.setProperty('--after', '50px');

})

aboutBtn.addEventListener('mouseleave', function(){
	aboutPsevdo.style.setProperty('--after', '0px')
})