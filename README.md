# Todo App

This is a simple Todo App built with React. It allows users to create, update, toggle, filter, and delete todos. Below is an overview of the key features and functionality.

## LIVE

https://todo1app.netlify.app/

## Features

- **Add Todos**: Users can create new todos using the input field.
- **Toggle Todos**: Mark todos as completed or uncompleted by clicking the checkbox.
- **Edit Todos**: Double-click on a todo to edit its content.
- **Delete Todos**: Remove a todo by clicking the delete button.
- **Filter Todos**: Filter todos by:
  - **All**: Show all todos.
  - **Active**: Show only uncompleted todos.
  - **Completed**: Show only completed todos.
- **Clear Completed**: Remove all completed todos from the list.
- **Dynamic Count**: Displays the number of active todos left.

## Code Overview

### `App.jsx`
- **State Management**:
  - `todos`: Stores the list of all todos.
  - `filteredTodos`: Stores the filtered list of todos based on the active filter.
  - `filter`: Tracks the current filter (`all`, `active`, or `completed`).

- **Key Functions**:
  - `createTodo`: Adds a new todo to the list.
  - `removeTodo`: Deletes a todo by its ID.
  - `toggleTodo`: Toggles the `completed` state of a todo.
  - `updateTodo`: Updates the content of a todo.
  - `clearCompleted`: Removes all completed todos.
  - `applyFilter`: Filters the todos based on the selected filter.

### `TodoList.jsx`
- Displays the list of todos.
- Shows a message if no todos match the current filter:
  - `"No active todos found"` for the `active` filter.
  - `"No completed todos found"` for the `completed` filter.
  - `"No todos found"` if there are no todos at all.

### `Todo.jsx`
- Represents a single todo item.
- Handles editing, toggling, and deleting a todo.

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
