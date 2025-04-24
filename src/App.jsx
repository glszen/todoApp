import { useState } from 'react';
import './App.css';
import TodoCreate from './assets/components/TodoCreate.jsx';
import TodoList from './assets/components/TodoList.jsx';

function App() {
  const [todos, setTodos] = useState([]); // Orijinal todo listesi
  const [filteredTodos, setFilteredTodos] = useState([]); // Filtrelenmiş todo listesi
  const [filter, setFilter] = useState('all'); // Aktif filtre durumu

  const createTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    applyFilter(filter, updatedTodos); // Filtreyi güncelle
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
    applyFilter(filter, updatedTodos); // Filtreyi güncelle
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    applyFilter(filter, updatedTodos); // Filtreyi güncelle
  };

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return { ...todo, content: newTodo.content };
      }
      return todo;
    });
    setTodos(updatedTodos);
    applyFilter(filter, updatedTodos); // Filtreyi güncelle
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
    applyFilter(filter, updatedTodos); // Filtreyi güncelle
  };

  const applyFilter = (filter, todosToFilter = todos) => {
    setFilter(filter);
    if (filter === 'active') {
      setFilteredTodos(todosToFilter.filter((todo) => !todo.completed));
    } else if (filter === 'completed') {
      setFilteredTodos(todosToFilter.filter((todo) => todo.completed));
    } else {
      setFilteredTodos(todosToFilter); // Tüm todo'ları göster
    }
  };

  return (
    <div>
      <section className="todoapp">
        <TodoCreate onCreateTodo={createTodo} />

        <section className="main">
          <TodoList
            todos={filteredTodos.length ? filteredTodos : todos} // Filtrelenmiş listeyi göster
            onRemoveTodo={removeTodo}
            onToggleTodo={toggleTodo}
            onUpdateTodo={updateTodo}
          />
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{todos.filter((todo) => !todo.completed).length}</strong> items left
          </span>

          <ul className="filters">
            <li>
              <a
                href="#/"
                className={filter === 'all' ? 'selected' : ''}
                onClick={() => applyFilter('all')}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={filter === 'active' ? 'selected' : ''}
                onClick={() => applyFilter('active')}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={filter === 'completed' ? 'selected' : ''}
                onClick={() => applyFilter('completed')}
              >
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
    </div>
  );
}

export default App;