var textDiv1 = document.getElementById('firstdiv')
var textDiv2 = document.getElementById('seconddiv')
var textDiv3 = document.getElementById('thirddiv')
var textDiv4 = document.getElementById('fourthdiv')
function makeTextArea(element, maker, blur){
	// console.log(kiddo)
	var boxHeight = getHeight(element).toString()
	element.innerHTML = '<textArea id = "killme">'+element.textContent.trim()+'</textArea>'
	var kiddo = document.getElementById('killme')
	// console.log(boxHeight)

	kiddo.style.height = boxHeight+'px'
	// console.log(kiddo.style.height)
	// console.log('uh')
	element.removeEventListener('click',maker)
	// $('#first').on('blur', makeBlur)
	kiddo.addEventListener('blur',blur)

	}
function serveElement1(){
	makeTextArea(textDiv1,serveElement1,blur1)
}
function serveElement2(){
	makeTextArea(textDiv2,serveElement2,blur2)
}
function serveElement3(){
	makeTextArea(textDiv3,serveElement3,blur3)
}
function serveElement4(){
	makeTextArea(textDiv4,serveElement4,blur4)
}
function makeBlur(element){
	element.innerHTML = '<p>'+document.getElementById('killme').value+'</p>'
	// console.log('what')
}
function blur1(){
	makeBlur(textDiv1)
	textDiv1.addEventListener('click',serveElement1)
}
function blur2(){
	makeBlur(textDiv2)
	textDiv2.addEventListener('click',serveElement2)
}
function blur3(){
	makeBlur(textDiv3)
	textDiv3.addEventListener('click',serveElement3)
}
function blur4(){
	makeBlur(textDiv4)
	textDiv4.addEventListener('click',serveElement4)
}
textDiv1.addEventListener('click',serveElement1)
textDiv2.addEventListener('click',serveElement2)
textDiv3.addEventListener('click',serveElement3)
textDiv4.addEventListener('click',serveElement4)

function getHeight(element){
	// console.log(element.scrollHeight)
	return element.scrollHeight
}
