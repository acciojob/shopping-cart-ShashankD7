let arr = [];
let count = 0;
let total = 0;
function addItem() {
    console.log("clicked")
	count++;
	let itemName = document.getElementById("item-name-input");
	let itemPrice = document.getElementById("item-price-input");
	let name = itemName.value;
	let price = itemPrice.value;
    total += parseInt(price);
    itemName.value = "";
    itemPrice.value = 0;

	arr.push([count, name, price]);
	renderAllOnScreen(arr, total);
}

function renderAllOnScreen(arr, total) {
	let table = document.getElementById("table");
	let tr = document.createElement("tr");

	for (let i=0; i<3; i++) {
		let td = document.createElement("td");
		td.innerText = `${arr[arr.length-1][i]}`;
		tr.append(td);
	}
    table.append(tr);
    document.getElementById("show-total").innerText = `Total : ${total}`;
}
