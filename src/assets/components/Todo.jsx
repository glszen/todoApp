import './todo.css'
import { useState } from 'react'


function Todo({todo, onRemoveTodo,onToggleTodo, onUpdateTodo}) {

	const {id, content, completed} = todo; // Destructuring assignment ile id ve content'i alıyoruz

	const [editable, seteditable] = useState(false); // editable state'i tanımlıyoruz ve başlangıçta false olarak ayarlıyoruz
	const [inputValue, setInputValue] = useState(content); // inputValue state'i tanımlıyoruz ve başlangıçta content ile ayarlıyoruz

	const removeTodo = () => {
		onRemoveTodo(id); // onRemoveTodo fonksiyonunu çağırıyoruz ve id'yi gönderiyoruz
	}

	const updateTodo = () => {
		const request = {
			id : id,
			content : inputValue
		}
		onUpdateTodo(request); // onUpdateTodo fonksiyonunu çağırıyoruz ve request'i gönderiyoruz
		seteditable(false); // editable state'ini false yapıyoruz
	}


  return (
  <div>
	<section class="main">
		<input class="toggle-all" type="checkbox" />
	

		<ul class="todo-list">
			<li className={completed ? 'completed' : ''}>
				<div class="view">
					<input class="toggle" type="checkbox" checked={completed} onChange={() => onToggleTodo(id)} />
					{
						editable ? <input className='new-todo'  type='text'  value={inputValue} onChange={(e) => setInputValue(e.target.value)}
						
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								updateTodo(); // Enter tuşuna basıldığında updateTodo fonksiyonunu çağırıyoruz
							}
						}}/> : <label onClick={() => seteditable(true)}>{content} </label>
					}
					<button onClick={removeTodo} class="destroy"></button>
					
				</div>
			</li>
			
		</ul>
	</section>


  </div>
  )
}

export default Todo
