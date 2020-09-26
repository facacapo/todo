import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ) );
todoList.todos.forEach( crearTodoHtml ); // Es igual a la línea de arriba.
// Esto es posible en instrucciones en donde el argumento que queremos enviar es el único argumento que mandamos
// a otra función o método.

console.log('todos', todoList.todos);