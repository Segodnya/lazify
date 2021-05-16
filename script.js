let buttonTags = document.querySelectorAll(".tag");

// Добавляет и убирает класс .active к выбранному тегу
buttonTags.forEach(function(element) {
	element.onclick = addActive; // перебирает все теги и ждет клика, как ток будет клик по одному из элементов сразу начнет выполняться функция addActive
});

function addActive() { // функция которая перебирает все теги, и сначала удаляет у каждого тега класс active, затем добавляет active тегу по которому кликнули.
	buttonTags.forEach(function(element) { // тут убирает
		element.classList.remove("active");
	});
	this.classList.add("active"); // тут добавляет
}
//конец.


//ниже по клику выполняем функцию showLink, описание ниже.
buttonTags.forEach(function(element) {
	element.onclick = showLink;
});

//showLink - выполняет то что мы задумывали, далее каждую строчку подробнее.
function showLink() {
	let tagDate = this.dataset.tag; //tagDate - получает data-tag тега по которму мы кликнули.

	// console.log(tagDate)

	// console.log(Object.keys(tags))

	// перебираем наш объект tags, который мы формируем в файле tags.js . 
	for(let i = 0; i < Object.keys(tags).length; i++) {
		//ниже "Если tags[i] ровно data-tag нашей кнопки, тогда выполняем следующее... (что такое tags[i] можно понять если раскоментить console.log(Object.keys(tags)) "
		if (Object.keys(tags)[i] == tagDate) {
			let arLinks = Object(tags[Object.keys(tags)[i]]["links"]);
			// тут получаю массив ссылок из объекта, на самом деле эту строку получил методом тыка, сначала было просто Object.keys(tags)[i], но мы только Объект рока например, потом можно было еще раз полученный результат обернуть объектом, но я сделал все в 1 строке
			// console.log(arLinks);
			var randomLink = arLinks[Math.floor(Math.random()*arLinks.length)]; // выбирает 1 элемент из всего массива.
			console.log(randomLink); // позакать в консоли

			window.open(randomLink, "_self"); // открыть в том же окне, если в новом тогда "_self" меняем на "_blank", путь ссылки должен быть полный, меняется в файле tags.js
		}
	};
};
