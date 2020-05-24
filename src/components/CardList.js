import React from 'react';
import Todo from './Todo';

export default function cardList({ todos }) {
    return (
        <ul>
            {
                todos.map( (todo, i) => { 
                   return <Todo key={todos[i].id} title={todos[i].title} completed={todos[i].completed}/>;
                })
            }
        </ul>
    )
}
