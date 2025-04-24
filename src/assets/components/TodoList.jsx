import Todo from './Todo';
import './todo.css';

function TodoList({ todos, onRemoveTodo, onToggleTodo, onUpdateTodo, filter }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>
          {filter === 'active'
            ? 'No active todos found'
            : filter === 'completed'
            ? 'No completed todos found'
            : 'No todos found'}
        </p>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;