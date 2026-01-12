const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-add-btn");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTask);

todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask();
    }
});

function addTask() {
    const text = todoInput.value.trim();

    if (text === "") {
        alert("Введите текст задачи!");
        return;
    }

    const li = document.createElement("li");

    // Текст задачи
    const span = document.createElement("span");
    span.textContent = text;

    // Кнопка удаления
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // Чтобы не сработало перечёркивание
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = "";
    todoInput.focus();
}

// Перечёркивание при клике по задаче
todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
    }
});