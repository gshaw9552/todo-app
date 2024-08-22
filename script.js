let todos = [];

    function addTodo() {
        const inputField = document.querySelector("input");
        const inputVal = document.querySelector("input").value.trim();
        if (inputVal === "") {
            alert("Please enter a task");
            return;
        }
        else {
            todos.push({
                title: inputVal
            });
            inputField.value = "";
            render();
        }
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        render();
    }

    function createTodoComponent(todo, index) {
        const div = document.createElement("div");
        div.setAttribute("class", "todo");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const h1 = document.createElement("h1");
        h1.innerHTML = todo.title;

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                h1.style.textDecoration = "line-through";
            } else {
                h1.style.textDecoration = "none";
            }
        });

        const button = document.createElement("button");
        button.innerHTML = "Delete";
        button.setAttribute("onclick", "deleteTodo(" + index + ")");

        div.appendChild(checkbox);
        div.appendChild(h1);
        div.appendChild(button);

        return div;
    }

    function render() {
        document.querySelector("#todos").innerHTML = "";
        for(let i = 0; i < todos.length; i++) {
            const element = createTodoComponent(todos[i], i);
            document.querySelector("#todos").appendChild(element);
        }
    }