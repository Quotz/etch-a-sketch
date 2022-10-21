let gridNumber = 16;

function makeGrid(x) {

	let gridPlan = x*x;

	for (let i = 0; i < gridPlan; i++) {
		let div = document.createElement('div');
		div.classList.add('gridItem');
		div.addEventListener('mouseover', () => {
			div.classList.toggle('colored')
			console.log('added event listener')
		});
		let gridContainer = document.querySelector('.gridContainer');
		gridContainer.appendChild(div);
		gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
		gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
		console.log('added grid item');
	}
}

makeGrid(gridNumber);


/*const gridItems = document.querySelectorAll('.gridItem');
gridItems.forEach((item) => {
	item.addEventListener('mouseover', () => {
		item.classList.toggle('colored')
	});
});
*/

function removeGrid() {
	let gridContainer = document.querySelector('.gridContainer');
	while (gridContainer.firstChild) {
  		gridContainer.removeChild(gridContainer.firstChild);
	}
}

const button = document.querySelector('#gridNumberInput')
button.addEventListener('click', () => {
	let userInput = prompt('How many grid items?');
	gridNumber = userInput;
	removeGrid();
	makeGrid(gridNumber);
});