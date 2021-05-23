let tags2 = document.querySelector(".tags2");

// Вывести библиотеку, создать новый спан, внутри написать title из библиотеки, добавить класс tag для общей стилизации, можно так же добавить каждому свой уникальный класс на примере data-tag. ниже добавляем атрибут data-tag со значениями Object.keys(tags)[i](rock, electro и тд) и последнее помещаем внутрь tags2 наши спаны.
for(let i = 0; i < Object.keys(tags).length; i++) {
	console.log(Object.keys(tags)[i]);
	let newSpan = document.createElement("span");
	newSpan.innerHTML = tags[Object.keys(tags)[i]]["title"];
	newSpan.classList.add("tag");
	newSpan.setAttribute("data-tag", Object.keys(tags)[i]);
	tags2.appendChild(newSpan);

	//Как получить длину массива
	console.log(Object(tags[Object.keys(tags)[i]]["links"]).length)

	// Меняет отступы и размер шрифта, в зависимости от длины массива
    newSpan.style.fontSize = `${12 + (Object(tags[Object.keys(tags)[i]]["links"]).length*0.4)}px`;
    newSpan.style.padding = `${5 + (Object(tags[Object.keys(tags)[i]]["links"]).length*0.2)}px`;

}

let buttonTags2 = document.querySelectorAll(".tag");

buttonTags2.forEach(function(element) {
	element.onclick = showLink;
});

//тут все так же как было, ничего не менял.
function showLink() {
	let tagDate = this.dataset.tag;
	for(let i = 0; i < Object.keys(tags).length; i++) {
		if (Object.keys(tags)[i] == tagDate) {
			let arLinks = Object(tags[Object.keys(tags)[i]]["links"]);
			var randomLink = arLinks[Math.floor(Math.random()*arLinks.length)];
			console.log(randomLink);

            window.open(randomLink, "_self"); // открыть в том же окне, если в новом тогда "_self" меняем на "_blank", путь ссылки должен быть полный, меняется в файле tags.js

		}
	};
};
