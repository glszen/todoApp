import './todo.css'
import { useState } from 'react'

function TodoCreate({onCreateTodo}) {

    const [newtodo, setNewTodo] = useState('')

    const clearInput = () => {
      setNewTodo(''); // Input'u temizle
    }

    const createTodo = () => {
        if (!newtodo) return; // Eğer newtodo boşsa hiçbir şey yapma

        const request = {
            id: Math.floor(Math.random() * 999999999),
            content: newtodo
        }
        onCreateTodo(request); // Yeni todo'yu oluştur
        clearInput(); // Input'u temizle
    }

  return (
  <div>
	<header class="header">
		<h1>todos</h1>
		<form>
			<input value={newtodo}
            onChange={(e) => setNewTodo(e.target.value)}
            class="new-todo" placeholder="What needs to be done?" autoFocus />
            <button onClick={createTodo}></button>
		</form>
	</header>
  </div>
  )
}

export default TodoCreate
