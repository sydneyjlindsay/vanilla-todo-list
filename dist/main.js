var listArray = [];

function toDoList() {

	var textBox = document.getElementById('newItem');
	var list = document.getElementById('list');
	var addButton = document.getElementById('btnAdd');

	addButton.addEventListener("click", addItem);
	newItem.addEventListener("keyup", addItemReturn);

	function addItem() {
		if(textBox.value !== '') {
			var listElement = document.createElement('li');
			listElement.innerText = textBox.value; 
			list.appendChild(listElement);
			
			listArray.push(textBox.value);
			console.log(listArray, textBox.value);
			
			textBox.value = "";
			textBox.focus();
		}
		
	}

	function addItemReturn() {
		if(event.keyCode === 13 && textBox.value !== '') {
			var listElement = document.createElement('li');
			listElement.innerText = textBox.value; 
			list.appendChild(listElement);

			listArray.push(textBox.value);
			console.log(listArray, textBox.value);

			textBox.value = "";
		}
	}
}

toDoList();


function render() {
    document.getElementById('list').innerHTML = "";
    var listString = '<div>'+listArray.join('</div> <div>')+'</div>';
    document.getElementById('list').innerHTML = listString;
}



