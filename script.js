const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

// add event listener to the Add todo button
addTodoBtn.addEventListener("click", () => {
	const newTodo = newTodoInput.value.trim(); // trim to remove leading/trailing whitespaces

	// validate the input
	if (newTodo === "") {
		alert("Please enter a todo item."); // show an alert if the input is empty
		return;
	}

	// create a new list item element and append it to the list
	const listItem = document.createElement("li");
	listItem.textContent = newTodo;
	todoList.appendChild(listItem);

	// clear the input field
	newTodoInput.value = "";
});