var yourName = document.querySelector('h2')
var food = document.querySelector('.food p')
var hobby = document.querySelector('.hobby p')
var like = document.querySelector('.like p')
var dislike = document.querySelector('.dislike p')

function makeInput(text){
	// input.style.height = getHeight(text)+'px'
	return function() {
		// console.log(text)
		var type = text.tagName
		// console.log(type)
		text.removeEventListener('click',makeInput(text))
		// var boxHeight = getHeight(text)
		text.innerHTML = '<input type = \'text\' name = \''+text+'Input\'></input>'
		document.querySelector('input').focus()
		if (type == 'H2') {
			document.querySelector('input').addEventListener('blur',function(){makeBlurName(text)})
		}
		else{
			document.querySelector('input').addEventListener('blur', function(){makeBlurP(text)})
		}

	}

}
function makeBlurP(text){
	text.innerHTML = '<p>'+(document.querySelector('input').value || 'Edit...')+'</p>'
	text.addEventListener('click',function(){makeInput(text)})
}
function makeBlurName(text){
	text.innerHTML = '<h2>'+(document.querySelector('input').value || 'Name...')+'</h2>'
	text.addEventListener('click',function(){makeInput(text)})
}
// function serveName(){
// 	makeInput(yourName, nameInput)
// }
// console.log(yourName)
// console.log(nameInput)
console.log(food)
yourName.addEventListener('click', makeInput(yourName))
food.addEventListener('click', makeInput(food))
hobby.addEventListener('click', makeInput(hobby))
like.addEventListener('click', makeInput(like))
dislike.addEventListener('click', makeInput(dislike))
function getHeight(element){
	// console.log(element.scrollHeight)
	return element.scrollHeight
}
