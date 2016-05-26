var yourName = document.getElementById('name')
var food = document.querySelector('p.food')
var hobby = document.querySelector('p.hobby')
var like = document.querySelector('p.like')
var dislike = document.querySelector('p.dislike')
// var nameInput = document.getElementsByName('nameInput')
// var foodInput = document.getElementsByName('foodInput')
// var hobbyInput = document.getElementsByName('hobbyInput')
// var likeInput = document.getElementsByName('likeInput')
// var dislikeInput = document.getElementsByName('dislikeInput')
function makeInput(text){
	// console.log(input)
	text.removeEventListener('click',function(){makeInput(text)})
	// var boxHeight = getHeight(text)
	text.innerHTML = '<input type = \'text\' name = \''+text+'Input\'></input>'
	document.querySelector('input').addEventListener('blur', function(){makeBlur(text)})

	// input.style.height = getHeight(text)+'px'

}
// function serveName(){
// 	makeInput(yourName, nameInput)
// }
// console.log(yourName)
// console.log(nameInput)
yourName.addEventListener('click',function(){makeInput(yourName)})
function getHeight(element){
	// console.log(element.scrollHeight)
	return element.scrollHeight
}
