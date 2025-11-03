let items = [["Example", 4, "images/flashback5x.png", "an item"], ["Example2", 4, "images/flashback5x.png", "another item"], ["Example3", 4, "images/flashback5x.png", "another item"], ["Example4", 4, "images/flashback5x.png", "an item"]]; // name, price, image, desc
let list = document.getElementById("shop-items");
items.forEach((item) => {
	let div = document.createElement("div");
	let img = document.createElement("img");
	img.src = item[2];
	img.alt = item[0];
	let content = document.createElement("div");
	let title = document.createElement("h3");
	title.innerText = item[0];
	let desc = document.createElement("p");
	desc.innerText = item[3];
	content.appendChild(title);
	content.appendChild(desc);
	content.appendChild(img);
	content.className = "shopitem";
	div.appendChild(content);
	list.appendChild(div);
});
